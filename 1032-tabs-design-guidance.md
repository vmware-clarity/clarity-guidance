---
category: component design guidance
state: draft
created: 2024-10-18
updated: 2024-10-22
---

# Tabs Design Guidance

[Tabs](https://clarity.design/documentation/tabs) are components that organize the content of a page into multiple panes. Users can see the content of one tab at a time, yet quickly navigate to another tab.

## Guidance

- **Must** place tabs in a single, non-scrollable row, above their content.
- **Must not** use tabs in cards and modals.
- **Must not** use more than seven tabs and limit labels to one or two words to ensure that all tabs appear in the container. **May** use [tab overflow](https://clarity.design/documentation/tabs/code#overflow-tabs) when the tab group is larger than its containing space or if you need to preserve space.
- **Must not** use tabs to break user interactions into a series of steps. Serial workflows are best presented in a [stepper](https://clarity.design/documentation/stepper) or [wizard](https://clarity.design/documentation/wizard). 
- **Should** use tabs for alternate views within a vertical nav or main content area.
- **Should** use [vertical tabs](https://clarity.design/documentation/tabs/code#vertical-tabs) for vertical alignment.

## Content Guidelines

- **Must not** have cross-linking between tabs.
- Content in each tab **should** be independent of the content in other tabs.
- **Should** keep similar content in the same view. Don't force users to navigate back and forth to compare data.
- **May** consider dividing long content into subsections within the tab.

## Label Guidelines

- **Must not** use generic labels such as General or Advanced.
- **Must not** use title case capitalization.
- **Must not** use icons in labels.
- **Must** show a clear relationship between the tabs.
- **Should** favor nouns over verbs, for example, Settings, Permissions, and Performance.


## Changelog

- **2024-10-21**: Initial guidance