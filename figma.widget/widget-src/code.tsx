// This widget will open an Iframe window with buttons to show a toast message and close the window.

import {MessageHandlerService} from "./providers/message-handler.service";

const {widget} = figma;
const {useEffect, AutoLayout, Text} = widget

function Widget() {
    useEffect(() => {
        figma.ui.onmessage = MessageHandlerService.handleMessage.bind(figma);
    })
    return (
        <AutoLayout
            width={300}
            height={100}
            padding={12}
        >
            <Text
                fontSize={24}
                width={240}
                onClick={
                    // Use async callbacks or return a promise to keep the Iframe window
                    // opened. Resolving the promise, closing the Iframe window, or calling
                    // "figma.closePlugin()" will terminate the code.
                    () => {
                        return new Promise(() => {
                            figma.showUI(__html__, {width: 360, height: 720 , themeColors: true});
                        });
                    }
                }
            >
                Open Clarity Design Guidance
            </Text>
        </AutoLayout>
    )
}

widget.register(Widget)

// figma.loadAllPagesAsync().then(r => {
//     console.log(r)
//     figma.on("documentchange", _event => {
//         console.log(_event)
//         console.log(figma.currentPage.on())
//         // When a change happens in the document
//         // send a message to the plugin to look for changes.'
//         figma.ui.postMessage({
//             type: "change"
//         });
//     });
// });

figma.on("selectionchange", async () => {
    console.log("selectionchange", figma.currentPage.selection);

    const componentNodeKeys: { key: string, links:  { url: string; name: string; }[] }[] = [];

    for (let i = 0; i < figma.currentPage.selection.length; i++) {
        const node = figma.currentPage.selection[i];
        if (node.type === "INSTANCE") {
            const componentNode = await node.getMainComponentAsync();

            if (componentNode && componentNode.parent?.type === 'COMPONENT_SET') {

                const urls = [
                    // ...componentNode.parent.documentationLinks.map(link => link.uri),
                    ...(await componentNode?.parent.getDevResourcesAsync()).map(link => {
                        return { url: link.url, name: link.name };
                    })
                ]
                componentNodeKeys.push({
                    key: componentNode.parent.key,
                    links: urls
                });
            }
        }

    }


    figma.ui.postMessage({
        type: "selectionChange",
        data: componentNodeKeys
    });
});


figma.currentPage.on("nodechange", _event => {
    console.log("nodechange", _event)

    const nodeSelection: any[] = [];
    _event.nodeChanges.forEach((nodeChange => {
        if (nodeChange.type === "PROPERTY_CHANGE") {
            nodeChange.properties.forEach(property => {
                console.log(nodeChange.node);
                if (property === "fills") {

                    console.log(nodeChange.node.fills);

                    if (!nodeChange.node.fills[0].boundVariables.color) {
                        nodeSelection.push(nodeChange.node);
                        return;
                    }

                    figma.variables.getVariableByIdAsync(nodeChange.node.fills[0].boundVariables.color.id).then(result => {
                        console.log('color var ', result);

                        if (result && result.name.indexOf('--cds-') === -1) {
                            nodeSelection.push(nodeChange.node);
                            return;
                        }
                    });
                }
                if (property === "strokes") {
                    console.log(nodeChange.node.strokes);

                    if (!nodeChange.node.strokes[0].boundVariables.color) {
                        nodeSelection.push(nodeChange.node);
                        return;
                    }

                    figma.variables.getVariableByIdAsync(nodeChange.node.strokes[0].boundVariables.color.id).then(result => {
                        console.log(result.name);

                        if (result && result.name.indexOf('--cds-') === -1) {
                            nodeSelection.push(nodeChange.node);
                            return;
                        }
                    });
                }
            });

            if (nodeSelection.length > 0) {
                figma.notify('CIP - widget: Hardcoded values found.');
                figma.ui.postMessage({
                    type: "change",
                    data: {
                        key: "5001",
                        recommendation: "Recommendation: Use Clarity components color tokens. Alias preferably.",
                        rule: `1 or more components violate NO hard coded HEX values. ${nodeSelection}`
                    }
                });

                figma.currentPage.selection = nodeSelection;
                figma.viewport.scrollAndZoomIntoView(nodeSelection);
            } else {
                figma.ui.postMessage({
                    type: "change",
                    data: {
                        hide: "5001"
                    }
                });
            }
        }


        if (nodeChange.type === "DELETE" && nodeChange.node.type === "INSTANCE") {
            const detachedNodes = figma.currentPage.findAll(node => {
                return !!node.detachedInfo;
            });

            if (detachedNodes.length > 0) {
                figma.ui.postMessage({
                    type: "change",
                    data: {
                        key: "5002",
                        recommendation: "Recommendation: Reattach Clarity components.",
                        rule: `${detachedNodes.length} detached Clarity components found and selected.`
                    }
                });

                figma.currentPage.selection = detachedNodes;
                figma.viewport.scrollAndZoomIntoView(detachedNodes);
            } else {
                figma.ui.postMessage({
                    type: "change",
                    data: {
                        hide: "5002"
                    }
                });
            }
        }
    }))
});
