---
category: component developer guidance
state: approved
created: 2024-11-11
updated: 2024-11-11
---

# Stepper Design Guidance

The [stepper](https://clarity.design/documentation/stepper) is an accordion-like component that organizes multi-step processes into two or more expanding panels, helping to simplify complex workflows.

## Guidance

### Usage

- Steppers **must** be used when users need to see the forms in line with the rest of the page content, as this approach helps maintain context and flow, reducing cognitive load during multi-step processes.
- Steppers **must** be used when users require more detail than step titles to understand the process, as this provides necessary context and guidance for completing each step effectively.
- Steppers **must** be used when there are many steps with a small dataset in each step. For longer forms with fewer steps, use a [timeline](https://clarity.design/documentation/timeline) component to ensure clarity and organization in the workflow.
- Steppers **must** be used when users need the ability to navigate freely to other parts of the application during the workflow. If access to other parts of the application **should** be restricted while completing the workflow, use a [wizard](https://clarity.design/documentation/wizard) component instead.
- Steppers **should** be used when a preview or summary of each step is needed, as this provides users with context and clarity about what to expect throughout the process.
- - Steppers **should** be used when there are more than two steps, as this helps users navigate through the process more effectively and understand their progress.
- - Steppers **may** be used for complex and lengthy workflows that might not fit within one viewport, allowing users to manage the process in smaller, more digestible sections.

### Anatomy

- Overly long content **must not** be included in each step, as this can overwhelm users and make it difficult to focus on the task at hand. Each step **should** present information clearly and concisely.
- The stepper panel header **should** contain a title and a description for the step, providing users with clear context and guidance on what is required at that stage of the process.
-  **Don't** embed steppers within other steppers.

## Changelog

- **2024-11-11**: Initial guidance
