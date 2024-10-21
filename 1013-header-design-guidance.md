---
category: component design guidance
state: draft
created: 2024-10-21
updated: 2024-10-21
---

# Header Component

[Header](https://clarity.design/documentation/header) is the component at the top of every page of your application. Provides a consistent place for branding, navigation, search, and access to global application actions like settings and notifications.

## Guidance

- **Must** use only one `Header` per page and must be at the start of the page.
- **Must** NOT use at the top of a smaller container like a popup or dialog.
- **Must** NOT overload with too many items, use maximum of four items in top-level navigation.
- **Should** use [Clarity Search](https://clarity.design/documentation/header#search) feature based on search's prominence and its utility within the application.
- **Should** use Right-Side Action Area of header for global actions and top-level navigational items that are important, yet visited less frequently.


## Content Guidelines
- **Must** NOT use vague headings, instead use short and concise heading for navigation items.
- **Should** pair icons with text when the provided text gives additional context specific to the user. For example, the user's name.
- **Should** NOT combine icons and text unless the text provides some user context.


## Changelog

- **2024-10-21**: Initial guidance
