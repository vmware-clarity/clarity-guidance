---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-22
---

# Button Group Component

The [button group](https://clarity.design/documentation/button-group) component is used to create collections of similar type of action buttons.

## Guidance

Button groups follow normal [button](https://guidance.clarity.design/1003) design guidelines. All button options regarding classes and sizes apply to button groups.

### Button Group Types

- **Must** use `solid` button groups to direct the user's attention to the primary actions the application is suggesting the user take.
- **Must** use `outline` button groups to indicate a set of secondary actions or to reduce the visual noise on a page.
- **Must** use `flat` button groups for a set of tertiary actions.
- **Should** use `flat` button groups in cards and above datagrid components.
- **May** use `solid`, `outline` and `flat` buttons in normal (default) and small (compact) sizes.

### Button Group Arrangement

- **Must** arrange primary actions on the left, followed by secondary actions, and warning actions as the last button in a group.
- **Must not** mix differently styled buttons together, such as solid and outlined.

### Icon Button Group

- **Must** use 'icon button groups' in their normal size (36px). This makes them easier to recognize and to click.
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

- **Should** be used when a small list of options can be selected from, similar to the [checkbox](https://guidance.clarity.design/1006) component.
- **Should** use option labels that are 1-3 short words.

### Radio Button Groups

- **Should** be used when selecting one option from a small list of options, similar to the [radio](https://guidance.clarity.design/1021) component.
- **Should** use option labels that are 1-3 short words.

## Changelog

- **2024-10-22**: Initial guidance
