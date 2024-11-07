---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Tooltip Design Guidance

The [tooltip](https://clarity.design/documentation/tooltip) component provides a brief, informative message or description that appears when a user hovers over or focuses on an element. Tooltips help clarify the purpose of buttons, icons, and other interactive elements without cluttering the interface.

## Guidance

- Tooltips **must not** be used on components. Instead, provide clear descriptive labels and use inline help or signposts for additional information. This approach ensures users receive essential context without the risk of missing important details that tooltips might present.
- Tooltips **must not** be used on static images. Instead, designs **should** provide alt text that describes the image or indicates that the image is decorative and does not require alt text. This ensures that all users, including those using screen readers, receive necessary information about the images, enhancing accessibility.
- Tooltips **must not** be used on textual links. Instead, links **should** clearly describe their destination without being truncated. This approach improves usability by providing users with immediate context about where the link will take them.
- Tooltips **should** be used for actionable icons that lack text labels, such as those found in a toolbar. Tooltips provide essential context by displaying a brief description when the user hovers over the icon, helping users understand the icon's function without cluttering the interface with text labels.
- Tooltips **should** be placed in a [tooltip position](https://clarity.design/documentation/tooltip#placement) that keeps the entire tooltip visible on the screen and ensures it doesn’t cover important page content. This positioning enhances usability by allowing users to access both the tooltip information and the relevant content without confusion or frustration.
- Tooltips **should** be a set a width that accommodates the text string. This ensures that the tooltip is easily readable and prevents text from being cut off.

## Content Guidelines

- Tooltips **must** use sentence-style capitalization in tooltips and avoid using ending punctuation. This keeps the tooltip content clear and concise, aligning with standard readability practices.
- Tooltips **must** use only plain text, keeping the content concise. A tooltip can be a sentence fragment. If more detailed information is needed, consider using another form of help, such as a signpost or inline help, to ensure clarity and provide users with the necessary context.
- A verb phrase **should** be used to clearly describe the action represented by the icon, such as “Edit settings.” This helps users understand the functionality of the icon and enhances usability by providing context.

## Changelog

- **2024-10-30**: Initial guidance
