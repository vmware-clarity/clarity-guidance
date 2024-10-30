---
category: component design guidance
state: draft
created: 2024-10-18
updated: 2024-10-22
---

# Toggle Switch Design Guidance

The [toggle switch](https://clarity.design/documentation/toggle-switch) component allows users to switch between two mutually exclusive options while always having a default value.

## Guidance

- Design teams **must** use this pattern for actions that occur immediately after the user presses to turn a feature on or off, without requiring an additional submit or save action. This ensures a seamless and intuitive user experience.
- Design teams **must not** change the label depending on the switch state, as this can cause confusion and disrupt the user experience.
- Design teams **must not** use this pattern for options activated upon form submission, like Terms and Conditions. Switches imply immediate action, so for deferred actions (such as form submission), use a [checkbox](https://clarity.design/documentation/checkbox) component instead.
- Design teams **must not** use this pattern for options that require descriptions to explain the implications of both the on and off states. Switches are for simple toggles, so for more detailed choices, consider using a [radio](https://clarity.design/documentation/radio) component instead.
- Design teams **should** use appropriate [toggle switch states](https://clarity.design/documentation/toggle-switch#states) to ensure clarity and align with user expectations.

## Changelog

- **2024-10-22**: Initial guidance
