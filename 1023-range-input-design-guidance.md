---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Range Input Design Guidance

A [range input](https://clarity.design/documentation/range) features a slider that allows users to select a value within a defined minimum and maximum range. It’s ideal for scenarios where a precise value isn’t required.

## Guidance

- Sliders **must** have clear and descriptive labels indicating their purpose, ensuring users understand the selected value.
- Sliders **should** have labels placed above or beside them, rather than below, to maintain visibility during user interaction.
- [Radio buttons](https://clarity.design/documentation/radio) or a [select](https://clarity.design/documentation/select) **should** be used when only a few distinct choices are available. A [number input](https://clarity.design/documentation/input) **should** be used when precision is key. This ensures clarity, reduces cognitive load, and allows for more accurate user input.
- Appropriate [range input states](https://clarity.design/documentation/range#states) **should** be used to provide visual feedback and enhance the user experience during interaction.
- The range input component **may** be used when it's okay to have a less precise input and the exact value doesn’t matter, allowing users to quickly pick a value from a wider range.

## Changelog

- **2024-10-30**: Initial guidance
