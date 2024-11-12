---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Tree View Design Guidance

The [tree view](https://clarity.design/documentation/tree-view) component displays a hierarchical list of items with a parent-child relationship, allowing users to toggle children into view by expanding or collapsing their parent item.

## Guidance

- Tree view **must** be used to display and manage large amounts of hierarchical information, as it helps users navigate complex data structures more efficiently.
- Tree view **should not** use excessive levels, except when displaying user-generated information. Instead, they **should** consolidate layers whenever possible to enhance user comprehension and streamline navigation.
- Tree view **should not** be used for only one level of nested information. Instead, an [accordion](https://clarity.design/documentation/accordion) **should** be used to present the content more effectively and enhance user experience.

### Icon Tree

- Tree views **must** maintain consistency in icon usage. If icons are added, they **should** be applied to all items to ensure a cohesive experience. Tree views **must not** apply icons to only some items, as this can create confusion and disrupt the visual hierarchy.
- Tree views **should** use neutral colors to prevent overwhelming users with excessive colors and shapes, promoting a clearer and more focused visual presentation.
- Tree views **should** use icons to visually represent types of items, helping users quickly identify each item's nature and improving their ability to navigate the content effectively.

### Checkbox Tree

- Tree views **must** not use icons and checkboxes simultaneously, as this can lead to excessive indentation and wasted space, negatively impacting usability and clarity. This approach also creates accessibility challenges, making it harder for all users, including those with visual impairments, to navigate and interact with the content effectively.
- Tree views **must** maintain consistency in the use of checkboxes to ensure a coherent user experience. Tree views **must not** apply checkboxes to only some items, as this can create confusion and disrupt the visual hierarchy.
- Tree views **must** use checkboxes when multiple selections are allowed, enabling users to select more than one item efficiently and intuitively.

## Changelog

- **2024-10-30**: Initial guidance
