---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Select Design Guidance

A [select](https://clarity.design/documentation/select) control enables users to choose one or multiple items from a list of options, providing a streamlined way to make selections within forms or applications.

## Guidance

- Design teams **must** use a select control when users don't need to see the list of options until they click to view it.
- Design teams **must** ensure that a select control has a default option pre-selected or includes a placeholder. The select field should not be left empty, as this provides guidance, reduces confusion, and improves usability by prompting users to make a selection.
- Design teams **should** avoid using multiple lines of text in select field options. If the text is too long for one line, it should be truncated with an ellipsis (…) to maintain clarity and improve readability.
- Design teams **should** use labels to clearly describe the data represented in the select field, ensuring users understand the context and purpose of their selections.
- Design teams **should** use appropriate [select states](https://clarity.design/documentation/select#states) to provide clear feedback on user interactions. This helps users understand the current status of their selection, improving usability and ensuring that they can navigate the form effectively.
- Design teams **should not** use a select control if there are fewer than six options. Instead, they should consider using a [radio](https://clarity.design/documentation/radio) component to provide a clearer and more accessible choice for users.

## Changelog

- **2024-10-30**: Initial guidance
