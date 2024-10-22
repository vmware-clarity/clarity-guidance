---
category: component design guidance
state: draft
created: 2024-10-18
updated: 2024-10-22
---

# Toggle switch Component

[Toggle switch](https://clarity.design/documentation/toggle-switch) component allows users to switch between two mutually exclusive options while always having a default value.

## Guidance

- **Must** use for actions that occur immediately after the user press to on/off certain feature without an additional submit or save action.
- **Must not** change the label depending on the switch state.
- **Must not** use for options that are activated at form submission, like Terms and Conditions. Consider using a [checkbox](https://clarity.design/documentation/checkbox) component instead.
- **Must not** use for options that require descriptions to understand the implications of both the on and off states. Consider using a [radio](https://clarity.design/documentation/radio) component instead.
- **Should** use appropriate [toggle switch states](https://clarity.design/documentation/toggle-switch#states).

## Changelog

- **2024-10-22**: Initial guidance
