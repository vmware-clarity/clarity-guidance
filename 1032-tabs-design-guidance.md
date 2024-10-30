---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Tabs Design Guidance

[Tabs](https://clarity.design/documentation/tabs) are components that organize the content of a page into multiple panes. Users can see the content of one tab at a time, yet quickly navigate to another tab.

## Guidance

- Design teams **must** place tabs in a single, non-scrollable row, positioned above their content to ensure clarity and ease of navigation.
- Design teams **must not** use tabs in cards or modals, as this can create clutter and reduce usability within constrained spaces.
- Design teams **must not** use more than seven tabs and must limit labels to one or two words to ensure all tabs fit within the container.  Design teams **may** use [tab overflow](https://clarity.design/documentation/tabs/code#overflow-tabs) when the tab group exceeds the available space or when space needs to be preserved.
- Design teams **must not** use tabs to break user interactions into a series of steps. Serial workflows are better presented using a [stepper](https://clarity.design/documentation/stepper) or a [wizard](https://clarity.design/documentation/wizard). 
- Design teams **should** use tabs for alternate views within a vertical navigation or main content area to help users switch between related content efficiently.
- Design teams **should** use [vertical tabs](https://clarity.design/documentation/tabs/code#vertical-tabs) when tabs need to align along the side of the content for better structure in narrow layouts.

## Content Guidelines

- Design teams **must not** allow cross-linking between tabs, as it can confuse users and disrupt the intended navigation flow.
- Content in each tab **should** be independent of the content in other tabs to prevent confusion and ensure a clear, focused user experience.
- Design teams **should** keep similar content within the same view to prevent unnecessary back-and-forth navigation, allowing users to compare data more easily and stay focused.
- Design teams **may** consider dividing long content into subsections within a tab to improve readability and help users quickly find relevant information.

## Label Guidelines

- Design teams **must not** use generic labels like "General" or "Advanced," as they provide little clarity and can confuse users about the content within the tabs.
- Design teams **must** use title case capitalization for tab labels to maintain consistency and improve readability.
- Design teams **must not** use icons in tab labels. Icons can reduce clarity and increase cognitive load, making it harder for users to understand the content at a glance.
- Design teams **must** show a clear relationship between the tabs to help users understand how the content is connected and navigate intuitively.
- Design teams **should** favor nouns over verbs in tab labels, for example, "Settings," "Permissions," and "Performance," to create clearer, more scannable navigation.

## Changelog

- **2024-10-30**: Initial guidance