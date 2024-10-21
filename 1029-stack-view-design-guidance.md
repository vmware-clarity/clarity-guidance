---
category: component design guidance
state: draft
created: 2024-10-18
updated: 2024-10-21
---

# Stack View Component

A [Stack View](https://clarity.design/documentation/stack-view) displays key/value pairs, which users can expand to show more detail.

## Guidance

### Stack View Usage

- **Must** use stack view to display related key/value pairs.
- **Must** use stack view to progressively display a large set of data (key/value pairs) or to enable users to reveal more complex or less frequently used data as needed.

### Stack View Value Editing

- **Must** have an edit button on the top-right of the stack view.
- An editable stack view **must** open in a modal on clicking the edit button.

### Stack View Labels

- **Must** provide coincise labels (keys) that let users know what is under the label.
- **Must** NOT use icons as a label in the stack view.

## Changelog

- **2024-10-21**: Initial guidance