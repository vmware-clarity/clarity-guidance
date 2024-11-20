import {Component, Input, ViewEncapsulation} from '@angular/core';
import { ClarityModule } from '@clr/angular';
import {NgIf} from "@angular/common";
import {Violation } from "../models/models";
import {ViolationCardComponent} from "./violation-card/violation-card.component";

@Component({
  selector: 'results-component',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  standalone: true,
  // Load all components for demo purposes.
  // Don't do this in a real application. Load just the components you need so that your bundle is smaller.
  imports: [ClarityModule, NgIf, ViolationCardComponent],
  encapsulation: ViewEncapsulation.None
})
export class ResultsComponent {
  _hexErrors: Violation[] = [];
  _detachedNodes: Violation[] = [];

  @Input('hex-violations')
  get hexErrors(): Violation[] {
    return this._hexErrors;
  }
  set hexErrors(errors: Violation[]) {
     this._hexErrors = errors;
  }

  @Input('detached-nodes')
  get detachedNodes(): Violation[] {
    return this._detachedNodes;
  }
  set detachedNodes(errors: Violation[]) {
    this._detachedNodes = errors;
  }

  get allViolations(): Violation[] {
    return [...this._hexErrors, ...this._detachedNodes];
  }
}
