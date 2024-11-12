import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { ClarityModule } from '@clr/angular';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  standalone: true,
  // Load all components for demo purposes.
  // Don't do this in a real application. Load just the components you need so that your bundle is smaller.
  imports: [ClarityModule, NgIf, NgForOf],
})
export class ExampleComponent {
  showDetachedViolation = false;
  showHexViolation = false;
  showGuidance = false;
  toggleGuidance = false;
  hexTitle = '';
  detachedTitle = '';
  guidanceLinks: any[] = [];

  @ViewChild('guidanceContentTitle') private guidanceContentTitle: ElementRef<HTMLElement> | undefined;


  private guidanceMap: any = {
    "d998b0f409cc0f78e0e324f07c0a3b63f6c0b4a1": "1004-button-group-design-guidance",
    "c9444889cbdde9ef8477e90f8e17c272a4b7c4a8": "1004-button-group-design-guidance",
    "202a2280491014750988fb3718effd7bb7c205e8": "1004-button-group-design-guidance",
    "74ce5710800e76cc171f66159214168fc18f4110": "1001-alert-design-guidance",
    "7352dc183b8096c4b30208d504923ba81c506409": "1001-alert-design-guidance",
  };

  close() {
    parent.postMessage({pluginMessage: {type: "close"}}, "*");
  }

  checkViolations(){
    this.findHexErrors();
    this.detachedNodesCheck();
  }

  findHexErrors(){
    parent.postMessage({pluginMessage: {type: "find-hex-errors"}}, "*");
  }

  detachedNodesCheck(){
    parent.postMessage({pluginMessage: {type: "find-select-detached-nodes"}}, "*");
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
        break;
      case 'change':
        this.change(message.data.pluginMessage.data);
        break;
      default:
    }
  }

  fixDetachedNodes() {
    this.showDetachedViolation = false;

    parent.postMessage({pluginMessage: {type: "fix-detached-nodes"}}, "*");
  }

  selectHardcodedHexColors() {
    this.showHexViolation = false;

    parent.postMessage({pluginMessage: {type: "select-hardcoded-hex-color"}}, "*");
  }

  get hasLinks () {
    return this.guidanceLinks.length > 0;
  }

  selectionChange(data: any) {
    console.log(data)
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

      this.toggleGuidance = guidanceName.startsWith('1001');
      console.log(this.toggleGuidance)

      this.showGuidance = guidanceName.startsWith('1001') || guidanceName.startsWith('1004');
      console.log(this.showGuidance)
    }
  }

  change(data: any) {
    if(data.hide === "5002") {
      this.showDetachedViolation = false;
      return;
    }

    if(data.hide === "5001") {
      this.showHexViolation = false;
      return;
    }

    this.violations(data);
  }

  violations(data: any) {
    if (data.key === "5002") {
      this.detachedTitle = data.rule;
      this.showDetachedViolation = true;
    }

    if (data.key === "5001") {
      this.hexTitle = data.rule;
      this.showHexViolation = true;
    }
  }
}
