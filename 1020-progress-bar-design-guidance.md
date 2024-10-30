---
category: component design guidance
state: draft
created: 2024-10-16
updated: 2024-10-22
---

# Progress Bar Design Guidance

A [progress bar](https://clarity.design/documentation/progress) is a linear indicator that displays the progress of an ongoing, user-initiated process. Progress bars are designed for use in various areas, including the [main content area](https://clarity.design/documentation/app-layout), [header](https://clarity.design/documentation/header), [cards](https://clarity.design/documentation/card), and [modals](https://clarity.design/documentation/modal).

## Guidance

### Determinate Progress Bar

- Design teams **must** use a "determinate progress bar" when the process has a known duration. Examples:
    - File downloads or uploads, this allows users to see how much of the action is complete and how much remains, providing visual feedback and helping them stay focused on their task.
    - A series of configuration steps that occur during an initialization process. This provides clarity on progress, guides users through anticipated actions, reduces frustration and errors, and visually reinforces that the initialization is actively in progress.
- Design teams **must** explain what the progress bar is showing and why it might take time. For example, if uploading a file, include details such as the file name and size. This transparency helps users understand the ongoing process and sets appropriate expectations for completion time.
- Design teams **must** avoid changing the styles of the progress bar for state indications, such as using green to signify success. This practice can be misleading for users with sight impairments, as they may not perceive the color change without accompanying information, such as a text label or icon.
- Design teams **should** ensure that users can easily spot the progress bar, regardless of the device or interface. This enhances visibility and helps users track their progress effectively, improving overall usability.
- Design teams **may** use an optional label on the right side of the progress bar to display percentage completion. This provides users with additional context about their progress and can enhance their understanding of how much of the task is finished.

### Indeterminate Progress Bar

- Design teams **must** use an "indeterminate progress bar" for processes that do not have an estimated end time. This type of progress bar indicates that work is ongoing without providing a scope for completion or implying how long the process will take.
- Design teams **should** consider the availability of space when choosing an indeterminate progress bar. In many cases, the [Clarity Spinner](https://clarity.design/documentation/spinner) component may be more appropriate, as it occupies less space while still indicating that work is ongoing.

## Changelog

- **2024-10-22**: Initial guidance
