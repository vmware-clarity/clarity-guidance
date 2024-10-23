---
category: component design guidance
state: draft
created: 2024-10-16
updated: 2024-10-22
---

# Combobox Design Guidance

The [combobox](https://clarity.design/documentation/combobox) is a complex component that uses a text input box and a drop-down list. The user can enter text into the input to filter the set of predefined options in the drop-down.

## Guidance

### Combobox Usage

- **Must** use a combobox for a long list of options (more than 10 options).
- **Must** use a combobox when you need search and filtering capabilities.
- **Must not** allow to add free text input that is not part of the predefined list.
- **Should** use a combobox when you need to select multiple items in a list.
- **Should** use a combobox when you need data to be loaded asynchronously.
- **Should** use a combobox when you have custom Input or to show a richer UI in the list.

### Combobox Typography

- **Must** keep the option text in the combobox short and concise to improve readability.
- **Should** have a label to make it accessible.
- The length of the items in a combobox **should not** be wider than the text field.


## Changelog

- **2024-10-22**: Initial guidance
