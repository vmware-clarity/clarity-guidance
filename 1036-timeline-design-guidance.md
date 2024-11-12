---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Timeline Design Guidance

The [timeline](https://clarity.design/documentation/timeline) component is a visual indicator that displays progress through a workflow. It can also guide users through specific processes or predefined steps, helping them understand their journey.

## Guidance

- Timelines **must** be used when showcasing a list of events that are relevant to the user in chronological order to increase user awareness of the sequence of events.
- Timelines **must** be used when users need an overview of a workflow and want to see where they are in the process. This helps users understand their progress and what steps are still ahead.
- Timelines **must** be used when displaying more complex content in each step to help users navigate through the information clearly and understand the relationships between steps.
- Timelines **must** be used when longer forms require more space and have fewer steps. For workflows with many steps that contain small amounts of data in each step, use a [stepper](https://clarity.design/documentation/stepper).
- Timelines **may** be used when breaking down complex and lengthy workflows into multiple clear steps (more than two steps) to help users follow the process more easily.

For more guidance on multi-step process workflows, see the [Multi-Step Workflow Pattern](https://clarity.design/documentation/multi-step-workflow).

### Layouts

Timelines have two types of layouts: horizontal and vertical.

- Horizontal layouts **must** be used when a workflow has three to five steps to ensure clarity and ease of navigation for users.
- Horizontal layouts **must** be used when all steps can be displayed without wrapping to maintain a clear and organized visual flow.
- Vertical layouts **must** be used when a workflow has more than five steps to ensure clarity and prevent overwhelming users with too much information at once.
- Vertical layouts **must** be used when timestamps are optional, allowing for a cleaner design while still effectively presenting the workflow.

### Step States

- Each step in a timeline **must** have one of five visual states: complete, current step, not started, processing, or error, to clearly indicate progress and status to users.
- Spinners **must** be used when loading or performing an action (e.g., in the processing state) to provide users with visual feedback and indicate that their request is being processed.
- Buttons **must** be disabled when loading or adjust buttons to reflect the contextual loading state, ensuring users understand that actions cannot be taken during this time.
- Error messages **should** be displayed under the error icon in the error state to provide users with clear information about the issue.
- Tooltips **must not** be used to display error messages, as this can hinder accessibility for users who rely on screen readers or keyboard navigation. Instead, error messages **should** be displayed visibly within the interface to ensure all users can access and understand the information.

## Content Guidelines

- Step descriptoins **should** be used to provide additional information and guidance to users, helping them understand what is required at each stage of the process.

## Changelog

- **2024-10-30**: Initial guidance
