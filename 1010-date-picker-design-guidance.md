---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Date Picker Design Guidance

The [date picker](https://clarity.design/documentation/datepicker) component enables users to select and input a date either by manually typing it into the input field or by utilizing a calendar popover, providing flexibility in date entry.

## Guidance

- Date pickers **must not** be used for entering dates of birth. Instead, input components should be used. Using input components for dates of birth allows for easier entry and editing, especially for users with accessibility needs.
- Date pickers **must not** be used for selecting dates more than 10 years in the future or past. Limiting date picker range improves usability, reduces errors, and accommodates common use cases.
- Date pickers **must not** be used in space-constrained environments. Alternative input methods, like text inputs, are more suitable for limited spaces, ensuring usability and accessibility.
- Date picker widgets **must** maintain a consistent size, regardless of text field width.  Consistent sizing ensures visual coherence, usability, and accessibility across various layout configurations.

## Changelog

- **2024-10-30**: Initial guidance
