---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Toggle Switch Design Guidance

The [toggle switch](https://clarity.design/documentation/toggle-switch) component allows users to switch between two mutually exclusive options while always having a default value.

## Guidance

- Feature toggles **must** trigger immediate actions without requiring extra submission or saving.
- Labels **must not** be changed depending on the switch state, as this can cause confusion and disrupt the user experience.
- Toggle switches **must not** be used for options activated upon form submission, like Terms and Conditions. Switches imply immediate action, so for deferred actions (such as form submission), use a [checkbox](https://clarity.design/documentation/checkbox) component instead.
- Toggle switches **must not** be used for options that require descriptions to explain the implications of both the on and off states. Switches are for simple toggles, so for more detailed choices, consider using a [radio](https://clarity.design/documentation/radio) component instead.
- Appropriate [toggle switch states](https://clarity.design/documentation/toggle-switch#states) **should** be used to ensure clarity and align with user expectations.

## Changelog

- **2024-10-30**: Initial guidance
