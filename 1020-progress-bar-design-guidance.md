---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Progress Bar Design Guidance

A [progress bar](https://clarity.design/documentation/progress) is a linear indicator that displays the progress of an ongoing, user-initiated process. Progress bars are designed for use in various areas, including the [main content area](https://clarity.design/documentation/app-layout), [header](https://clarity.design/documentation/header), [cards](https://clarity.design/documentation/card), and [modals](https://clarity.design/documentation/modal).

## Guidance

### Determinate Progress Bar

- A "determinate progress bar" **must** be used when the process has a known duration. Examples:
  - File downloads or uploads, this allows users to see how much of the action is complete and how much remains, providing visual feedback and helping them stay focused on their task.
  - A series of configuration steps that occur during an initialization process. This provides clarity on progress, guides users through anticipated actions, reduces frustration and errors, and visually reinforces that the initialization is actively in progress.
- Progress bars **must** be accompanied by descriptive text, such as file name and size, to provide transparency into the ongoing process and set user expectations for completion time.
- Progress bars **must not** use visual style changes alone (color, font, size, etc.) to indicate states, ensuring accessibility for users with sight impairments by providing accompanying text labels or icons.
- Progress bars **should** be prominently displayed and visually distinguishable across all devices and interfaces, enhancing visibility and usability for effective progress tracking.
- Progress bars **may** include an optional percentage completion label on the right side, providing users with supplemental context and enhancing their understanding of task progress.

### Indeterminate Progress Bar

- Progress bars **must** use an indeterminate state for processes without estimated end times, indicating ongoing work without suggesting completion scope or timeline.
- The availability of space **should** be considered when choosing an indeterminate progress bar. In many cases, the [Clarity Spinner](https://clarity.design/documentation/spinner) component **may** be more appropriate, as it occupies less space while still indicating that work is ongoing.

## Changelog

- **2024-10-30**: Initial guidance
