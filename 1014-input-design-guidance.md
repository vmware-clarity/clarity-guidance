---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Input Design Guidance

The [input](https://clarity.design/documentation/input) component allows users to enter a single sentence or less of text, providing a straightforward way to capture concise information.

## Guidance

- Design teams **must** use an input when allowing users to enter a single sentence or less of text to ensure clarity and proper functionality.
- Design teams **must** provide an `aria-label` (or other accessible name) if there is no visible label, ensuring the input is accessible to all users. This accessible name **should** be clearly documented in the design to promote consistency and understanding.
- Design teams **must not** use an input for capturing multiple lines of text. Instead, use a [textarea](https://clarity.design/documentation/textarea) for this purpose.
- Design teams **must not** use placeholders as a substitute for a proper label element, as this creates accessibility challenges for users. Placeholders can be invisible when typing and increase cognitive load, leading to confusion about what information is required. Placeholders **may** be used to provide examples of the type of data being requested, but they **should** never replace clear and descriptive labels.
- Design teams **must not** use placeholders in place of helper text, as this can lead to confusion about the expected input. Helper text **should** provide additional guidance and context, which placeholders cannot effectively communicate.
- Design teams **should** provide a clear and concise visible label for context, helping users understand what information is expected in the input field.

## Changelog

- **2024-10-30**: Initial guidance
