---
category: component developer guidance
state: draft
created: 2024-11-15
updated: 2024-11-18
---

# Badge Developer Guidance

The [badge](https://clarity.design/documentation/badge) component serves as a dynamic status modifier for other components, indicating the number of instances related to that component and providing users with quick, contextual information.

## Guidance

- **Must** use "99+" instead of displaying the actual number when the count exceeds 99. This keeps the interface clean and avoids overwhelming users with large numbers.

## Accessibility

- **Must** add a screen reader only class within an element in the badge using **.clr-sr-only** to uniquely label each badge.

- **2024-11-15**: Initial guidance