---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Radio Button Design Guidance

A [radio button](https://clarity.design/documentation/radio) is a form element that allows users to select one option from a group, ensuring clear choice among mutually exclusive options.```

## Guidance

- Radio buttons **must** be used when selecting only one item from a list is allowed.
- Radio buttons **must not** be left entirely unselected. By default, the first item or the most preferred item **should** be marked as selected.
- Radio buttons **must** be used when the list includes at least two mutually exclusive options.
- Radio buttons **must not** be used when more than six options are available.  A [select](https://clarity.design/documentation/select) component **should** be considered instead.
- Radio buttons **must not** be used for functionality like “accepting terms of service” or similar. They **should** use a [checkbox](https://clarity.design/documentation/checkbox) instead.
- Radio buttons **should** utilize clear [radio button states](https://clarity.design/documentation/radio#states) (e.g., hover, focus, selected, disabled)to provide clear feedback on user interactions and enhance the overall user experience. 

## Changelog

- **2024-10-30**: Initial guidance
