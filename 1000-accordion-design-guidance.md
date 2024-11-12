---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Accordion Design Guidance

An [accordion](https://clarity.design/documentation/accordion) is a user interface component that consists of vertically stacked sections, each containing multiple content panels. It allows users to expand and collapse these sections, enabling them to manage large amounts of information efficiently while maintaining a clear overview of the available content.

## Guidance

- Accordions **must** be used to display large amounts of information, preventing user overload and enabling expansion and collapse of sections as needed.
- Accordions **must not** be used when there is very little visible content on the page, as it can lead to unnecessary complexity and reduce usability.
- Accordions **must not** be used when there is minimal visible content on the page, as they can introduce unnecessary complexity and diminish usability.
- Accordions **should not** contain excessively lengthy information, as this may overwhelm users and undermine the collapsible design's purpose.
- Accordion headers **must** be concise and clearly convey the content's nature, enabling users to quickly understand the information in each section.

## Accessibility

- Clickable elements **must not** be included in the accordion header, as this can lead to confusion about the intended functionality and disrupt the user's interaction with the accordion.
- To maintain clarity and focus, titles **should** include only a title and brief information (if needed) in the accordion header, ensuring users can quickly understand the content within each section.
- Accordions **must not** be nested more than two levels deep to prevent overwhelming users with excessive content hierarchy, which can lead to confusion and difficulty navigating the information.

## Changelog

- **2024-10-30**: Initial guidance
