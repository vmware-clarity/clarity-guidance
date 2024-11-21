import domino from 'domino';
import parseFrontMatter from 'front-matter';
import fs from 'fs';
import { glob } from 'glob';
import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { markedHighlight } from 'marked-highlight';
import path from 'path';
import prismjs from 'prismjs';

// add languages for code highlighting
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-typescript';

// heading ids
marked.use(gfmHeadingId());

// code highlight
marked.use(
  markedHighlight({
    highlight: (code, lang) =>
      prismjs.languages[lang] ? prismjs.highlight(code, prismjs.languages[lang], lang) : code,
  }),
);

main();

interface Page {
  filename: string;
  number: number | undefined;
  title: string | undefined;
  category: string | undefined;
  state: string | undefined;
}

interface PageAttributes {
  category: string;
  state: string;
  created: Date;
  updated: Date;
}

async function main() {
  const compiledContentPath = './src/compiled-content';

  const pages: Page[] = [];

  for (const pageFilePath of glob.sync('../*.md')) {
    const { page, componentClass, componentTemplate, figmaJson } = await compilePage(pageFilePath);

    if (pages.find(({ number }) => number === page.number)) {
      throw new Error(`Duplicate page number: ${page.number}`);
    }

    pages.push(page);

    writeText(`${page.filename}.component.ts`, componentClass);
    writeText(`${page.filename}.component.html`, componentTemplate);

    if (page.number) {
      writeJson(path.join('figma-plugin-json', `${page.number?.toString().padStart(4, '0')}.json`), figmaJson);
    }
  }

  pages.sort((a, b) => (a.number || 0) - (b.number || 0));

  const cipPages = pages.filter(page => page.number !== undefined);

  writeJson('cip-pages.json', cipPages);
  writeText('page-routes.ts', getPageRoutesTs(pages));

  function writeJson(filename: string, data: object) {
    writeFile(filename, JSON.stringify(data, undefined, 2));
  }

  function writeText(filename: string, text: string) {
    writeFile(filename, `${text.trim()}\n`);
  }

  function writeFile(filename: string, contents: string) {
    fs.writeFileSync(path.join(compiledContentPath, filename), contents);
  }
}

function getPageRoutesTs(pages: Page[]) {
  return `
import { Routes } from '@angular/router';

export const pageRoutes: Routes = [
  ${pages.map(({ filename, number }) => `{ path: '${number || ''}', loadComponent: () => import('./${filename}.component').then(m => m.PageComponent) },`).join('\n  ')}
];`;
}

async function compilePage(pageFilePath: string) {
  const filename = path.parse(pageFilePath).name;
  const number = filename === 'README' ? undefined : +filename.split('-')[0];
  const { attributes, body } = parseFrontMatter(fs.readFileSync(pageFilePath).toString());
  const { category, state, created, updated } = attributes as PageAttributes;

  const document = domino.createDocument(await marked(body));
  const title = document.querySelector('h1')?.innerHTML.trim();

  styleContent(document);

  const { componentClass, componentTemplate } = number ? generateCipPageComponent() : generateReadmePageComponent();
  const figmaJson = generateFigmaJson();

  const page: Page = {
    filename,
    number,
    title,
    category,
    state,
  };

  return {
    page,
    componentClass,
    componentTemplate,
    figmaJson,
  };

  function generateCipPageComponent() {
    const componentClass = `
import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CipPageComponent } from '../app/components/cip-page/cip-page.component';

@Component({
  templateUrl: './${filename}.component.html',
  standalone: true,
  imports: [CipPageComponent],
  preserveWhitespaces: true,
})
export class PageComponent implements OnInit {
  private readonly title = inject(Title);

  ngOnInit() {
    this.title.setTitle('${title} | Clarity Guidance');
  }
}
`;

    const componentTemplate = `
<app-cip-page
  [filename]="'${filename}'"
  [title]="'${title}'"
  [number]="${number}"
  [state]="${state ? `'${state}'` : 'undefined'}"
  [created]="${created ? `'${toYYYYMMDD(created)}'` : 'undefined'}"
  [updated]="${updated ? `'${toYYYYMMDD(updated)}'` : 'undefined'}"
>
  ${escapeHtmlForComponentTemplate(document.body.innerHTML)}
</app-cip-page>
`;

    return { componentClass, componentTemplate };

    function toYYYYMMDD(date: Date) {
      return date.toISOString().split('T')[0];
    }
  }

  function generateReadmePageComponent() {
    const componentClass = `
import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CipIndexComponent } from '../app/components/cip-index/cip-index.component';

@Component({
  templateUrl: './${filename}.component.html',
  standalone: true,
  imports: [CipIndexComponent],
  preserveWhitespaces: true,
})
export class PageComponent implements OnInit {
  private readonly title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Clarity Guidance');
  }
}
`;

    const componentTemplate = `
<article class="page-content">
  ${escapeHtmlForComponentTemplate(document.body.innerHTML)}
  <app-cip-index></app-cip-index>
</article>
`;

    return { componentClass, componentTemplate };
  }

  function generateFigmaJson() {
    const result = [];

    for (let i = 0; i < document.body.children.length; i++) {
      if (document.body.children[i].tagName === 'H3') {
        let content = document.body.children[i + 1].outerHTML
          .replaceAll('cds-layout="m-t:md"', '')
          .replaceAll('cds-list="circle"', 'class="list"');

        if (
          document.body.children[i + 1].tagName === 'P' &&
          document.body.children[i + 2] &&
          document.body.children[i + 2].tagName === 'UL'
        ) {
          content += document.body.children[i + 2].outerHTML.replaceAll('cds-list="circle"', 'class="list"');
        }

        result.push({
          title: document.body.children[i].textContent,
          content: content,
        });
      }
    }

    return result;
  }

  function escapeHtmlForComponentTemplate(html: string) {
    return html.replaceAll('@', '&#64;').replaceAll('{', '&#123;').replaceAll('}', '&#125;');
  }
}

