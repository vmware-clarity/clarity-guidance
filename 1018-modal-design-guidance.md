---
category: component design guidance
state: draft
created: 2024-10-17
updated: 2024-10-22
---

# Modal Component

[Modal](https://clarity.design/documentation/modal) component informs the users about a task and can contain information that requires immediate attention.

## Guidance

- **Must** use when you want to grab user's attention for an important message, such as errors that prevent a user from completing an action or actions that can't be reversed.
- **Must** use to show additional information without losing the context of the parent page.
- **Must** use to break down a complex workflow into a series of less complicated steps.
- **Must** test responsiveness before picking the size of the modal. Different [Modal sizes](https://clarity.design/documentation/modal#sizes) are available in the pattern. Default being medium.
- **Must not** use for non-essential information that is not related to the current workflow.
- **Must not** use for complex workflows that require additional information not contained within the modal.
- **Must not** use modal over modal. Context becomes confusing when modals are stacked. Before you decide to stack modals, do the following actions:
    - Seek alternatives to the second modal such as inline expansion within the first one.
    - Seek alternatives to the use of modals in that scenario and explore alternatives such as inline task completion.
- **Should** have user dismissable modals. Taking any actions to either cancel or proceed should eventually dismiss the modal.
    - Please note that the modals are the highest priority notification, since they disrupt user task flows, they **should** be reserved for critical events that require user action.
    - By default, Clarity modals are not dismissed when clicking on the background overlay. This prevents losing information or data. An option to override is available.

## Changelog

- **2024-10-22**: Initial guidance
