---
category: component design guidance
state: draft
created: 2024-10-21
updated: 2024-10-21
---

# Alert Design Guidance

The [alert](https://clarity.design/documentation/alert) component displays banners that demand the user's attention for important messages.

## Guidance

### App-Level Alerts

App-level alerts support only error, warning, and info statuses. This ensures that users can quickly understand the nature of the message and take appropriate action.

- Design teams must use app-level alerts exclusively for the global context of an application to maintain clarity and prevent confusion with local alerts.
- Design teams **must** place alerts at the top of all content to ensure they are immediately visible to users. 
- Design teams **must not** use alerts to convey the success of an operation, as this can dilute their effectiveness in communicating important information.
- Design teams **must** ensure that alerts for communicating operation success appear in context or as notification messages to provide clear and immediate feedback to users regarding their actions.

### Standard Alerts

Standard alerts support error, warning, info, and success statuses.

- Design teams **may** use lightweight alerts in places where vertical space is scarce and information density is needed; otherwise, the default size should be used.
- Design Teams **must** ensure that alerts reflect the user's context within the application, as this helps users quickly understand the relevance of the message and take appropriate action.

### Lightweight Alerts

- Design Teams **should** use alerts inside containers and other components to maintain a cohesive layout and ensure that important messages are contextually relevant and easily accessible to users.
- Design teams **must** use a success alert to deliver a static, persistent success message. This provides immediate feedback on the completion of an action, helping users understand that their task was successful.
- Design teams **must** use an info alert to provide context-specific information to the user. This helps clarify actions or statuses without overwhelming the user with too much information, ensuring they remain focused on their tasks. However, it’s important to avoid overusing info alerts or replacing essential content with them, as this could lead to confusion or distraction.
- Design teams **must** use a warning alert for messages that require the user's attention or acknowledgment but might not cause errors. This ensures that users are appropriately notified of important information that could affect their actions without implying a critical failure.
- Design teams **must** use an error alert for errors, malfunctions, and critical issues, such as license expiration. This helps users immediately recognize serious problems that require urgent attention, ensuring that they can take necessary actions to resolve these issues promptly.
 
### Alert in Modals

- Design teams **must not** use more than one alert within a modal. Having multiple alerts can overwhelm users and dilute the message's urgency, making it harder for them to focus on the most critical information.

### Alert in Cards

- Design teams **must** use concise language within the alert. This helps ensure that users can quickly understand the message without unnecessary cognitive load.
- Design teams **must** use compact alerts to avoid focusing attention solely on the alert. This approach helps maintain user focus on the primary content while still providing necessary information without overwhelming the interface.
- Design teams **must** place alerts at the very top of the card to attract the user's attention. This positioning ensures that users see critical messages immediately, reducing the risk of overlooking important information.
- Design teams **should** avoid using multiple alerts within cards, as this distracts the user and dilutes the importance of the alert being displayed. Keeping the alert singular maintains focus on the critical message, ensuring users can easily understand the most relevant information without confusion.

### Alert Group

- Design teams **must** group alerts by type (error, warning, info, and success) and display them in order of urgency. This approach helps users quickly identify the most critical issues that need their attention, facilitating more effective decision-making.

## Changelog

- **2024-10-21**: Initial guidance