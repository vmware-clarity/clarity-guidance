---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Tabs Design Guidance

[Tabs](https://clarity.design/documentation/tabs) are components that organize the content of a page into multiple panes. Users can see the content of one tab at a time, yet quickly navigate to another tab.

## Guidance

- Tabs **must** be placed in a single, non-scrollable row, positioned above their content to ensure clarity and ease of navigation.
- Tabs **must not** be used in cards or modals, as this can create clutter and reduce usability within constrained spaces.
- More than seven tabs **must not** be used and labels **must** be limited to one or two words to ensure all tabs fit within the container. [Tab overflows] **may** be used when the tab group exceeds the available space or when space needs to be preserved.
- Tabs **must not** be used to break user interactions into a series of steps. Serial workflows are better presented using a [stepper](https://clarity.design/documentation/stepper) or a [wizard](https://clarity.design/documentation/wizard).
- Tabs **should**be used for alternate views within a vertical navigation or main content area to help users switch between related content efficiently.
- [Vertical tabs](https://clarity.design/documentation/tabs/code#vertical-tabs) **should** be used when tabs need to align along the side of the content for better structure in narrow layouts.

## Content Guidelines

- Tans **must not** be cross-linked between tabs, as it can confuse users and disrupt the intended navigation flow.
- Content in each tab **should** be independent of the content in other tabs to prevent confusion and ensure a clear, focused user experience.
- Similar content **should** be kept within the same view to prevent unnecessary back-and-forth navigation, allowing users to compare data more easily and stay focused.
- Long content **may**be divided into subsections within a tab to improve readability and help users quickly find relevant information.

## Label Guidelines

- Generic labels like "General" or "Advanced **must not** be used. They provide little clarity and can confuse users about the content within the tabs.
- Title case **must** be used for tab labels to maintain consistency and improve readability.
- Icons **must not** be used in tab labels. Icons can reduce clarity and increase cognitive load, making it harder for users to understand the content at a glance.
- A clear relationship **must** be shown between the tabs to help users understand how the content is connected and navigate intuitively.
- Nouns **should** be favored over verbs in tab labels, for example, "Settings," "Permissions," and "Performance," to create clearer, more scannable navigation.

## Changelog

- **2024-10-30**: Initial guidance
