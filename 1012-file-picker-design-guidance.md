---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-21
---

# File Picker Design Guidance

[File Picker](https://clarity.design/documentation/file-picker) component allow users to select one or more files to upload.

## Guidance

Commonly found in [Forms](https://clarity.design/documentation/forms) and consists of a label, a button and an optional helper message. File picker component is available in `Vertical`, `Horizontal`, and `Compact` layouts.

- **Should** use `Compact` layout in places with limited vertical space, and information density is needed; otherwise the `Vertical` or `Horizontal` layouts are recommended.
- Use appropriate states for file picker. [States supported for file picker](https://clarity.design/documentation/file-picker#states).
- Recommended to use helper text to tell users which format the file input will accept, i.e., PNG, JPG, PDF, etc.
- **Should** follow the [forms pattern guidelines](https://clarity.design/documentation/forms).

## Changelog

- **2024-10-21**: Initial guidance