function styleContent(document: Document) {
  styleTables(document);
  styleInlineCode(document);
  styleText(document);
  styleKeywords(document);
  openExternalLinksInNewTab(document);

  function styleTables(document: Document) {
    for (const tableElement of Array.from(document.querySelectorAll('table'))) {
      tableElement.classList.add('table');
    }
  }

  function styleInlineCode(document: Document) {
    for (const codeElement of Array.from(document.querySelectorAll('code:not(pre code)'))) {
      codeElement.setAttribute('cds-text', 'code');
    }
  }

  function styleText(document: Document) {
    const defaultAttributes = {
      h1: [{ attributeName: 'cds-text', attributeValue: 'headline' }],
      h2: [
        { attributeName: 'cds-text', attributeValue: 'title' },
        { attributeName: 'cds-layout', attributeValue: 'm-t:xl' },
      ],
      h3: [
        { attributeName: 'cds-text', attributeValue: 'section' },
        { attributeName: 'cds-layout', attributeValue: 'm-t:lg' },
      ],
      h4: [
        { attributeName: 'cds-text', attributeValue: 'subsection' },
        { attributeName: 'cds-layout', attributeValue: 'm-t:md' },
      ],
      h5: [
        { attributeName: 'cds-text', attributeValue: 'subsection light' },
        { attributeName: 'cds-layout', attributeValue: 'm-t:md' },
      ],
      h6: [
        { attributeName: 'cds-text', attributeValue: 'body bold' },
        { attributeName: 'cds-layout', attributeValue: 'm-t:md' },
      ],
      'h1 + p': [
        { attributeName: 'cds-text', attributeValue: 'subsection' },
        { attributeName: 'cds-layout', attributeValue: 'm-t:xl' },
      ],
      p: [
        { attributeName: 'cds-text', attributeValue: 'body' },
        { attributeName: 'cds-layout', attributeValue: 'm-t:md' },
      ],
      table: [
        { attributeName: 'cds-text', attributeValue: 'body' },
        { attributeName: 'cds-layout', attributeValue: 'm-t:md' },
      ],
      'li > ul, li > ol': [{ attributeName: 'cds-layout', attributeValue: '' }],
      ol: [
        { attributeName: 'cds-list', attributeValue: 'decimal' },
        { attributeName: 'cds-layout', attributeValue: 'm-t:md' },
      ],
      ul: [
        { attributeName: 'cds-list', attributeValue: 'circle' },
        { attributeName: 'cds-layout', attributeValue: 'm-t:md' },
      ],
      img: [{ attributeName: 'cds-layout', attributeValue: 'm-t:xxl' }],
      strong: [{ attributeName: 'cds-text', attributeValue: 'medium' }],
      'a[href]': [{ attributeName: 'cds-text', attributeValue: 'link' }],
    };

    for (const [rawSelector, attributes] of Object.entries(defaultAttributes)) {
      for (const { attributeName, attributeValue } of attributes) {
        const selector = rawSelector
          .split(/,\s*/g)
          .map(singleSelector => `${singleSelector}:not([${attributeName}])`)
          .join(', ');

        for (const element of Array.from(document.querySelectorAll(selector))) {
          element.setAttribute(attributeName, attributeValue);
        }
      }
    }
  }

  function styleKeywords(document: Document) {
    const keywordColors: Record<string, string> = {
      must: '--cds-alias-status-danger',
      'must not': '--cds-alias-status-danger',
      should: '--cds-alias-status-warning-dark',
      'should not': '--cds-alias-status-warning-dark',
      may: '--cds-alias-status-success',
    };

    for (const element of Array.from(document.querySelectorAll('strong'))) {
      const text = element.textContent?.trim().toLowerCase();

      if (text && keywordColors[text]) {
        element.setAttribute('cds-text', 'bold');
        element.setAttribute('style', `color: var(${keywordColors[text]})`);
      }
    }
  }

  function openExternalLinksInNewTab(document: Document) {
    for (const linkElement of Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href]'))) {
      if (!linkElement.href.startsWith('/')) {
        linkElement.setAttribute('rel', 'noopener');
        linkElement.setAttribute('target', '_blank');
      }
    }
  }
}
