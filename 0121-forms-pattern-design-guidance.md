---
category: pattern design guidance
state: draft
created: 2024-10-16
updated: 2024-10-21
---

# Forms Pattern

A [form](https://clarity.design/documentation/forms) is a collection of related input controls that allows a user to provide data or configure options. Forms are composed of control components such as checkboxes, dropdowns, input fields, radio buttons, toggle switches and more.

## Guidance

- **Must** be clear and simple. This will increase the quality of the response from the user and help prevent incorrect data submission.
- **Must** include controls that are required. Review each component and eliminate unnecessary ones.
- **Must** add asterick after the label for required fields. Always include a legend at the top of the form to inform users that the asterisk denotes a required field. An exception to using an asterisk would be a login form.
- **Should** group the controls logically. A form with more than six inputs will likely have inputs that can be logically grouped together, such as Address: street, city, zip, county, country, etc..
- **Should** place labels closely with their respective input fields.
- **Should** use radio buttons, checkboxes or select boxes for inputs with three or more options. We recommend placing your options vertically in one column to make it easier to scan.
- **Should** use Radio button or Checkbox to compare options within the context of the form, as all selections will be visible at all times. Use select boxes when you have more than six options that do not need to be compared with each other.


### Horizontal Layout
- **Should** choose Horizontal Layout if the screen has limited vertical place.
- **Should** choose this layout when you want the labels to be highlighted to the customer, as all labels will be in single column.
- Ideal for longer forms.

### Vertical Layout
- **Should** choose this layout for Narrow or mobile screens.

### Validation Guidelines
- **Must** avoid validating the form when user is typing. This can frustrate them. Exceptions are below
    -- Inputs with sensitive field value lengths (such as tweets).
    -- When users return to an error field and successfully edit the error field.
    -- For password fields with visible password strength criteria.
- **Must** avoid using unrecognizable system error messages like "code 500 error" as error messages.
- **Must** follow [Error Message Styling](https://clarity.design/documentation/forms#error-message-styling) guidelines.
- Make the error message as clear as possible. The content should provide clear guidance about how to fix the error.



## Changelog

- **2024-10-21**: Initial guidance