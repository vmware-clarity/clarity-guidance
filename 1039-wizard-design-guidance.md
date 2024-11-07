---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Wizard Design Guidance

The [wizard](https://clarity.design/documentation/wizard) component guides users through a series of predefined steps. Wizards help users concentrate on the necessary input for each step, reducing the likelihood of errors.

## Guidance

- Wizards **must** have at least two steps to provide a meaningful guided experience for users.
- Wizards **must not** include long or complex content in each step, as this can overwhelm users and hinder their progress. Each step **should** be clear and concise.
- Wizards **must not** be used in conjunction with an additional modal, as this can lead to lost context and block accessibility for keyboard users. It’s important to maintain a clear and intuitive interface.
- Wizards **must not** be used when users need to leave mid-workflow and resume later, as this can disrupt their progress and lead to confusion. Instead, consider using a different structure that allows for saving progress.
- Wizards **should** be used when the content is self-sufficient and does not require access to other parts of the app, as wizards can block access to necessary areas for completing the process.
- Wizards **may** be used to guide users through a defined step-by-step process, helping to ensure clarity and improve user understanding.

## Content Guidelines

- Wizard titles **must** describe the overall workflow to provide users with clear context about the steps they are about to take.
- Content titles **must** be similar to its step title to maintain consistency and help users easily follow along with the workflow.
- Content **must** be concise and provide a clear explanation of the task or information that the user should focus on to avoid confusion and improve usability.

## Changelog

- **2024-10-30**: Initial guidance
