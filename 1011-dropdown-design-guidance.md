---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-21
---

# Dropdown Component

The [dropdown](https://clarity.design/documentation/dropdown) component allows the user to choose an option or action from a contextual list. The trigger of the dropdown is usually a button.

## Guidance

- **Must** be used to take an immediate action or navigate the user outside of the current context.
- **Must not** use a dropdown menu to hide primary actions. Such actions **must not** be hidden behind a dropdown menu.
- **Should** use headers and dividers for longer list of items  
- **Should** use nested dropdown for organizing longer list into categories that the user can click to reveal deeper levels.
- **Must not** use dropdown menu as a form control. Use a [select](https://clarity.design/documentation/select) instead.
- Nested dropdown menus *should* be limited to three levels.

## Content Guidelines

- **Must** keep the description of the dropdown options as short as possible to improve readability.
- Phrase the label that clearly indicate the dropdown action.


## Changelog

- **2024-10-21**: Initial guidance