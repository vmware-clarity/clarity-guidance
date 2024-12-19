---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Password Design Guidance

A [password](https://clarity.design/documentation/password) component is an input field that allows users to toggle between hiding or showing the password in plain text.

## Guidance

- A password field **must** be used when the user needs to set or input a password. This ensures security and consistency across the interface.
- An asterisk (\*) **must not** be used in the password field. Instead, use dots or bullets to mask the password for consistency and clarity.
- Password requirements **should** be used in the helper text to guide the user, helping them create valid passwords without confusion.
- Password requirements **should not** be hidden in a signpost or revealed to the user only after the user fails the first attempt. Providing them upfront helps prevent frustration and improves the user experience.
- A password field **may** be used when the user needs to mask the input content to protect sensitive information, even if it is not a password.

## Changelog

- **2024-10-30**: Initial guidance
