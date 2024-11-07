---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Label Design Guidance

A [label](https://clarity.design/documentation/label) component provides a concise description or identifier for interface elements, like form fields or statuses, helping users quickly understand their purpose.

## Guidance

- Labels **must** be short and concise to ensure easy readability and quick understanding.
- Labels **must not** use all capital letters. Using all caps can confuse users, making them think the label is a button or actionable element. This also impacts readability and accessibility, as screen readers might interpret all caps differently, and users with cognitive impairments might find it harder to read.
- Labels **must not** wrap to multiple lines. This maintains interface clarity and ease of scanning.
- Labels **should** use parentheses for additional metadata. This keeps information organized and easily readable.
- [Clickable labels](https://clarity.design/documentation/label#clicking-labels) **should** be used to perform related actions. This provides a more intuitive user experience and streamlines interactions.
- Close icons **may** be used at the right-most side of a label to dismiss it. A separate action **must not** be assigned for a dismissible label, as its primary action is to dismiss the label.
- If a count or other number is related to the metadata displayed in the label, a badge **must** be used to clearly convey the information.

## Style and Color

- Label colors **must** be chosen based on the [Clarity color palette](https://clarity.design/documentation/color) to ensure visual consistency across the interface.
- Excessive colors **should not** be used within the same context. As a rule of thumb, aim to limit colors to only those necessary for conveying meaning and maintaining visual harmony. Overusing colors can distract users and create cognitive or accessibility challenges.
- Color alone **must not** be used to convey information, as this can make content inaccessible to users with visual impairments or color vision deficiencies. Use additional indicators, such as text or icons, to ensure all users can interpret the information.
- Red, yellow, and green **should** be reserved to display state or status, as these colors are widely recognized for conveying meaning (e.g., errors, warnings, and success). This helps maintain clarity and consistency.

## Changelog

- **2024-10-30**: Initial guidance
