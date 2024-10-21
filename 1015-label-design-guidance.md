---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-21
---

# Label Design Guidance

[Label](https://clarity.design/documentation/label) component show concise metadata in a compact format.

## Guidance

- **Must** keep labels short and concise.
- **Must** NOT use all capital letters in labels. Using all capital letters might make the user think the label as a button and conflates the use case for labels with actions and buttons.
- **Must** NOT use multiple lines of text within a single label.
- **Should** use parenthesis for any additional metadata, if required in the same label.
- **Should** use [clickable labels](https://clarity.design/documentation/label#clicking-labels) to perform an action related to that label.
- **Should** use a close icon at the right-most side of a label to dismiss it.
- **Should** use labels and [badges](https://clarity.design/documentation/badge) together to show a count relating to the metadata displayed in the label.


## Style and Color

- **Must** choose colors for the label based on [Clarity color palette](https://clarity.design/documentation/color).
- **Must** avoid using too many colors within the same context. Displaying too many colors may distract the user from the core of your application and the information it presents.
- It is recommended to reserve red, yellow, and green to display state or status.


## Changelog

- **2024-10-21**: Initial guidance
