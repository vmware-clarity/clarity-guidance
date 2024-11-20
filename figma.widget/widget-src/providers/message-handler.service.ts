import {Violation} from "../../src/app/models/models";

export abstract class MessageHandlerService {
    private static async isCdsColorVariable (id: string) {
        const result = figma.variables.getVariableById(id);

        return !!(result && result.name.indexOf('--cds-') === -1);
    };

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
                    (node.strokes.length > 0 && !node.strokes[0]?.boundVariables?.color)
                    || (node.fills.length > 0 && !node.fills[0]?.boundVariables?.color)
                );
        });

        const found: Violation[] = []
        for (const node of hardcodedNodes) {
           found.push({
               layerId: node.id,
               type: "5001",
               guidanceUrl: "https://guidance.clarity.design/",
               layerName: node.name,
           })
        }

        console.log(found);
        return found;
    };

    private static selectHardcodedHexColor(fix: boolean) {
        const hardcodedNodes = figma.currentPage.findAll(node => {
            return node.type === 'INSTANCE'
                && (
                    (node.strokes.length > 0 && !node.strokes[0]?.boundVariables?.color)
                    || (node.fills.length > 0 && !node.fills[0]?.boundVariables?.color)
                );
        });

        console.log(hardcodedNodes);

        if (hardcodedNodes.length > 0) {
            figma.currentPage.selection = hardcodedNodes;
            figma.viewport.scrollAndZoomIntoView(hardcodedNodes);

            if (fix) {
                hardcodedNodes.forEach(node => {
                    if ("resetOverrides" in node) {
                        node.resetOverrides();
                    }
                });

                figma.ui.postMessage({
                    type: "change",
                    data: {
                        hide: "5001"
                    }
                });
            }
        }
    }

    private static findAndSelectDetachedNodes() {
        const detachedNodes = figma.currentPage.findAll(node => {
            return !!node.detachedInfo;
        });

        console.log(detachedNodes);

        const found: Violation[] = []
        for (const node of detachedNodes) {
            found.push({
                layerId: node.id,
                type: "5002",
                guidanceUrl: "https://guidance.clarity.design/",
                layerName: node.name,
            })
        }

        return found;
    }

    private static selectDetachedNodes() {
        const detachedNodes = figma.currentPage.findAll(node => {
            return !!node.detachedInfo;
        });

        figma.currentPage.selection = detachedNodes;
        figma.viewport.scrollAndZoomIntoView(detachedNodes);
    }

    private static async fixDetachedNodes() {
        const detachedNodes = figma.currentPage.findAll(node => {
            return !!node.detachedInfo;
        });

        if (detachedNodes.length > 0) {
            const newNodes: InstanceNode[] = [];

            for (let i = 0; i < detachedNodes.length; i++) {
                const node = detachedNodes[i];
                const result = await figma.importComponentByKeyAsync(node.detachedInfo.componentKey);

                const instance = result.createInstance();
                newNodes.push(instance);

                instance.x = node.x
                instance.y = node.y
                node.parent?.appendChild(instance);

                node.remove();
            }

            figma.currentPage.selection = newNodes;
            figma.viewport.scrollAndZoomIntoView(newNodes);

            figma.ui.postMessage({
                type: "change",
                data: {
                    hide: "5002"
                }
            });
        }
    }

    private static async selectNode(nodeId: string) {
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
          case 'select-hardcoded-hex-color':
              MessageHandlerService.selectHardcodedHexColor(false);
          break;
          case 'fix-hardcoded-hex-color':
              MessageHandlerService.selectHardcodedHexColor(true);
              break;
          case 'select-detached-nodes':
              MessageHandlerService.selectDetachedNodes();
          break;
          case 'fix-detached-nodes':
              await MessageHandlerService.fixDetachedNodes();
              break;
          case'close':
          default:
              figma.closePlugin();
      }
  }
}
