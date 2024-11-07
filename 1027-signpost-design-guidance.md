---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Signpost Design Guidance

[Signposts](https://clarity.design/documentation/signpost) are displayed in a popover dialog box and provide contextual help or information to assist users in understanding specific elements or actions within the interface.

## Guidance

- Signposts **must** be used as an alternative to tooltips when additional content is necessary. This allows for more detailed information to be provided without overwhelming the user interface.
- Signposts **must** be used when the information needs to remain visible until the user interacts with another element. This ensures that users have access to important contextual information while navigating the interface.
- Signposts **must** be used when including a header, image, or text/image links in the content, as tooltips do not support non-text or interactive elements. This allows for a richer presentation of information.
- Specified dimensions **must** be used for the dialog, adhering to the format of Width X Height (216px minimum X 84px minimum) or (360px maximum X 504px maximum). This ensures consistency and optimal usability across the interface.
- Signposts **must** be paired with a trigger element, such as a button or icon button. This establishes a clear interaction pathway for users, making it easy for them to access contextual information when needed.
- Actionable components, such as buttons **must not** be inserted in the dialog box. Instead, text or image links can be used to maintain clarity and prevent confusion about the dialog's purpose.
- Signposts **should not** be allowed to become so large that they dominate the screen. It’s important to ensure that the popover does not obstruct other critical information, maintaining a clear user interface.
- Signposts **should** only open one at a time to keep the interface uncluttered. This approach helps users focus on the information presented without being overwhelmed by multiple popovers.
- A vertical scrollbar (browser default) **may** be used if the content exceeds the maximum height of the dialog. This ensures that users can still access all information without compromising the dialog's design integrity.

## Changelog

- **2024-10-30**: Initial guidance
