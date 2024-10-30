---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Range Input Design Guidance

A [range input](https://clarity.design/documentation/range) features a slider that allows users to select a value within a defined minimum and maximum range. It’s ideal for scenarios where a precise value isn’t required.

## Guidance

- Design teams **must** include clear labels indicating the purpose of the slider to ensure users understand what value they are selecting.
- Design teams **should** place a label above or beside the slider, rather than below it, to ensure it remains visible while users select a value.
- Design teams **should** use [radio buttons](https://clarity.design/documentation/radio) or a [select](https://clarity.design/documentation/select) when only a few distinct choices are available, or a [number input](https://clarity.design/documentation/input) when precision is key. This ensures clarity, reduces cognitive load, and allows for more accurate user input.
- Design teams **should** use appropriate [range input states](https://clarity.design/documentation/range#states) to provide visual feedback and enhance the user experience during interaction.
- Design teams **may** use the range input component when it's okay to have a less precise input and the exact value doesn’t matter, allowing users to quickly pick a value from a wider range.

## Changelog

- **2024-10-30**: Initial guidance
