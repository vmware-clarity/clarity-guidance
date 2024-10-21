---
category: component design guidance
state: draft
created: 2024-10-21
updated: 2024-10-21
---

# Alert Design Guidance

The [Alert](https://clarity.design/documentation/alert) component implements banners that demand the user's attention for important messages.

## Guidance

### App Level Alerts

App Level Alerts support only `Error`, `Warning`, and `Info` statuses.

- **Must** be used exclusively for the global context of an application.
- **Must** be placed at the top of **all** content. 
- **Must** NOT be used to convey the success of an operation.
- Alerts for communicating operation success **must** appear in context or as a notification message.

### Standard Alerts

Standard Alerts support `Error`, `Warning`, `Info`, and `Success` statuses.

- **Must** use `Compact` alerts only in places where vertical space is scarce, and information density is needed; otherwise, the `default` size **should** be used.
- **Must** be used for messages reflecting the context of the user in the application.


### Lightweight Alerts

- **Should** be used inside containers and other components and layouts.
- Use a `Success` alert to deliver a static, persistent success message.
- Use an `Info` alert to provide context-specific information to the user. Be cautious not to overuse or replace regular content.
- Use a `Warning` alert for messages that require the user's attention or acknowledgment but might not cause errors.
- Use an `Error` alert for errors, malfunctions, and critical issues, such as license expiration.
 
### Alert in Modals

- **Must** NOT use more than one alert within a modal.

### Alert in Cards

- **Must** use concise language within the alert.
- **Must** use compact alerts to avoid focusing attention solely on the alert.
- **Must** appear at the very top of the card to attract the user's attention.
- **Should** NOT use multiple alerts within the cards, as that distracts the user and dilutes the importance of the alert being displayed.

### Alert Group

**Must** group the alerts by subtype (Error, Warning, Info, Success) and show in order of urgency.


## Changelog

- **2024-10-21**: Initial guidance