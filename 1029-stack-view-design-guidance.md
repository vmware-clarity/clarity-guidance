---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Stack View Design Guidance

The [stack view](https://clarity.design/documentation/stack-view) component displays key/value pairs that users can expand to reveal more details, providing a clear and organized way to present information.

## Guidance

### Usage

- Stack views **must** be used to progressively display a large set of data (key/value pairs) or to allow users to reveal more complex or less frequently used data as needed, enhancing clarity and usability.
- Stack views **may** be used to display related key/value pairs, helping users understand connections between the data while maintaining an organized layout.

### Labels

- Concise labels (keys) that clearly indicate what information is associated with each label **must** be provided. 
- Icons **must not** be used as labels in the stack view, as this can lead to confusion and reduce clarity in understanding the associated data.

### Value Editing

- Edit buttons **must** be placed above the editable stack view, positioned to the right, to provide users with easy access to editing options.
- Clicking the edit button on an editable stack view **must** open a modal, enabling users to make changes without losing context.

## Changelog

- **2024-10-30**: Initial guidance
