---
category: component design guidance
state: draft
created: 2024-10-16
updated: 2024-10-21
---

# Progress Bar Component

[Progress Bar](https://clarity.design/documentation/progress) is a linear indicator that shows the progress of an ongoing, user-initiated process. Progress bars are designed for use in the [main content area](https://clarity.design/documentation/app-layout), [header](https://clarity.design/documentation/header), [cards](https://clarity.design/documentation/card), and [modals](https://clarity.design/documentation/modal).

## Guidance

### Determinate Progress Bar

- **Must** use "Determinate progress bar" when the process has a known duration. Please see examples below:
    - File downloads or uploads
    - A series of configuration steps that happen during an initialization process.
- **Must** explain what the progress bar is showing and why it might take time. For example, if you're uploading a file, provide the file name and size.
- **Must** avoid changing styles of the progress bar for the purpose of state switch.  e.g. Green to indicate Success is not recommended. Sight impaired users may not read the additional meaning without additional information such as a text label or icon.
- **Should** ensure that users can easily spot the progress bar, regardless of the device or interface.
- **May** use an optional label on the right that shows percentage completion.
- Choose different [Progress bar variations](https://clarity.design/documentation/progress/code#variations) based on the requirement.


### Indeterminate Progress Bar

- **Must** use "Indeterminate progress bar" for a process that has no estimate of an end time. It indicates that work is occurring without indicating a scope for completion or implying an estimate for how long it will take.
- **Should** consider availability of space while choosing Indeterminate progress bar. In many cases, [Clarity Spinner](https://clarity.design/documentation/spinner) component is best because they occupy less space.


## Accessibility Guidelines
[Progress Bar Accessibility Guidelines](https://clarity.design/documentation/progress#accessibility)


## Changelog

- **2024-10-21**: Initial guidance
