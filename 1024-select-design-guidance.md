---
category: component design guidance
state: draft
created: 2024-10-16
updated: 2024-10-22
---

# Select Design Guidance

A [select](https://clarity.design/documentation/select) control allows users to choose one or multiple items from a list of options.

## Guidance

- **Must** use when a user doesn't need to see the list of options until they click to view the list.
- **Must not** use if you have fewer than 6 options. Consider using a [radio](https://clarity.design/documentation/radio) component instead.
- **Must** have a default option pre-selected or have a placeholder. Do not leave the select field empty.
- **Should** avoid having multiple lines of text in select field option. If the text is too long for one line, add an ellipsis (…).
- **Should** use labels to describe what the data in the select field is all about.
- **Should** use appropriate [select states](https://clarity.design/documentation/select#states).

## Changelog

- **2024-10-22**: Initial guidance
