---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Button Group Design Guidance

The [button group](https://clarity.design/documentation/button-group) component is used to create collections of similar action buttons, allowing users to easily identify and perform related tasks within the interface.

## Guidance

Button groups follow the standard [button design guidance](/1003). All options related to classes and sizes applicable to buttons also apply to button groups, ensuring consistency in design and functionality.

### Button Group Types

- Design teams **must** use solid button groups to direct the user's attention to the primary actions the application suggests. This enhances visibility and encourages users to engage with the most important tasks.
- Design teams **must** use outline button groups to indicate a set of secondary actions or to minimize visual noise on a page. This helps prioritize primary actions while still providing users with alternative options.
- Design teams **must** use flat button groups for tertiary actions. This helps distinguish these less critical actions from primary and secondary options, ensuring a clear hierarchy of user interactions.
- Design teams **should** use flat button groups in cards and above datagrid components. This placement enhances accessibility and keeps related actions easily discoverable for users.
- Design teams **may** use all button types in both normal (default) and small sizes. This flexibility allows for better alignment with the overall layout and user interface requirements.

### Button Group Arrangement

- Design teams **must** arrange primary actions on the left, followed by secondary actions, and place warning actions as the last button in a group. This order provides a clear hierarchy and helps users quickly identify the most important actions.
- Design teams **must not** mix differently styled buttons, such as solid and outlined, in the same button group. Maintaining a consistent style helps prevent confusion and ensures a cohesive user experience.

### Icon Button Group

- Design teams **must** use icon button groups in their normal size (36px). This size enhances recognition and clickability, improving overall user interaction with the buttons.
- Design teams **should** include text alongside the icon if space allows. This addition aids users in understanding the action, providing clearer context and enhancing usability.
- Design teams **should** position icons before the text in icon buttons. This layout creates a natural flow for users, making it easier to identify actions quickly and intuitively.

### Button Group Overflow

- Design teams **must** use overflow for button groups that exceed their containing space or to conserve space. This ensures that all actions remain accessible while maintaining a tidy interface.
- Design teams **should** place the overflow button at the far right of the button group. This positioning makes it easy for users to find additional actions without disrupting the visual hierarchy.
- Design teams **must** ensure that button groups containing text and icons, or just icons, display text in the overflow dropdown menu. This practice enhances clarity and helps users understand the actions available to them.

### Multiple Button Groups

- Design teams **must** arrange button groups to start with primary actions, followed by secondary actions. This order provides a clear visual hierarchy, guiding users to the most important actions first.
- Design teams **should** use button groups to organize similar actions together, clearly separating them from other actions. This grouping helps users quickly identify related options.

### Checkbox Button Groups

- Design teams **should** use button groups when a small list of options can be selected, similar to the [checkbox](https://clarity.design/documentation/checkbox) component. This approach allows for clear and accessible selection of related actions without overwhelming the user.
- Design teams **should** use option labels consisting of 1 to 3 short words. Keeping labels concise improves clarity and helps users quickly grasp the available actions.

### Radio Button Groups

- Design teams **should** use button groups when selecting one option from a small list, similar to the [radio button](https://clarity.design/documentation/radio) component. This ensures a clear and straightforward selection process for users.
- Design teams **should** use option labels consisting of 1 to 3 short words. Keeping labels concise improves clarity and helps users quickly grasp the available actions.

## Changelog

- **2024-10-30**: Initial guidance
