---
category: component design guidance
state: draft
created: 2024-10-17
updated: 2024-10-21
---

# Wizard Component

A [Wizard](https://clarity.design/documentation/wizard) is a component that guides the user through a set of predefined steps. Wizards can help users focus on only the input needed for each step and decrease the chance of errors.

## Guidance

### Wizard Usage

- **Must** use a wizard to help users walk through a defined step-by-step process.
- **Must** use a wizard when the content is self-sufficient (no need to access other parts of the app) since it blocks access to other parts of the application that are necessary for completing the process.
- **Must** have at least two steps in your wizard. 
- **Must** NOT have long or complex content in each step of the Wizard.
- **Must** NOT use a wizard with an additional modal, as context will be lost. It also blocks accessibility for keyboard users.
- **Must** NOT use a wizard when the user needs to leave halfway in-between the workflow and resume.

### Wizard Anatomy

- The wizard title **must** describe the overall workflow.
- The content title **must** be similar to its step title.
- The content **must** be concise and provide a clear explanation of the task or information that the user should focus on.

## Changelog

- **2024-10-21**: Initial guidance
