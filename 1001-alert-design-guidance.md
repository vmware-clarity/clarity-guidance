---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-11-20
---

# Alert Design Guidance

The [alert](https://clarity.design/documentation/alert) component displays banners that demand the user's attention for important messages.

## Guidance

### App-Level Alerts

App-level alerts support only error, warning, and info statuses. This ensures that users can quickly understand the nature of the message and take appropriate action.

- App-level alerts **must** be used exclusively for global application context, maintaining clarity and preventing confusion with local alerts.
- Alerts **must** be placed at the top of all content to ensure they are immediately visible to users.
- Alerts **must not** be used to confirm successful operations, as this reduces their effectiveness for critical information.
- Success alerts **must** appear in-context or as notification messages, providing clear and immediate feedback on user actions.

### Standard Alerts

Standard alerts support error, warning, info, and success statuses.

- Alerts **should** be used inside containers and other components to maintain a cohesive layout and ensure that important messages are contextually relevant and easily accessible to users.
- Success alerts **must** be used to deliver a static, persistent success message. This provides immediate feedback on the completion of an action, helping users understand that their task was successful.
- Info alerts **must** used to provide context-specific information to the user. This helps clarify actions or statuses without overwhelming the user with too much information, ensuring they remain focused on their tasks. However, it’s important to avoid overusing info alerts or replacing essential content with them, as this could lead to confusion or distraction.
- Warning alerts **must** used for messages that require the user's attention or acknowledgment but might not cause errors. This ensures that users are appropriately notified of important information that could affect their actions without implying a critical failure.
- Error alerts **must** be used for errors, malfunctions, and critical issues, such as license expiration. This helps users immediately recognize serious problems that require urgent attention, ensuring that they can take necessary actions to resolve these issues promptly.

### Lightweight Alerts

- Lightweight alerts **may** be used in places where vertical space is scarce and information density is needed; otherwise, the default size **should** be used.
- Alerts **must** reflect the user's context within the application, enabling users to quickly understand the message's relevance and take appropriate action.

### Alert in Modals

- More than one alert **must not** be used within a modal. Having multiple alerts can overwhelm users and dilute the message's urgency, making it harder for them to focus on the most critical information.

### Alert in Cards

- Concise language **must** be used within the alert. This helps ensure that users can quickly understand the message without unnecessary cognitive load.
- Compact alerts **must** be used to avoid focusing attention solely on the alert. This approach helps maintain user focus on the primary content while still providing necessary information without overwhelming the interface.
- Alerts **must** be placed at the very top of the card to attract the user's attention. This positioning ensures that users see critical messages immediately, reducing the risk of overlooking important information.
- Multiple alerts within cards **should** be avoided, as this distracts the user and dilutes the importance of the alert being displayed. Keeping the alert singular maintains focus on the critical message, ensuring users can easily understand the most relevant information without confusion.

### Alert Group

- Alerts **must** be grouped by type (error, warning, info, and success) and display them in order of urgency. This approach helps users quickly identify the most critical issues that need their attention, facilitating more effective decision-making.

## Changelog

- **2024-10-30**: Initial guidance
