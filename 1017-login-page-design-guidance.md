---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Login Page Design Guidance

The [login page](https://clarity.design/documentation/login) is a predefined form designed for applications that require user authentication, providing a streamlined interface for entering credentials.

## Guidance

- Login page component **must** be used for authentication flows to maintain consistency across applications, ensuring users have a seamless experience.
- Password input **must** follow the [password design guidance](/1019) to ensure security and usability in the authentication process.
- An error occurred message **must not** specify whether the error occurred in the username or password field in the validation message, as this can compromise security and lead to unauthorized access attempts.

## Changelog

- **2024-10-30**: Initial guidance
