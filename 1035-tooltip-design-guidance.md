---
category: component design guidance
state: draft
created: 2024-10-18
updated: 2024-10-21
---

# Tooltip Component

[Tooltip](https://clarity.design/documentation/tooltip) component is a brief, informative message or short description about an element.

## Guidance

- **Must** NOT use tooltips on components. Instead, provide a descriptive label and use inline or signpost help for more information.
- **Must** NOT use tooltips on Static images. Instead, use the HTML alt tag to provide information about the image.
- **Must** NOT use tooltips on Textual links. Instead, ensure that the link describes its destination and is not truncated.
- **Should** Use tooltips for actionable icons that do not have text labels, such as the icons in a toolbar. A tooltip is visible when the user hovers over the icon.
- Choose a [tooltip position]((https://clarity.design/documentation/tooltip#placement)) that ensures the entire tooltip is visible on the screen and the tooltip does not cover an important UI element.
- Set a width that accommodates the text string. [Tooltip supported sizes](https://clarity.design/documentation/tooltip#size).

## Content Guidelines

- **Must** use sentence-style capitalization and no ending punctuation.
- **Must** use only plain text and be concise. A tooltip can be a sentence fragment. If more detailed information is required, use another form of help.
- **Should** use a verb phrase to describe the action represented by the icon; for example, “Edit settings.”

## Changelog

- **2024-10-21**: Initial guidance