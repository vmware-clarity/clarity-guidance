---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-21
---

# Accordion Component

An [accordion](https://clarity.design/documentation/accordion) is a collection of vertically stacked sections with multiple content panels.

## Guidance

- **Must** use accordions when you need to display a lot of different information and the user doesn’t need it all at once.
- **Must** NOT use an accordion if all the content is important to a user.
- **Must** NOT use an accordion if there is very little visible content on the page.
- **Must** NOT add too long information in the accordion content.
- The accordion header **must** be coincise and convey the nature of the content.
- **Should** use accordions to present secondary information or to provide an overview of a page's content.

### Accessibility 

- The accordion header **must** NOT contain clickable elements.
- The accordion header **should** include only a title and brief info (if needed).
- Accordions **may** be nested up to 2 levels.

## Changelog

- **2024-10-21**: Initial guidance