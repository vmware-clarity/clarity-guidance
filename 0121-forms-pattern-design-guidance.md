---
category: pattern design guidance
state: draft
created: 2024-10-16
updated: 2024-10-22
---

# Forms Pattern Design Guidance

A [form](https://clarity.design/documentation/forms) is a collection of related input controls that allows a user to provide data or configure options. Forms are composed of control components such as [checkboxes](https://clarity.design/documentation/checkbox), [dropdowns](https://clarity.design/documentation/dropdown), [input fields](https://clarity.design/documentation/input), [radio buttons](https://clarity.design/documentation/radio), [toggle switches](https://clarity.design/documentation/toggle-switch) and more.

## Guidance

- **Must** be clear and simple. This will increase the quality of the response from the user and help prevent incorrect data submission.
- **Must** include controls that are required. Review each component and eliminate unnecessary ones.
- **Must** add an asterisk after the label for required fields and include a legend at the top of the form to inform users that the asterisk denotes a required field unless it's obvious that the fields are required to proceed. An example exception of an exception to this rule is a login form.
- **Must not** place interactive content (buttons, links, etc) inside the label.
- **Should** group the controls logically. A form with more than six inputs will likely have inputs that can be logically grouped together. For example, inputs for street, city, zip, county, country, etc. can be grouped as an address.
- **Should** place labels closely with their respective input fields.
- **Should** use [radio buttons](https://clarity.design/documentation/radio), [checkboxes](https://clarity.design/documentation/checkbox) or [select boxes](https://clarity.design/documentation/select) for inputs with three or more options. We recommend placing your options vertically in one column to make it easier to scan.
- **Should** use [radio button](https://clarity.design/documentation/radio) or [checkbox](https://clarity.design/documentation/checkbox) to compare options within the context of the form, as all selections will be visible at all times. Use [select boxes](https://clarity.design/documentation/select) when you have more than six options that do not need to be compared with each other.


### Horizontal Layout

- **Should** choose horizontal layout if the screen has limited vertical place.
- **Should** choose this layout when you want the labels to be highlighted to the customer, as all labels will be in single column.
- Ideal for longer forms.

### Vertical Layout

- **Should** choose this layout for narrow or mobile screens.

### Validation Guidelines

- **Must** follow [error message styling](https://clarity.design/documentation/forms#error-message-styling) guidelines.
- The error messages **must** be as clear as possible. The content should provide clear guidance about how to fix the error.
- **Must not** validate the form when user is typing. This can frustrate them. Exceptions are below
  - Inputs with sensitive field value lengths (such as tweets).
  - When users return to an error field and successfully edit the error field.
  - For password fields with visible password strength criteria.
- **Must not** use unrecognizable system error messages like "code 500 error" as error messages.

## Changelog

- **2024-10-22**: Initial guidance