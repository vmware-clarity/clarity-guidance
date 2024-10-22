---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-22
---

# Input Design Guidance

The [input](https://clarity.design/documentation/input) component enables the user to input a single sentence or less of text.

## Guidance

- **Must** use an input when you need to allow user to enter a single sentence or less of text.
- **Must not** use an input in case of multiple lines of text. Use a [textarea](https://clarity.design/documentation/textarea) for multiple lines of text input.
- **Should** provide a clear and concise visible label for context.
- If there is no visible label, an `aria-label` (or other accessible name) **must** be provided and **should** be called out in the design.
- **Should not** use placeholders as a substitute for a proper label element. It **may** be used to show an example of the type of data that should be entered into a form. 
- **Should not** use placeholders in place of helper text.

## Changelog

- **2024-10-22**: Initial guidance