---
category: component design guidance
state: draft
created: 2024-10-18
updated: 2024-10-21
---

# Tabs Design Guidance

[Tabs](https://clarity.design/documentation/tabs) are components that organize the content of a page into multiple panes. Users can see the content of one tab at a time, yet quickly navigate to another tab.

## Guidance

- **Must** place tabs in a single, non-scrollable row, above their content.
- **Must** avoid using tabs in cards and modals.
- **Must** avoid using more than seven tabs and limit labels to one or two words to ensure that all tabs appear in the container. You may use [tab overflow](https://clarity.design/documentation/tabs/code#overflow-tabs) when the tab group is larger than its containing space or if you need to preserve space.
- **Must not** use tabs to break user interactions into a series of steps. Serial workflows are best presented in a [stepper](https://clarity.design/documentation/stepper) or [wizard](https://clarity.design/documentation/wizard). 
- **Should** use tabs for alternate views within a vertical nav or main content area.
- **Should** use [Vertical Tabs](https://clarity.design/documentation/tabs/code#vertical-tabs) for vertical alignment.

## Content Guidelines

- **Must** avoid cross-linking between tabs.
- Content in each tab **should** be independent of the content in other tabs.
- **Should** keep similar content in the same view. Don't force users to navigate back and forth to compare data.
- **May** consider dividing long content into subsections within the tab.

## Label Guidelines

- **Must** avoid generic labels such as General or Advanced.
- **Must** Use title-style capitalization.
- **Must** avoid using icons in labels.
- **Must** show a clear relationship between the tabs.
- **Should** favour nouns over verbs, for example, Settings, Permissions, and Performance.


## Changelog

- **2024-10-21**: Initial guidance