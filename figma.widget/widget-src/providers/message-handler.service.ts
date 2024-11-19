export abstract class MessageHandlerService {
    private static async isCdsColorVariable (id: string) {
        const result = figma.variables.getVariableById(id);

        return !!(result && result.name.indexOf('--cds-') === -1);
    };

    private static findHexError () {
        const nodes = figma.currentPage.findAll((node) => {
            return node.type === 'INSTANCE';
        });

        const found = []
        for (const node of nodes) {
            let result = false;
            if (node.fills
                && node.fills[0]
                && node.fills[0].boundVariables
                && node.fills[0].boundVariables.color) {
                result = MessageHandlerService.isCdsColorVariable(node.fills[0].boundVariables.color.id);
            } else {
                found.push(node);
                continue;
            }

            if (result) {
                found.push(node);
                continue;
            }

            if (node.strokes
                && node.strokes[0]
                && node.strokes[0].boundVariables
                && node.strokes[0].boundVariables.borderColor) {
                result = MessageHandlerService.isCdsColorVariable(node.strokes[0].boundVariables.borderColor.id);
            } else {
                console.log(node);
                found.push(node);
                continue;
            }

            if (result) {
                found.push(node);
            }
        }

        console.log(found);

        // const wrongColors = figma.getSelectionColors()?.paints.filter(value => {
        //     if (!value?.boundVariables?.color?.id) {
        //         return value;
        //     }
        // }).map(color => {
        //     return JSON.stringify(color.color);
        // });
        //
        // console.log(wrongColors);

        // figma.currentPage.selection = origSelection;
        figma.notify('CIP - widget: Violations Check completed.');

        if(nodes.length > 0) {
            figma.ui.postMessage({
                type: "violations",
                data: {
                    key: "5001",
                    recommendation: "Recommendation: Use Clarity components color tokens. Alias preferably.",
                    rule: `color violate NO hard coded HEX values.`
                }
            });
        }
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

  static async handleMessage(message: any) {
      console.log('handleMessage',message);

      switch (message.type) {
          case 'find-hex-errors':
              MessageHandlerService.findHexError();
          break;
          case 'select-hardcoded-hex-color':
              MessageHandlerService.selectHardcodedHexColor(false);
          break;
          case 'fix-hardcoded-hex-color':
              MessageHandlerService.selectHardcodedHexColor(true);
              break;
          case 'find-select-detached-nodes':
              MessageHandlerService.findAndSelectDetachedNodes();
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
