---
category: component design guidance
state: draft
created: 2024-10-18
updated: 2024-10-21
---

# Range Input Design Guidance

[Range Input](https://clarity.design/documentation/range) consists of a slider that can be moved to represent some value between the minimum and maximum values. It allows the user to select a value when the precise value chosen is not considered necessary.

## Guidance

- **Must** use range component when it is acceptable to have an imprecise input control and the exact value is not important.
- **Must** include clear labels indicating the purpose of the slider.
- **Should** use a label above or beside the slider, rather than below it, in order to remain visible while the user is selecting a value.
- **Should** use UI components like Radio button or Dropdown, when only a few distinct choices are available or when precision is key.
- Use appropriate [states for Range Input](https://clarity.design/documentation/range#states).


## Changelog

- **2024-10-21**: Initial guidance
