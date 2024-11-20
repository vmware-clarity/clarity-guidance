import {Component, HostListener, ViewEncapsulation} from '@angular/core';
import { ClarityModule } from '@clr/angular';
import {NgForOf, NgIf} from "@angular/common";
import {ClarityIcons, colorPickerIcon, objectsIcon} from "@cds/core/icon";
import {ResultsComponent} from "../results/results.component";
import {Violation} from "../models/models";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  // Load all components for demo purposes.
  // Don't do this in a real application. Load just the components you need so that your bundle is smaller.
  imports: [ClarityModule, NgIf, NgForOf, ResultsComponent],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent {
  search = false;
  showGuidance = false;

  showViolations = false;
  hexViolations: Violation[] = [];
  detachedViolations: Violation[] = [];

  // hexViolations: Violation[] = [{
  //   "layerId": "2o472304923:43223",
  //   "type": "5001",
  //   "guidanceUrl": "https://guidance.clarity.design/",
  //   "layerName": "guidance 1",
  // }, {
  //   "layerId": "2o472304923:43223",
  //   "type": "5001",
  //   "guidanceUrl": "https://guidance.clarity.design/",
  //   "layerName": "guidance 1",
  // }];
  // detachedViolations: Violation[] = [{
  //   "layerId": "2o472304923:43223",
  //   "type": "5002",
  //   "guidanceUrl": "https://guidance.clarity.design/",
  //   "layerName": "guidance 1",
  // }, {
  //   "layerId": "2o472304923:43223",
  //   "type": "5002",
  //   "guidanceUrl": "https://guidance.clarity.design/",
  //   "layerName": "guidance 1",
  // }];

  guidanceLinks: any[] = [{
      url: 'https://guidance.clarity.design/1001',
      name: 'Guidance'
    },{
      url: 'https://clarity.design/documentation/alert',
      name: 'Clarity Design'
    },{
      url: 'https://storybook.clarity.design/?path=/story/alert',
      name: 'Storybook'
    },
  ];

  private guidanceMap: any = {
    "d998b0f409cc0f78e0e324f07c0a3b63f6c0b4a1": "1004-button-group-design-guidance",
    "c9444889cbdde9ef8477e90f8e17c272a4b7c4a8": "1004-button-group-design-guidance",
    "202a2280491014750988fb3718effd7bb7c205e8": "1004-button-group-design-guidance",
    "74ce5710800e76cc171f66159214168fc18f4110": "1001-alert-design-guidance",
    "7352dc183b8096c4b30208d504923ba81c506409": "1001-alert-design-guidance",
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

    parent.postMessage({pluginMessage: {type: "find-errors"}}, "*");
  }

  @HostListener('window:message', ['$event'])
  onMessage(message: MessageEvent) {
    console.log(message);

    if (message.type !== "message") {
      return;
    }

    switch (message.data.pluginMessage.type) {
      case'selectionChange':
        this.selectionChange(message.data.pluginMessage.data);
        break;
      case'violations':
        this.violations(message.data.pluginMessage.data);
        this.search = false;
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

  selectionChange(data: any) {
    console.log(data);
    if (data.length === 0) {
      this.showGuidance = false;
    }

    for (let i = 0; i < data.length; i++) {
      const entry = data[i];
      const guidanceName = this.guidanceMap[entry.key];
      console.log(guidanceName)

      // const result = await fetch(`https://cdn.jsdelivr.net/gh/vmware-clarity/clarity-guidance/${guidanceName}.md`);
      // let text = (await result.text()).split("---").pop();

      this.guidanceLinks = entry.links as any[];

      this.showGuidance = guidanceName.startsWith('1001') || guidanceName.startsWith('1004');
      console.log(this.showGuidance)
    }
  }

  change(data: any) {
    if(data.hide === "5002") {
      this.detachedViolations = [];
      return;
    }

    if(data.hide === "5001") {
      this.hexViolations = [];
      return;
    }

    this.violations(data);
  }

  violations(data: any) {
    if (data.violations[5002]) {
      this.showResults()

      this.detachedViolations = data.violations[5002];
    }

    if (data.violations[5001]) {
      this.showResults()

      this.hexViolations = data.violations[5001];
    }
  }

  showResults() {
    this.showViolations = true;
    this.showGuidance = false;
  }
}
