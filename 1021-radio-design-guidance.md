---
category: component design guidance
state: draft
created: 2024-10-16
updated: 2024-10-21
---

# Radio Component

[Radio](https://clarity.design/documentation/radio) component is a form element that allow the user to select one of the options in the list.

## Guidance

- **Must** use when only one item can be selected from a list.
- **Must** NOT leave all radio buttons unselcted. Mark the first item or most preferred item as selected.
- **Must** use when the list includes at least two mutually exclusive options.
- **Must** NOT use when more than 6 options are available to choose from. Consider using a `select` component instead.
- **Must** NOT place interactive content (buttons, links, etc) inside the label.
- **Should** NOT use for functionality like “accepting terms of service” or similar. Use a `checkbox` instead.
- Use appropriate [states](https://clarity.design/documentation/radio#states) for Radio button.
- Radio component is available in multiple [layouts](https://clarity.design/documentation/radio#layouts) variants.

## Changelog

- **2024-10-21**: Initial guidance
