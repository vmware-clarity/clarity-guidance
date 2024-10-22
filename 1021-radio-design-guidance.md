---
category: component design guidance
state: draft
created: 2024-10-16
updated: 2024-10-22
---

# Radio Component

[Radio](https://clarity.design/documentation/radio) component is a form element that allow the user to select one of the options in the list.

## Guidance

- **Must** use when only one item can be selected from a list.
- **Must not** leave all radio buttons unselcted. Mark the first item or most preferred item as selected.
- **Must** use when the list includes at least two mutually exclusive options.
- **Must not** use when more than 6 options are available to choose from. Consider using a [select](https://clarity.design/documentation/select) component instead.
- **Must not** use for functionality like “accepting terms of service” or similar. Use a [checkbox](https://clarity.design/documentation/checkbox) instead.  
- **Should** use appropriate [radio button states](https://clarity.design/documentation/radio#states).

## Changelog

- **2024-10-22**: Initial guidance
