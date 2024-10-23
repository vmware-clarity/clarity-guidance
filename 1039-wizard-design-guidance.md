---
category: component design guidance
state: draft
created: 2024-10-17
updated: 2024-10-22
---

# Wizard Design Guidance

The [wizard](https://clarity.design/documentation/wizard) component guides the user through a set of predefined steps. Wizards can help users focus on only the input needed for each step and decrease the chance of errors.

## Guidance

### Wizard Usage

- **Must** have at least two steps in your wizard. 
- **Must not** have long or complex content in each step of the wizard.
- **Must not** use a wizard with an additional modal as context will be lost. It also blocks accessibility for keyboard users.
- **Must not** use a wizard when the user needs to leave mid-workflow and resume later.
- **Should** use a wizard when the content is self-sufficient (no need to access other parts of the app) since it blocks access to other parts of the application that are necessary for completing the process.
- **May** use a wizard to help users walk through a defined step-by-step process.

### Wizard Anatomy

- The wizard title **must** describe the overall workflow.
- The content title **must** be similar to its step title.
- The content **must** be concise and provide a clear explanation of the task or information that the user should focus on.

## Changelog

- **2024-10-22**: Initial guidance
