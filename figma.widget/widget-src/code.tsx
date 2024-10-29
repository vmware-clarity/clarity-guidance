// This widget will open an Iframe window with buttons to show a toast message and close the window.

const {widget} = figma
const {useEffect, Text} = widget

const iconIdsKey ='iconIds';

function Widget() {
    useEffect(() => {
        figma.ui.onmessage = async (msg) => {
            console.log(msg)

            if (msg.type === 'find-icons') {
                const keys = await figma.clientStorage.keysAsync()
                let iconIds: string[];

                console.log(keys)
                console.log(keys.includes(iconIdsKey))

                if (!keys.includes(iconIdsKey)) {
                    iconIds = figma.currentPage.findAll(node => {
                        if (node.type === 'INSTANCE') {
                            const children = node.findChildren(child => {
                                // if(node.name === 'Action 2') console.log(child);
                                return (child.type === 'VECTOR' || child.type === 'BOOLEAN_OPERATION') && child.name === 'icon';

                            });

                            return children.length > 0;
                        }

                        return false;
                    }).map(node => {
                        return node.id;
                    });

                    await figma.clientStorage.setAsync(iconIdsKey, iconIds);
                } else {
                    iconIds = await figma.clientStorage.getAsync(iconIdsKey);
                }

                figma.ui.postMessage({
                    type: "found-icons",
                    data: iconIds
                });
            }

            if (msg.type === 'select-next-icon') {
                const found = figma.currentPage.findAll(node => {
                    return node.id === msg.iconId;
                });

                if (found.length > 0) {
                    figma.currentPage.selection = found;
                }

                const iconIds = await figma.clientStorage.getAsync(iconIdsKey);
                iconIds.pop();
                await figma.clientStorage.setAsync(iconIdsKey, iconIds);
            }

            if (msg.type === 'checkViolations') {
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
                            key: "1001",
                            recommendation: "Recommendation: Use Clarity components color tokens. Alias preferably.",
                            rule: `${wrongColors.length} color violate NO hard coded HEX values. ${wrongColors}`
                        }
                    });
                }
            }

            if (msg.type === 'select-hardcoded-hex-color') {
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
                }
            }

            if (msg.type === 'find-select-detached-nodes') {
                const detachedNodes = figma.currentPage.findAll(node => {
                    return !!node.detachedInfo;
                });

                console.log(detachedNodes);

                if (detachedNodes.length > 0) {
                    console.log('parent', detachedNodes[0].parent);
                    figma.currentPage.selection = detachedNodes;

                    figma.ui.postMessage({
                        type: "violations",
                        data: {
                            key: "1002",
                            recommendation: "Recommendation: Reattach Clarity components.",
                            rule: `${detachedNodes.length} detached Clarity components found and selected.`
                        }
                    });
                } else {
                    figma.notify('CIP - widget: No detached nodes found.');
                }
            }

            if (msg.type === 'fix-detached-nodes') {
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
                }
            }

            if (msg.type === 'close') {
                figma.closePlugin()
            }
        }
    })

    return (
        <Text
            fontSize={24}
            width={240}
            onClick={
                // Use async callbacks or return a promise to keep the Iframe window
                // opened. Resolving the promise, closing the Iframe window, or calling
                // "figma.closePlugin()" will terminate the code.
                () => {
                    return new Promise(() => {
                        figma.showUI(__html__, {width: 560, height: 720});

                        // let count = 0;
                        // const iconIds = figma.currentPage.findAll(node => {
                        //
                        //     if (node.type === 'INSTANCE' && count < 20) {
                        //         // console.log('node name', node.name);
                        //         // console.log(node.name);
                        //           const children = node.findChildren(child => {
                        //             // if(node.name === 'Action 2') console.log(child);
                        //             return (child.type === 'VECTOR' || child.type === 'BOOLEAN_OPERATION') && child.name === 'icon';
                        //
                        //         });
                        //
                        //         console.log(children);
                        //
                        //
                        //         count++;
                        //
                        //         if (children.length) {
                        //             node.getMainComponentAsync().then(value => {
                        //
                        //                 console.log(value?.name);
                        //                 // console.log(value?.key);
                        //                 // console.log(value?.description);
                        //                 console.log(value?.getPluginDataKeys());
                        //                 // value?.getInstancesAsync().then(value1 => {
                        //                 //     console.log(value1);
                        //                 // });
                        //             });
                        //
                        //             return true;
                        //         }
                        //
                        //         return false;
                        //     }
                        //
                        //     return false;
                        // }).map(node =>{
                        //     return node.id;
                        // });

                        // const libraries = await getLibraries();
                        // figma.teamLibrary.getVariablesInLibraryCollectionAsync('4e51a576a29398c8363ef381ee4e45edec9b0672').then(a => {
                        //     console.log('getVariablesInLibraryCollectionAsync ', a);
                        //     a.filter(value => {
                        //         if (value.key === '2e7e8a285b2d103aa8fe4d8915a80f47b401c5aa'){
                        //           console.log(value)
                        //         }
                        //     })
                        // });
                        // figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync().then(a => {
                        //     console.log('getAvailableLibraryVariableCollectionsAsync ', a);
                        // });
                        // console.log(figma.currentPage)


                        // console.log(figma.currentPage.children);
                        // console.log(figma.currentPage.children[0].getPluginData('selected'));

                        // figma.currentPage.findAll(node => {
                        //       // if(node.getMainComponentAsync) {
                        //       //     node.getMainComponentAsync().then(val => {
                        //       //         if(val?.key === '2e7e8a285b2d103aa8fe4d8915a80f47b401c5aa')
                        //       //         console.log(val)
                        //       //     })
                        //       // }
                        //     if(node.detachedInfo) {
                        //         console.log(node.detachedInfo);
                        //
                        //         figma.currentPage.selection = [node]
                        //
                        //         // node.getInstancesAsync()
                        //         // console.log(node.fills);
                        //         // if (node.detachedInfo.componentKey) {
                        //         //     figma.variables.get(node.fills[0].boundVariables.color.id).then(result => {
                        //         //         console.log(result.name);
                        //         //     });
                        //         //
                        //         //     console.log(node.detachedInfo);
                        //         //     figma.teamLibrary.getVariablesInLibraryCollectionAsync(node.detachedInfo.componentKey).then(result => {
                        //         //         console.log(result);
                        //         //     });
                        //         // }
                        //     }
                        //     return false;
                        // });
                    });
                }
            }
        >
            Open Clarity Design Guidance
        </Text>
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
                        key: "1001",
                        recommendation: "Recommendation: Use Clarity components color tokens. Alias preferably.",
                        rule: `1 or more components violate NO hard coded HEX values. ${nodeSelection}`
                    }
                });

                figma.currentPage.selection = nodeSelection;
            } else {
                figma.ui.postMessage({
                    type: "change",
                    data: {
                        hide: true
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
                        key: "1002",
                        recommendation: "Recommendation: Reattach Clarity components.",
                        rule: `${detachedNodes.length} detached Clarity components found and selected.`
                    }
                });

                figma.currentPage.selection = detachedNodes;
            } else {
                figma.ui.postMessage({
                    type: "change",
                    data: {
                        hide: true
                    }
                });
            }
        }
    }))

});
