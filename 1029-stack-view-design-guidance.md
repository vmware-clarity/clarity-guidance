---
category: component design guidance
state: draft
created: 2024-10-18
updated: 2024-10-22
---

# Stack View Design Guidance

The [stack view](https://clarity.design/documentation/stack-view) component displays key/value pairs, which users can expand to show more detail.

## Guidance

### Stack View Usage

- **Must** use stack view to progressively display a large set of data (key/value pairs) or to enable users to reveal more complex or less frequently used data as needed.
- **May** use stack view to display related key/value pairs.

### Stack View Value Editing

- An editable stack view **must** have an edit button above the stack view to the right.
- An editable stack view **must** open a modal on clicking the edit button.

### Stack View Labels

- **Must** provide coincise labels (keys) that let users know what is under the label.
- **Must not** use icons as a label in the stack view.

## Changelog

- **2024-10-22**: Initial guidance