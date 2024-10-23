---
category: component design guidance
state: draft
created: 2024-10-17
updated: 2024-10-22
---

# Tree View Design Guidance

The [tree view](https://clarity.design/documentation/tree-view) component presents a hierarchical list of items that have a parent-child relationship where children can be toggled into view by expanding or collapsing their parent item.

## Guidance

- **Must** use a tree view to display and work with large amounts of hierarchical information.
- **Must not** use too many levels unless it is for user-generated information. Instead, consolidate the layers if possible.
- **Should not** use a tree view for only one level of nested information. Use an [accordion](https://clarity.design/documentation/accordion) instead.

## Icon Tree

- **Must** maintain consistency for icons. If icons need to be added to a tree view, apply the icons on all items. **Must not** apply icons to only some items in a tree view.
- **Should** use neutral colors to avoid overloading the tree and related components with colors and shapes.
- **Should** use icons in order to visually represent the type of items in a tree.

## Checkbox Tree

- **Must not** use icons and checkboxes at the same time. It would result in large indentation and loss of space.  
- **Must** maintain consistency for checkboxes. **Must not** apply checkboxes to only some items in a tree view.  
- **Must** use checkboxes in a tree view when more than one selection is allowed.  


## Changelog

- **2024-10-22**: Initial guidance
