export abstract class MessageHandlerService {
  static async handleMessage(message: any) {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (message.type === "create-rectangles") {
      const nodes = [];
      for (let i = 0; i < message.count; i++) {
        const rect = figma.createRectangle();
        rect.x = i * 150;
        rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
        figma.currentPage.appendChild(rect);
        nodes.push(rect);
      }
      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
    }
    if (message.type === "insert-layout") {
        const keys: any[] = message.componentKeys;
        const promises: any[] = [];
        keys.forEach((key) => {
          switch (key[0]) {
            case "COMPONENT":
              promises.push(
                  figma.importComponentByKeyAsync(key[1])
              )
              break;
            case "COMPONENT_SET":
              promises.push(
                  figma.importComponentSetByKeyAsync(key[1])
              )
              break;
          }
        });
        const result = await Promise.all(promises);
        result.forEach((set: ComponentSetNode) => {
            let comp = set.findOne(node => node.type === 'COMPONENT') as ComponentNode;
            comp.createInstance();
        })
        console.log(result);
      // figma..im(message.layout.id);
      // figma.currentPage.appendChild(message.layout)
      // figma.importComponentByKeyAsync(message.id)
    }
    // "a173097c8838c7f54c044ab461cc9d0f792105a4"
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
  }
}
