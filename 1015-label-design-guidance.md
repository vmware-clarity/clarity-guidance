---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-22
---

# Label Design Guidance

 [Label](https://clarity.design/documentation/label) component shows concise metadata in a compact format.

## Guidance

- **Must** keep labels short and concise.
- **Must not** use all capital letters in labels. Using all capital letters might make the user think the label is a button and conflates the use case for labels with actions and buttons.
- **Must not** use multiple lines of text within a single label.
- **Should** use parenthesis for any additional metadata, if required in the same label.
- **Should** use [clickable labels](https://clarity.design/documentation/label#clicking-labels) to perform an action related to that label.
- **May** use a close icon at the right-most side of a label to dismiss it unless the label itself is clickable.
- If there is a count or other number related to the metadata displayed in the label, a badge **must** be used.


## Style and Color

- **Must** choose colors for the label based on [Clarity color palette](https://clarity.design/documentation/color).
- **Should not** use too many colors within the same context. Displaying too many colors may distract the user from the core of your application and the information it presents.
- **Must not** use color alone to convey information.
- It is recommended to reserve red, yellow, and green to display state or status.


## Changelog

- **2024-10-21**: Initial guidance
