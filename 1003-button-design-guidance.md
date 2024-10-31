---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Button Design Guidance

The [button](https://clarity.design/documentation/button) component enables users to trigger actions or events with a single click. Buttons are essential for enhancing interactivity within applications, providing clear pathways for user actions.

## Guidance

Clarity offers solid, outline, and flat buttons to create visual distinction among different button types based on their priority or hierarchy within the application. This variety helps users easily identify the most important actions and enhances overall usability.

### Button Types

- Design teams **must** use solid buttons for the primary actions that the application encourages users to take. This choice emphasizes the importance of the action and guides user attention effectively.
- Design teams **must** use outline buttons to represent secondary actions that support a primary action. This helps to establish a clear hierarchy between the actions, ensuring users can easily identify their options.
- Design teams **should** use outline buttons to minimize visual clutter when presenting multiple actions of equal importance on the page. This approach helps users focus on the actions without overwhelming them with bold visuals.
- Design teams **should** use flat buttons when the user is expected to perform an action within the page, as they provide a subtle visual cue that encourages interaction without dominating the design.
- Design teams **should** use a link (or anchor element) instead of a button to navigate the user to a different page, as this distinction helps clarify the action.
- Design teams **should** use a flat button for tertiary actions on the page to maintain visual hierarchy, ensuring that these actions are clearly distinguished from primary and secondary actions.

### Button Placement

- Design teams **should** position buttons to enhance visibility, Clarity follows the [Z-pattern and F-pattern](https://clarity.design/documentation/button#placement) for effective placement. Use the Z-pattern in constrained containers, like modals, and the F-pattern for unconstrained content, such as forms on the main page.

### Button Typography

- Design teams **should** ensure that the text inside buttons is always uppercase to clearly distinguish them from other content on the page. However, it’s important to remain flexible and consider accessibility needs, as some users, particularly those with dyslexia or visual impairments, may find uppercase text more challenging to read.
- Design teams **should not** use more than three words inside a button to prevent the text from wrapping to the next line, which can disrupt the button’s visual clarity and usability.
- Design teams **should** use descriptive language on buttons to clearly convey their intent, ensuring users can easily understand the action associated with the button.

### Button Size

Clarity offers two button sizes : default and compact

- Design teams **should** use compact buttons when smaller buttons are needed to de-emphasize calls to action, especially when presenting multiple actions of equal importance. This helps maintain visual hierarchy and ensures that users can easily navigate their options without feeling overwhelmed.

### Button with Icons

- Design teams **must not** use two icons in the same button, as this can create confusion about the button's purpose and make it harder for users to understand the intended action.
- Design teams **should** include text alongside the icons to clearly indicate the button's function, as this enhances user understanding and accessibility.
- Design teams **should** place icons in buttons according to context: typically to the left of the text for in-context actions, but on the right for actions that lead users away from the current page. Always prioritize descriptive text alongside icons to enhance clarity and ensure a consistent user experience.
- Design teams **may** use only an icon without text if space is limited, but they **must** ensure that an accessible name is provided and highlighted in the design.
- Design teams **should** use icons inside buttons to provide a visual indicator for the call to action.

### Button with Badges

- Design teams **must** ensure that badges within buttons always appear to the right of the text in a left-to-right presentation.
- Design teams **should** use badges within buttons to display the number of associated items, providing users with quick and relevant information about the action.

### Button Interactions & States

Buttons have built-in loading and disabled states. There are three sub-states within the loading state: loading, error, and success.

- Design teams **should** use badges within buttons to display the number of associated items, providing users with quick and relevant information about the action.
- Design teams **should** use a loading state to show that the application is processing the action, helping users understand that their request is being handled.
- Design teams **should** use an error state to indicate that an action has failed to complete, helping users understand that their request was not successful and may require further action.
- Design teams **should** use a success state to indicate that the action has completed successfully, providing clear feedback to users that their request was processed as expected.
- Design teams **should** ensure that all three states (loading, error, and success) prevent further execution of the call to action, thereby avoiding confusion and ensuring users are aware that their previous action is still being processed or has already been completed.

## Changelog

- **2024-10-30**: Initial guidance
