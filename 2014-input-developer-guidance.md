---
category: component developer guidance
state: draft
created: 2024-11-11
updated: 2024-11-13
---

# Input Developer Guidance

The [input](https://clarity.design/documentation/input) component allows users to enter a single sentence or less of text, providing a straightforward way to capture concise information.


## Guidance

- Inputs **must** be used when users need to enter a single sentence or less of text. This ensures clarity and proper functionality for brief text entries.
- Inputs **must** have an aria-label (or other accessible name) when no visible label is present. The accessible name **should** be clearly documented in the design. This ensures accessibility and consistency.
- Inputs **must not** be used for capturing multiple lines of text. Instead, use a [textarea](https://clarity.design/documentation/textarea). Textarea provides the proper functionality and user experience for multi-line text entry.
- Placeholders **must not** replace label elements, as this creates accessibility challenges for users. Placeholders can be invisible when typing and increase cognitive load, leading to confusion about what information is required. Placeholders **may** be used to provide examples of the type of data being requested, but they **should** never replace clear and descriptive labels.
- Placeholder text **must not** replace helper text, as this can lead to confusion about the expected input. Helper text **should** provide additional guidance and context, which placeholders cannot effectively communicate.
- To enhance user understanding and clarity, labels **should** be clear, concise, and visible, providing context for expected input.

## Changelog

- **2024-10-30**: Initial guidance
