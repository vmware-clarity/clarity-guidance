---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-22
---

# Label Design Guidance

 A [label](https://clarity.design/documentation/label) component provides a concise description or identifier for interface elements, like form fields or statuses, helping users quickly understand their purpose.

## Guidance

- Design teams **must** keep labels short and concise to ensure they are easy to read and quickly understood.
- Design teams **must not** use all capital letters in labels. Using all caps can confuse users, making them think the label is a button or actionable element. This also impacts readability and accessibility, as screen readers may interpret all caps differently, and users with cognitive impairments may find it harder to read.
- Design teams **must not** use multiple lines of text within a single label to keep the interface clear and easy to scan.
- Design teams **should** use parentheses for any additional metadata required within the same label to keep the information organized and easy to read.
- Design teams **should** use [clickable labels](https://clarity.design/documentation/label#clicking-labels) to perform actions related to the label, providing a more intuitive user experience.
- Design teams **may** use a close icon at the right-most side of a label to dismiss it.  Design teams **must not** assign a separate action for a dismissible label, as its primary action is to dismiss the label.
- If a count or other number is related to the metadata displayed in the label, a badge **must** be used to clearly convey the information.

## Style and Color

- Design teams **must** choose colors for the label based on the [Clarity color palette](https://clarity.design/documentation/color) to ensure visual consistency across the interface.
- Design teams **should not** use excessive colors within the same context. As a rule of thumb, aim to limit colors to only those necessary for conveying meaning and maintaining visual harmony. Overusing colors can distract users and create cognitive or accessibility challenges.
- Design teams **must not** use color alone to convey information, as this can make content inaccessible to users with visual impairments or color vision deficiencies. Use additional indicators, such as text or icons, to ensure all users can interpret the information.
- Design teams **should** reserve red, yellow, and green to display state or status, as these colors are widely recognized for conveying meaning (e.g., errors, warnings, and success). This helps maintain clarity and consistency.

## Changelog

- **2024-10-21**: Initial guidance
