---
category: component design guidance
state: draft
created: 2024-10-18
updated: 2024-10-22
---

# Range Input Design Guidance

[Range Input](https://clarity.design/documentation/range) consists of a slider that can be moved to represent some value between the minimum and maximum values. It allows the user to select a value when the precise value chosen is not considered necessary.

## Guidance

- **Must** include clear labels indicating the purpose of the slider.
- **Should** use a label above or beside the slider, rather than below it, in order to remain visible while the user is selecting a value.
- **Should** use [radio buttons](https://clarity.design/documentation/radio) or a [select](https://clarity.design/documentation/select) when only a few distinct choices are available or a number [input](https://clarity.design/documentation/input) when precision is key.
- **Should** use appropriate [range input states](https://clarity.design/documentation/range#states).
- **May** use range input component when it is acceptable to have an imprecise input control and the exact value is not important.

## Changelog

- **2024-10-22**: Initial guidance
