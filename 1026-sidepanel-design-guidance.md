---
category: component design guidance
state: draft
created: 2024-10-18
updated: 2024-10-22
---

# Side Panel Design Guidance

The [side panel](https://clarity.design/documentation/side-panel) component displays supplementary contextual actions and information.

## Guidance

- **Must** use a side panel when you have more content or complex interactions than a modal. It is recommended to be used for any tertiary actions or sub-processes. You can use a [modal](https://clarity.design/documentation/modal) when the information presented is more concise and the interactions are less complex.
- **Must** keep it simple. Side panels can include components like links, cards, images, or text. Avoid putting complex components in a side panel, like tables or accordions. 
- **Must** provide options to dismiss a side panel through buttons to cancel/proceed, or through a close button.
- **Must not** stack side panels since it would make it hard to dismiss them and confuses the user.

## Changelog

- **2024-10-22**: Initial guidance