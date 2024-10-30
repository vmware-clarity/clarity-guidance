---
category: pattern design guidance
state: draft
created: 2024-10-16
updated: 2024-10-28
---

# Forms Pattern Design Guidance

A [form](https://clarity.design/documentation/forms) is a collection of related input controls that enables users to provide data or configure options. Forms consist of various control components, including [checkboxes](https://clarity.design/documentation/checkbox), [dropdowns](https://clarity.design/documentation/dropdown), [input fields](https://clarity.design/documentation/input), [radio buttons](https://clarity.design/documentation/radio), [toggle switches](https://clarity.design/documentation/toggle-switch), and more, facilitating effective data entry and user interaction.

## Guidance

- Design teams **must** ensure that forms are clear and simple, as this increases the quality of user responses and helps prevent incorrect data submissions.
- Design teams **must** include only required controls in forms, eliminating unnecessary components to streamline the user experience.
- Design teams **must** add an asterisk after the label for required fields and include a legend at the top of the form stating that the asterisk denotes a required field. An exception to this rule is a login form, where users generally understand that both fields are required.
- Design teams **must not** place interactive content, such as buttons or links, inside the label, as this can confuse users and hinder usability.
- Design teams **should** logically group controls in forms, especially when there are more than six inputs. For example, street, city, zip, county, and country can be grouped as an address to improve clarity and organization. However, in simpler forms or when user preferences differ, grouping may not always be necessary.
- Design teams **should** place labels close to their respective input fields to enhance usability and help users quickly associate the label with the corresponding input.
- Design teams **should** use [radio buttons](https://clarity.design/documentation/radio), [checkboxes](https://clarity.design/documentation/checkbox), or [select boxes](https://clarity.design/documentation/select) for inputs with three or more options. Options **should** be placed vertically in one column to facilitate easier scanning and selection. This layout also enhances accessibility by improving keyboard navigation and ensuring clear communication with screen readers.
- Design teams **should** use [radio buttons](https://clarity.design/documentation/radio) or [checkboxes](https://clarity.design/documentation/checkbox) when users need to compare options directly within the form, as this keeps all selections visible. Use [select boxes](https://clarity.design/documentation/select) when there are more than six options that do not need to be compared, as this helps manage space and simplifies the interface.

### Horizontal Layout

- Design teams **should** choose a horizontal layout when vertical space is limited, as this approach allows users to view all options at once, reducing scrolling and improving accessibility for quick selections.
- Design teams **should** choose this layout when highlighting labels for users. A single-column format ensures that all labels are prominently displayed and easily readable.
- Design teams **should** use a horizontal layout for longer forms. This approach allows for better organization of information, making it easier for users to navigate and complete the form efficiently.

### Vertical Layout

- Design teams **should** choose a vertical layout for narrow or mobile screens. This format ensures better readability and accessibility, allowing users to navigate through the content without excessive scrolling.

### Validation

- Design teams **must** follow the [error message styling](https://clarity.design/documentation/forms#error-message-styling) guidelines to ensure that error messages are clearly communicated to users, which helps them quickly identify and correct issues in the form.
- Design teams **must** ensure that error messages are clear and straightforward. The content **should** provide specific guidance on how to fix the error, helping users understand the necessary steps to correct their input.
- Design teams **must not** validate the form while the user is typing, as this can lead to frustration. Exceptions to this rule are noted below.
  - Inputs that require validation for sensitive field value lengths, such as tweets.
  - When users return to an error field and successfully correct the input.
  - For password fields that display visible password strength criteria.
- Design teams **must not** use unrecognizable system error messages, such as "code 500 error," as error messages.

## Changelog

- **2024-10-28**: Initial guidance
