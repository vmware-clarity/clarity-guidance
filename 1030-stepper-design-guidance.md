---
category: component design guidance
state: draft
created: 2024-10-16
updated: 2024-10-21
---

# Stepper Component

The [Stepper](https://clarity.design/documentation/stepper) is an extension of the base accordion component. It structures multi-step processes into two or more expanding panels that break up complex workflows.

## Guidance

### Stepper Usage

- **Must** use a stepper when you have complex and long work processes that may not fit in one viewport.
- **Must** use a stepper when users need to see the forms in-line with the rest of the page content.
- **Must** use a stepper when users need more detail than step titles to understand the process.
- **Must** use a stepper when you have many steps with small data set in each step. For longer forms with a fewer number of steps use a [Timeline](https://clarity.design/documentation/timeline) component.
- **Must** use a stepper when you need the capability to navigate freely to other parts of an application during the workflow. To block access to other parts of the application while completing the workflow use a [Wizard](https://clarity.design/documentation/wizard) component.
- **Should** use a stepper when you need a preview or summary of each step.
- **Should** use a stepper when you have more than two steps.

### Stepper Anatomy

- **Must** NOT have too long content in each step.
- Stepper panel header **should** contain a title and a description for the step.

## Changelog

- **2024-10-21**: Initial guidance
