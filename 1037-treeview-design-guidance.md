---
category: component design guidance
state: draft
created: 2024-10-17
updated: 2024-10-21
---

# Treeview Component

[Treeview](https://clarity.design/documentation/treeview) is a hierarchical list of items that have a parent-child relationship where children can be toggled into view by expanding or collapsing their parent item.

## Guidance

- **Must** use a tree view to display and work with large amounts of hierarchical information.
- **Must** NOT use too many levels unless it is for user-generated information. Instead consolidate the layers if possible.
- **Must** NOT use for only one level of nested information. Use an `accordion` instead that go one level deep.

## Icon Tree
- **Should** maintain consistency for icons. If icons needs to be added to a tree view, apply the icons on all items. Avoid icons to only some items in a tree view.
- **Should** use neutral colors to avoid overloading the tree and related components with colors and shapes.
- Use Icons in order to visually represent the type of items in a tree.

## Checkbox Tree
- **Must** avoid using icons and checkboxes at the same time. It would result in large indentation and loss of space.
- **Must** maintain consistency for checkboxes. 
- **Must** avoid checkboxes added to only some items in a tree view.
- **Should** use checkboxes to a tree view when more than one selection is allowed.


## Changelog

- **2024-10-21**: Initial guidance
