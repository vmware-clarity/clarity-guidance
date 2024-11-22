import {Component, HostListener, ViewEncapsulation} from '@angular/core';
import { ClarityModule } from '@clr/angular';
import {NgForOf, NgIf} from "@angular/common";
import {ClarityIcons, colorPickerIcon, objectsIcon} from "@cds/core/icon";
import {ResultsComponent} from "../results/results.component";
import {Violation} from "../models/models";
import {EscapeHtmlPipe} from "../pipes/keepHtml.pipe";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [ ClarityModule, NgIf, NgForOf, ResultsComponent, EscapeHtmlPipe ],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent {
  search = false;
  showGuidance = false;
  afterScanning = false;

  showViolations = false;
  hexViolations: Violation[] = [];
  detachedViolations: Violation[] = [];

  guidanceLinks: any[] = [];
  guidance: any[] = [];

  private guidanceMap: any = {
    "d998b0f409cc0f78e0e324f07c0a3b63f6c0b4a1": "1004",
    "c9444889cbdde9ef8477e90f8e17c272a4b7c4a8": "1004",
    "202a2280491014750988fb3718effd7bb7c205e8": "1004",
    "74ce5710800e76cc171f66159214168fc18f4110": "1018",
    "7352dc183b8096c4b30208d504923ba81c506409": "1018",
  };

  constructor() {
    ClarityIcons.addIcons(
        objectsIcon,
        colorPickerIcon
    );
  }

  get hasViolations(): boolean {
    return !!(this.hexViolations.length || this.detachedViolations.length);
  }

  checkViolations(){
    this.search = true;
    this.hexViolations = [];
    this.detachedViolations = [];

    parent.postMessage({pluginMessage: {type: "find-errors"}}, "*");
  }

  @HostListener('window:message', ['$event'])
  async onMessage(message: MessageEvent) {
    console.log(message);

    if (message.type !== "message") {
      return;
    }

    switch (message.data.pluginMessage.type) {
      case'selectionChange':
        await this.selectionChange(message.data.pluginMessage.data);
        break;
      case'violations':
        this.violations(message.data.pluginMessage.data);
        this.search = false;
        this.afterScanning = true;
        break;
      case 'change':
        this.change(message.data.pluginMessage.data);
        break;
      default:
    }
  }

  get hasLinks () {
    return this.guidanceLinks.length > 0;
  }

  async selectionChange(data: any) {
    console.log(data);
    if (data.length === 0) {
      this.showGuidance = false;
      this.guidance = [];
    }

    for (let i = 0; i < data.length; i++) {
      const entry = data[i];
      const guidanceName = this.guidanceMap[entry.key];

      const result = await fetch(`https://42--clarity-guidance.netlify.app/figma-plugin-json/${guidanceName}.json`);
      this.guidance = (await result.json());

      this.guidanceLinks = entry.links as any[];

      this.showGuidance = true;
    }
  }

  change(data: any) {
    if(data.hide === "5002") {
      this.detachedViolations = this.detachedViolations.filter(
          (violation) => !data.nodeIds.includes(violation.layerId)
      );
      return;
    }

    if(data.hide === "5001") {
      this.hexViolations = this.hexViolations.filter(
          (violation) => !data.nodeIds.includes(violation.layerId)
      );
      return;
    }

    this.violations(data);
  }

  violations(data: any) {
    if (data.violations[5002]) {
      this.showResults()

      this.detachedViolations = this.detachedViolations.concat(data.violations[5002]);
    }

    if (data.violations[5001]) {
      this.showResults()

      this.hexViolations = this.hexViolations.concat(data.violations[5001].filter(
          (violation2: Violation) =>
              !this.hexViolations.some(violation1 => violation1.layerId === violation2.layerId)));
    }
  }

  showResults() {
    this.showViolations = true;
  }
}
