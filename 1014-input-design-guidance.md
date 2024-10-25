---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-22
---

# Input Design Guidance

The [input](https://clarity.design/documentation/input) component allows users to enter a single sentence or less of text, providing a straightforward way to capture concise information.

## Guidance

- Design teams **must** use an input when allowing users to enter a single sentence or less of text to ensure clarity and proper functionality.
-Design teams **must not** use an input for capturing multiple lines of text. Instead, use a [textarea](https://clarity.design/documentation/textarea) for this purpose.
- Design teams **should** provide a clear and concise visible label for context, helping users understand what information is expected in the input field.
- Design teams **must** provide an `aria-label` (or other accessible name) if there is no visible label, ensuring the input is accessible to all users. This accessible name **should** be clearly documented in the design to promote consistency and understanding.
- Design teams **must not** use placeholders as a substitute for a proper label element, as this creates accessibility challenges for users. Placeholders can be invisible when typing and increase cognitive load, leading to confusion about what information is required.  Placeholders **may** be used to provide examples of the type of data that should be entered into a form, but they should never replace clear and descriptive labels.
- Design teams **must not** use placeholders in place of helper text, as this can lead to confusion about the expected input. Helper text **should** provide additional guidance and context, which placeholders cannot effectively communicate.

## Changelog

- **2024-10-22**: Initial guidance