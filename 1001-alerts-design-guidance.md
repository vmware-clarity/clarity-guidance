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

App-level alerts support only error, warning, and info statuses.

- **Must** be used exclusively for the global context of an application.
- **Must** be placed at the top of *all* content. 
- **Must not** be used to convey the success of an operation.
- Alerts for communicating operation success **must** appear in context or as a notification message.

### Standard Alerts

Standard alerts support error, warning, info, and success statuses.

- **May** use lightweight alerts in places where vertical space is scarce and information density is needed; otherwise, the default size **should** be used.
- **Must** be used for messages reflecting the context of the user in the application.


### Lightweight Alerts

- **Should** be used inside containers and other components and layouts.
- Use a success alert to deliver a static, persistent success message.
- Use an info alert to provide context-specific information to the user. Be cautious not to overuse or replace regular content.
- Use a warning alert for messages that require the user's attention or acknowledgment but might not cause errors.
- Use an error alert for errors, malfunctions, and critical issues, such as license expiration.
 
### Alert in Modals

- **Must not** use more than one alert within a modal.

### Alert in Cards

- **Must** use concise language within the alert.
- **Must** use compact alerts to avoid focusing attention solely on the alert.
- **Must** appear at the very top of the card to attract the user's attention.
- **Should not** use multiple alerts within the cards, as that distracts the user and dilutes the importance of the alert being displayed.

### Alert Group

- **Must** group the alerts by type (error, warning, info, and success) and show in order of urgency.

## Changelog

- **2024-10-21**: Initial guidance