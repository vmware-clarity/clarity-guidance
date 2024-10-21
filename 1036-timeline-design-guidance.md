---
category: component design guidance
state: draft
created: 2024-10-17
updated: 2024-10-21
---

# Timeline Component

The [Timeline](https://clarity.design/documentation/timeline) component is a visual indicator that shows progress through a workflow. It can also guide the user through specific processes or pre-defined steps.

## Guidance

### Timeline Usage

- **Must** use a timeline when you need to break down a complex and long work processes into multiple concrete steps (more than two steps).
- **Must** use a timeline when you need to showcase a list of events that are relevant to the user in chronological order.
- **Must** use a timeline when users need to have an overview of a workflow, and where they are in the process.
- **Must** use a timeline when you need to display more complex content in each step.
- **Must** use a timeline when you need more space for longer forms with a fewer number of steps. For many steps with small data set in each step use [Stepper](https://clarity.design/documentation/stepper).

For more guidance on multi-step process workflows see [Multi-Step Workflow Pattern](https://clarity.design/documentation/multi-step-workflow).

### Timeline Layouts

There are two types of layouts, `horizontal` and `vertical`.

- **Must** use a `horizontal` layout when a workflow has three to five steps.
- **Must** use a `horizontal` layout when all steps can be displayed without wrapping.
- **Must** use a `vertical` layout when a workflow has more than five steps.
- **Must** use a `vertical` layout when timestamps are optional.

### Timeline States

- Each step in a timeline **must** have one of five visual states: `Step complete`, `Current step`, `Not started`, `Processing` and `Error`.
- **Must** use a spinner when loading or taking action i.e in the `Processing` state.
- **Must** disable buttons when loading or make buttons contextual for the loading state.
- **Should** display the error message under the error icon if needed in the `Error` state.
- **Should** NOT use tooltips to display error messages.

### Timeline Step

- **Should** use a step description to provide additional information and guidance to the user.

## Changelog

- **2024-10-21**: Initial guidance
