---
category: component design guidance
state: draft
created: 2024-10-17
updated: 2024-10-22
---

# Signpost Design Guidance

[Signposts](https://clarity.design/documentation/signpost) are displayed in a popover dialog box and contain contextual help or information.

## Guidance

- **Must** use as an alternative to [tooltip](https://clarity.design/documentation/tooltip) when you have more content.
- **Must** use when the information presented needs to stay in view until the user interacts with another element.
- **Must** use when you want to include a header, an image, or text/image links in the content, as [tooltip](https://clarity.design/documentation/tooltip) does not support non-text or interactive content.
- **Must** use the allowed dimensions for the dialog. Width X Height format (216px minimum X 84px minimum) or (360px maximum X 504px maximum).
- **Must not** insert any actionable components, such as [buttons](https://clarity.design/documentation/button), in the dialog box. You can use text or image links.
- **Must** be paired with a trigger element, such as a button or icon button.
- **Should not** be so large that it dominates the screen. Make sure that the popover doesn't obstruct other important information on the screen.
- **Should** open only one signpost at a time to keep the interface uncluttered.
- **May** include a vertical scrollbar (browser default), if the content exceeds the maximum height of the dialog.

## Changelog

- **2024-10-22**: Initial guidance
