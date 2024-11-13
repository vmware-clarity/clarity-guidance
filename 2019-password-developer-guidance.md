---
category: component developer guidance
state: draft
created: 2024-11-12
updated: 2024-11-12
---

# Password Developer Guidance

A [password](https://clarity.design/documentation/password) component is an input field that allows users to toggle between hiding or showing the password in plain text.

## Guidance

- A password field **must** be used when the user needs to set or input a password. This ensures security and consistency across the interface.
- An asterisk (\*) **must not** be used in the password field. Instead, use dots or bullets to mask the password for consistency and clarity.
- Password requirements **should** be used in the helper text to guide the user, helping them create valid passwords without confusion.
- Password requirements **should not** hidden in a signpost or revealed to the user only after the user fails the first attempt. Providing them upfront helps prevent frustration and improves the user experience.
- A password field **may** be used when the user needs to mask the input content to protect sensitive information, even if it is not a password.
- Error states on the password input **may** be used to communicate a user or system error. This validation can happen immediately after the input looses focus.
- Success states on the password input **may** be used to communicate success info such as if the user password meets the password requirement criteria.

## Changelog

- **2024-11-12**: Initial guidance
