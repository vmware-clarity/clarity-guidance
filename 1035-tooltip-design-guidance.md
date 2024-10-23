---
category: component design guidance
state: draft
created: 2024-10-18
updated: 2024-10-22
---

# Tooltip Design Guidance

The [tooltip](https://clarity.design/documentation/tooltip) component facilitates display of a brief, informative contextual message or short description about an element.

## Guidance

- **Must not** use tooltips on components. Instead, provide a descriptive label and use inline or signpost help for more information.
- **Must not** use tooltips on static images. Instead, designs **should** call out alt text that provides a description of the image or state that the image is decorative (doesn't need alt text).
- **Must not** use tooltips on textual links. Instead, ensure that the link describes its destination and is not truncated.
- **Should** use tooltips for actionable icons that do not have text labels, such as the icons in a toolbar. A tooltip is visible when the user hovers over the icon.
- **Should** choose a [tooltip position](https://clarity.design/documentation/tooltip#placement) that ensures the entire tooltip is visible on the screen and the tooltip does not cover an important page content.
- **Should** set a width that accommodates the text string.

## Content Guidelines

- **Must** use sentence-style capitalization and no ending punctuation.
- **Must** use only plain text and be concise. A tooltip can be a sentence fragment. If more detailed information is required, use another form of help.
- **Should** use a verb phrase to describe the action represented by the icon; for example, “Edit settings”

## Changelog

- **2024-10-22**: Initial guidance