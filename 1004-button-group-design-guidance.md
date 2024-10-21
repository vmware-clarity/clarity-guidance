---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-21
---

# Button Group Component

[Button Group](https://clarity.design/documentation/button-group) are for creating collections of similar type action buttons.

## Guidance

Button groups follow normal [Button](https://guidance.clarity.design/1003) design guidelines. All button options regarding classes and sizes apply to button groups.

### Button Group Types

- **Must** use `Solid` button groups to direct the user's attention to the primary actions the application is suggesting the user take.
- **Must** use `Outline` button groups to indicate a set of secondary actions or to reduce the visual noise on a page.
- **Must** use `Flat` button groups for a set of tertiary actions.
- **Should** typically use `Flat` button groups in Cards and above Datagrid components.
- **May** use `Solid`, `Outline` and `Flat` buttons in normal (Default) and small (Compact) sizes.

### Button Group Arrangement

- **Must** arrange primary actions on the left, followed by secondary actions, and warning actions as the last button in a group.
- **Must** NOT mix differently styled buttons together, such as solid and outlined.

### Icon Button Group

- **Must** use 'Icon button groups' in their normal size (36px). This makes them easier to recognize and to click.
- **Should** have text along with the icon if you have the space. This helps users understand the action.
- **Should** start icon buttons with icons and follow with text.

### Button Group Overflow

- **Must** use overflow when a button group is larger than its containing space, or to preserve space.
- The overflow button **should** be the last position to the right of the button group.
- Button groups with text and icons, or just icons, **should** have text show in the overflow dropdown menu.

### Multiple Button Groups

- **Must** start with the group of primary actions followed by the group of secondary actions.
- **Should** be used when you want similar actions to be grouped together and separated from others.

### Checkbox Button Groups

- **Should** be used when a small list of options can be selected from, similar to the [Checkbox](https://guidance.clarity.design/1006) component.
- **Should** use option labels that are 1-3 short words.

### Radio Button Groups

- **Should** be used when selecting one option from a small list of options, similar to the [Radio](https://guidance.clarity.design/1021) component.
- **Should** use option labels that are 1-3 short words.

## Changelog

- **2024-10-21**: Initial guidance
