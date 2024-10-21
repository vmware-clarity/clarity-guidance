---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-21
---

# Dropdown Component

[Dropdown](https://clarity.design/documentation/dropdown) component allows the user to choose an option or action from a contextual list. The source of the dropdown is usually a button.

## Guidance

- **Must** be used to take an immediate action or navigate the user outside of the current context.
- **Must** NOT use a dropdown menu to hide primary actions. They must never be hidden behind a dropdown menu.
- **Should** use headers & dividers for longer list of items  
- **Should** use nested dropdown for organizing longer list into categories that the user can click to reveal deeper levels.
- **Should** NOT use dropdown menu as a form input. Use the `select` component instead.
- Its best practice to limit Nested dropdown menus to three levels.

## Content Guidelines

- **Must** keep the description of the dropdown options as short as possible to improve readability.
- Phrase the label that clearly indicate the `dropdown` action.


## Changelog

- **2024-10-21**: Initial guidance
