import { Pipe, PipeTransform } from '@angular/core';

const suffixes = ['Design Guidance', 'Developer Guidance'];

@Pipe({
  name: 'appSiteNavRemovePageTitleSuffix',
  standalone: true,
})
export class SiteNavRemovePageTitleSuffixPipe implements PipeTransform {
  transform(value: string): string {
    for (const suffix of suffixes) {
      if (value.endsWith(suffix)) {
        value = value.substring(0, value.length - suffix.length).trim();
      }
    }

    return value;
  }
}
