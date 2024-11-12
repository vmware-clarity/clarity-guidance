---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Modal Design Guidance

The [modal](https://clarity.design/documentation/modal) component informs users about a task and presents information that requires immediate attention, ensuring that critical messages are clearly conveyed.

## Guidance

- Modals **must** be used when it is necessary to grab the user's attention for important messages, such as errors that prevent users from completing an action or actions that cannot be reversed.
- Modals **must** be used to show additional information without losing the context of the parent page. This helps users keep track of what they were doing while also providing important details, making it easier for them to make informed decisions.
- Modals **must** be used to break down a complex workflow into a series of simpler steps. This approach makes it easier for users to follow along and complete tasks without feeling overwhelmed by too much information at once.
- Modals **must** be tested for responsiveness before selecting their size. Different [modal sizes](https://clarity.design/documentation/modal#sizes) are available, with medium being the default. This ensures the modal functions well across various screen sizes and devices.
- Modals **must not** be used for non-essential information that is unrelated to the current workflow, as this can distract users and disrupt their focus on important tasks.
- Modals **must not** be used for complex workflows that require additional information not included within the modal, as this can confuse users and hinder their ability to complete tasks effectively.
- Stacked modals **should not** be used, as they can create confusion about context. Instead, consider the following alternatives:
  - Use inline expansion within the first modal to maintain context and clarity for users.
  - Explore options like inline task completion to keep users engaged with the main content and allow them to complete tasks without unnecessary interruptions.
- Modals **should** be user-dismissable. Actions taken to either cancel or proceed **should** allow users to dismiss the modal, ensuring a smooth and intuitive user experience.
  - Modals **should** be reserved for critical events that require user action, as they are the highest priority notification. Since modals disrupt user task flows, it's important to use them judiciously to avoid overwhelming users.
  - By default, design teams **should** ensure that Clarity modals do not dismiss when clicking on the background overlay to prevent the loss of information or data. An option to override this behavior is available if needed. It's important to provide clear options to close the modal through buttons or accessible controls, ensuring that users relying on keyboard navigation and assistive technologies can easily dismiss the modal without confusion.

## Changelog

- **2024-10-30**: Initial guidance
