---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-21
---

# Input Design Guidance

[Input](https://clarity.design/documentation/input) component enable the user to input a single sentence or less of text.

## Guidance

- **Must** use Input when you need to allow user to enter a single sentence or less of text.
- **Must** NOT use Input in case of multiple lines of text. Use [textarea](https://clarity.design/documentation/textarea) component to support multiple lines of text input.
- **Should** provide a label with a clear and concise text for context. 
- **Should** NOT use placeholders as a substitute for a proper label element. It may only be used to show an example of the type of data that should be entered into a form. 
- **Should** NOT use placeholders in place of helper text.
- Use appropriate [states for Input](https://clarity.design/documentation/input#states).
- Inputs are available in vertical, horizontal, compact, and controlled-width layouts. [Layouts supported for Input](https://clarity.design/documentation/input#layouts).

## Changelog

- **2024-10-21**: Initial guidance