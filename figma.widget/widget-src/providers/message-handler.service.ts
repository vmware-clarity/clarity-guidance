import {Violation} from "../../src/app/models/models";

export abstract class MessageHandlerService {
    public static async isCdsColorVariable (id: string) {
        const result = await figma.variables.getVariableByIdAsync(id);

        return !!(result && result.name.indexOf('--cds-') === -1);
    }

    private static findErrors() {
        const result = {};
        const foundHexErrors = MessageHandlerService.findHexErrors();

        if(foundHexErrors.length > 0) {
            result[5001] = foundHexErrors;
        }

        const foundDetachedNodes = MessageHandlerService.findAndSelectDetachedNodes();

        if(foundDetachedNodes.length > 0) {
            result[5002] = foundDetachedNodes;
        }

        figma.ui.postMessage({
            type: "violations",
            data: {
                violations: result
            }
        });
    }

    private static findHexErrors() {
        const hardcodedNodes = figma.currentPage.findAll(node => {
            return node.type === 'INSTANCE'
                && (
                    (node.strokes && node.strokes.length > 0 && !node.strokes[0]?.boundVariables?.color)
                    || (node.fills && node.fills.length > 0 && !node.fills[0]?.boundVariables?.color)
                );
        });

        return this.createViolations("5001", hardcodedNodes);
    }

    private static fixHardcodedHexColor(nodeId: string) {
        const hardcodedNodes = figma.currentPage.findAll(node => {
            return node.id === nodeId
        });

        this.resetOverrides(hardcodedNodes);
    }

    private static resetOverrides(nodes: SceneNode[]) {
        if (nodes.length > 0) {
            nodes.forEach(node => {
                if ("resetOverrides" in node) {
                    node.resetOverrides();
                }
            });

            figma.ui.postMessage({
                type: "change",
                data: {
                    hide: "5001",
                    nodeIds: nodes.map(node => node.id)
                }
            });
        }
    }

    private static fixHardcodedHexColors() {
        const hardcodedNodes = figma.currentPage.findAll(node => {
            return node.type === 'INSTANCE'
                && (
                    (node.strokes.length > 0 && !node.strokes[0]?.boundVariables?.color)
                    || (node.fills.length > 0 && !node.fills[0]?.boundVariables?.color)
                );
        });

        this.resetOverrides(hardcodedNodes);
    }

    private static findAndSelectDetachedNodes() {
        const detachedNodes = figma.currentPage.findAll(node => {
            return !!node.detachedInfo;
        });

        return this.createViolations("5002", detachedNodes);
    }

    public static createViolations(type : "5002" | "5001", detachedNodes: SceneNode[]) {
        const found: Violation[] = []
        for (const node of detachedNodes) {
            found.push({
                layerId: node.id,
                type: type,
                guidanceUrl: "https://guidance.clarity.design/",
                layerName: node.name,
            })
        }

        return found;
    }

    private static async recreateNodeInstance(nodes: SceneNode[]) {
        if (nodes.length > 0) {
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                const result = await figma.importComponentByKeyAsync(node.detachedInfo.componentKey);

                const instance = result.createInstance();

                instance.x = node.x
                instance.y = node.y
                node.parent?.appendChild(instance);

                node.remove();
            }

            figma.ui.postMessage({
                type: "change",
                data: {
                    hide: "5002",
                    nodeIds: nodes.map(node => node.id)
                }
            });
        }
    }

    private static async fixDetachedNode(nodeId: string) {
        const detachedNodes = figma.currentPage.findAll(node => {
            return node.id === nodeId && !!node.detachedInfo;
        });

        await MessageHandlerService.recreateNodeInstance(detachedNodes);
    }

    private static async fixDetachedNodes() {
        const detachedNodes = figma.currentPage.findAll(node => {
            return !!node.detachedInfo;
        });

        await MessageHandlerService.recreateNodeInstance(detachedNodes);
    }

    private static selectNode(nodeId: string) {
        const node = figma.currentPage.findAll(node => {
            return node.id === nodeId;
        });

        figma.currentPage.selection = node;
        figma.viewport.scrollAndZoomIntoView(node);
    }

  static async handleMessage(message: any) {
      console.log('handleMessage',message);

      switch (message.type) {
          case 'find-errors':
              MessageHandlerService.findErrors();
          break;
          case 'select-node':
              MessageHandlerService.selectNode(message.nodeId);
              break;
          case 'fix-hardcoded-hex-colors':
              MessageHandlerService.fixHardcodedHexColors();
              break;
          case 'fix-hardcoded-hex-color':
              MessageHandlerService.fixHardcodedHexColor(message.nodeId);
          break;
          case 'fix-detached-nodes':
              await MessageHandlerService.fixDetachedNodes();
              break;
          case 'fix-detached-node':
              await MessageHandlerService.fixDetachedNode(message.nodeId);
              break;
          case'close':
          default:
              figma.closePlugin();
      }
  }
}
