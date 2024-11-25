import {Component, Input} from '@angular/core';
import {constants, Violation} from "../../models/models";
import {angleIcon, ClarityIcons, colorPickerIcon, objectsIcon, popOutIcon} from "@cds/core/icon";
import {ClrIconModule} from "@clr/angular";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-violation-card',
    standalone: true,
    imports: [ClrIconModule, NgForOf, NgIf],
    templateUrl: './violation-card.component.html',
    styleUrl: './violation-card.component.scss'
})
export class ViolationCardComponent {
    @Input('violations') violations: Violation[] = [];
    constants = constants;

    constructor() {
        ClarityIcons.addIcons(
            objectsIcon,
            colorPickerIcon,
            popOutIcon,
            angleIcon
        );
    }

    selectLayer(nodeId: string) {
        parent.postMessage({
            pluginMessage: {
                type: "select-node",
                nodeId: nodeId
            }
        }, "*");
    }

    fixDetachedNode(nodeId: string) {
        parent.postMessage({
            pluginMessage: {
                type: "fix-detached-node",
                nodeId: nodeId
            }
        }, "*");
    }

    fixHardcodedHexColors(nodeId: string) {
        parent.postMessage({
            pluginMessage: {
                type: "fix-hardcoded-hex-color",
                nodeId: nodeId
            }
        }, "*");
    }
}
