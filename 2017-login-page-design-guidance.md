---
category: component developer guidance
state: draft
created: 2024-11-12
updated: 2024-11-12
---

# Login Page Developer Guidance

The [login page](https://clarity.design/documentation/login) is a predefined form designed for applications that require user authentication, providing a streamlined interface for entering credentials.

## Guidance

- The Login page component **must** be used for authentication flows to maintain consistency across applications, ensuring users have a seamless experience.
- Password input **must** follow the [password developer guidance](/2019) to ensure security and usability in the authentication process.

### Validation

- Validation **must** occur when the user submits the login form.
- The validation message **must** appear below the password field incase the user enters an incorrect username or password.
- An error occurred message **must not** specify whether the error occurred in the username or password field in the validation message, as this can compromise security and lead to unauthorized access attempts.

### CSS Classes

- **Must** use Clarity’s login form by extending the `.login` classname on form and wrapping it in a container extending the `.login-wrapper` class.
- **Should** use the `.login-header`, `.login-body` and `.login-footer` classes to wrap each section of the login page.
- To add a logo, you **should** use the `.logo` class inside `.login-header`.
- **Should** extend the `.title` and `.subtitle` class on labels indicating the product title and subtitle. If your product title has the trademark symbol, make sure to wrap the trademark symbol in a span with the `.trademark` class on it.
- **Should** add the `.username` class on the username input field.
- **Should** add the `.password` class on the password input field.
- **Should** extend the `.active` class with `.error` to display the validation message.
- You **may** add action buttons in the top-right corner with the help of the `.actions` class within the `.login-header`.

### Accessibility

- **Must** include label elements in the form controls to support screen readers.
- **Must** add the `clr-sr-only` class to the label to visually hide it, this maintains the same visual experience while still helping screen readers to understand the controls in the form.

## Changelog

- **2024-11-12**: Initial guidance
