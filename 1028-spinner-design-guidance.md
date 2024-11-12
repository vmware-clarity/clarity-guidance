---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Spinner Design Guidance

A [spinner](https://clarity.design/documentation/spinner) component visually indicates an ongoing, user-initiated process, signaling to users that the system is working and they should wait.

## Guidance

- Page spinners **must** be used to track the progress of operations that affect the entire page, ensuring users understand that the page is temporarily unavailable.
- Inline spinners **must** be used to track the progress of operations related to specific components, ensuring users know which part of the interface is being processed.
- Spinners **must** be placed where the user’s attention **should** be directed once the process is complete, ensuring a smooth transition and clear feedback.
- A brief status description (e.g., "Loading…") **should** be provided to give users context and clarity on ongoing processes.
- Progress bars **may** be used as an alternative to spinners, if more space is available.

## Changelog

- **2024-10-30**: Initial guidance
