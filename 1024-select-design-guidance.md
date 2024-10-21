---
category: component design guidance
state: draft
created: 2024-10-16
updated: 2024-10-21
---

# Select Component

[Select](https://clarity.design/documentation/select) component allows users to choose one or multiple item(s) from a list of options.

## Guidance

- **Must** use when a user doesn't need to see the list of options until they click to view the list.
- **Must** NOT use if you have fewer than 6 options. Consider using the `radio` component instead, if there is enough space.
- **Should** have a default option pre-selected whenever possible or a placeholder instead. Do NOT leave the select field empty.
- **Should** avoid having multiple lines of text in select field option. If the text is too long for one line, add an ellipsis (…).
- Use labels to describe what the data in the select field is all about.
- Use appropriate [states](https://clarity.design/documentation/select#states) for Select component.
- Select component is available in multiple [layouts](https://clarity.design/documentation/select#layouts) variants.

## Changelog

- **2024-10-21**: Initial guidance
