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

    const nodes: any[] = [];
    _event.nodeChanges.forEach((nodeChange => {
        if (nodeChange.type === "PROPERTY_CHANGE") {
            nodeChange.properties.forEach( async property => {
                console.log(nodeChange.node);
                if (property === "fills") {

                    console.log(nodeChange.node.fills);

                    if (!nodeChange.node.fills[0].boundVariables.color) {
                        nodes.push(nodeChange.node);
                        return;
                    }

                   const isCdsColorVariable = await MessageHandlerService
                       .isCdsColorVariable(nodeChange.node.fills[0].boundVariables.color.id);

                   if (!isCdsColorVariable) {
                       nodes.push(nodeChange.node);
                       return;
                   }
                }

                if (property === "strokes") {
                    console.log(nodeChange.node.strokes);

                    if (!nodeChange.node.strokes[0].boundVariables.color) {
                        nodes.push(nodeChange.node);
                        return;
                    }


                    const isCdsColorVariable = await MessageHandlerService
                        .isCdsColorVariable(nodeChange.node.strokes[0].boundVariables.color.id);

                    if (!isCdsColorVariable) {
                        nodes.push(nodeChange.node);
                        return;
                    }
                }
            });

            if (nodes.length > 0) {
                figma.ui.postMessage({
                    type: "change",
                    data: {
                        violations: {
                           5001: MessageHandlerService.createViolations("5001", nodes)
                        }
                    }
                });
            } else {
                figma.ui.postMessage({
                    type: "change",
                    data: {
                        hide: "5001",
                        nodeIds: [nodeChange.node.id]
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
                        violations: {
                            5002: MessageHandlerService.createViolations("5002", detachedNodes)
                        }
                    }
                });
            } else {
                figma.ui.postMessage({
                    type: "change",
                    data: {
                        hide: "5002",
                        nodeIds: [nodeChange.node.id]
                    }
                });
            }
        }
    }))
});
