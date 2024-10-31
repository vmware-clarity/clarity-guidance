---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Tree View Design Guidance

The [tree view](https://clarity.design/documentation/tree-view) component displays a hierarchical list of items with a parent-child relationship, allowing users to toggle children into view by expanding or collapsing their parent item.

## Guidance

- Design teams **must** use a tree view to display and manage large amounts of hierarchical information, as it helps users navigate complex data structures more efficiently.
- Design teams **should not** use excessive levels in a tree view, except when displaying user-generated information. Instead, they should consolidate layers whenever possible to enhance user comprehension and streamline navigation.
- Design teams **should not** use a tree view for only one level of nested information. Instead, they should use an [accordion](https://clarity.design/documentation/accordion) to present the content more effectively and enhance user experience.

### Icon Tree

- Design teams **must** maintain consistency in icon usage within a tree view. If icons are added, they should be applied to all items to ensure a cohesive experience. Design teams **must not** apply icons to only some items in a tree view, as this can create confusion and disrupt the visual hierarchy.
- Design teams **should** use neutral colors in a tree view to prevent overwhelming users with excessive colors and shapes, promoting a clearer and more focused visual presentation.
- Design teams **should** use icons to visually represent the type of items in a tree view, helping users quickly identify each item's nature and improving their ability to navigate the content effectively.

### Checkbox Tree

- Design teams must not use icons and checkboxes simultaneously in a tree view, as this can lead to excessive indentation and wasted space, negatively impacting usability and clarity. This approach also creates accessibility challenges, making it harder for all users, including those with visual impairments, to navigate and interact with the content effectively.
- Design teams **must** maintain consistency in the use of checkboxes within a tree view to ensure a coherent user experience. Design teams **must not** apply checkboxes to only some items in a tree view, as this can create confusion and disrupt the visual hierarchy.
- Design teams **must** use checkboxes in a tree view when multiple selections are allowed, enabling users to select more than one item efficiently and intuitively.

## Changelog

- **2024-10-30**: Initial guidance
