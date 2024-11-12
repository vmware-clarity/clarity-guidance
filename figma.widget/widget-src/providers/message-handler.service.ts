
export abstract class MessageHandlerService {
    private static findHexError () {
        figma.notify('CIP - widget: Violations checking...');
        const origSelection = figma.currentPage.selection;

        figma.currentPage.selection = figma.currentPage.findAll(node => {
            return node.type === 'INSTANCE';
        });

        const wrongColors = figma.getSelectionColors()?.paints.filter(value => {
            if (!value?.boundVariables?.color?.id) {
                return value;
            }
        }).map(color => {
            return JSON.stringify(color.color);
        });

        console.log(wrongColors);

        figma.currentPage.selection = origSelection;
        figma.notify('CIP - widget: Violations Check completed.');

        if(wrongColors?.length) {
            figma.ui.postMessage({
                type: "violations",
                data: {
                    key: "5001",
                    recommendation: "Recommendation: Use Clarity components color tokens. Alias preferably.",
                    rule: `${wrongColors.length} color violate NO hard coded HEX values. ${wrongColors}`
                }
            });
        }
    };

    private static selectHardcodedHexColor() {
        const hardcodedNodes = figma.currentPage.findAll(node => {
            if (node.type === 'INSTANCE'
                && (
                    (node.strokes.length > 0 && !node.strokes[0]?.boundVariables?.color)
                    || (node.fills.length > 0 && !node.fills[0]?.boundVariables?.color)
                )
            ) {
                node.resetOverrides();

                return true;
            }

            return false;
        });

        console.log(hardcodedNodes);

        if (hardcodedNodes.length > 0) {
            hardcodedNodes.forEach(node => {
                if ("resetOverrides" in node) {
                    node.resetOverrides();
                }
            })

            figma.currentPage.selection = hardcodedNodes;
            figma.viewport.scrollAndZoomIntoView(hardcodedNodes);

            figma.ui.postMessage({
                type: "change",
                data: {
                    hide: "5001"
                }
            });
        }
    }


    private static findAndSelectDetachedNodes() {
        const detachedNodes = figma.currentPage.findAll(node => {
            return !!node.detachedInfo;
        });

        console.log(detachedNodes);

        if (detachedNodes.length > 0) {
            console.log('parent', detachedNodes[0].parent);
            figma.currentPage.selection = detachedNodes;
            figma.viewport.scrollAndZoomIntoView(detachedNodes);

            figma.ui.postMessage({
                type: "violations",
                data: {
                    key: "5002",
                    recommendation: "Recommendation: Reattach Clarity components.",
                    rule: `${detachedNodes.length} detached Clarity components found and selected.`
                }
            });
        } else {
            figma.notify('CIP - widget: No detached nodes found.');
        }
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

  static async handleMessage(message: any) {
      console.log('handleMessage',message);

      switch (message.type) {
          case'find-hex-errors':
              MessageHandlerService.findHexError();
          break;
          case'select-hardcoded-hex-color':
              MessageHandlerService.selectHardcodedHexColor();
          break;
          case'find-select-detached-nodes':
              MessageHandlerService.findAndSelectDetachedNodes();
          break;
          case'fix-detached-nodes':
              await MessageHandlerService.fixDetachedNodes();
          break;
          case'close':
          default:
              figma.closePlugin();
      }
  }
}
