---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-11-18
---

# Button Design Guidance

The [button](https://clarity.design/documentation/button) component enables users to trigger actions or events with a single click. Buttons are essential for enhancing interactivity within applications, providing clear pathways for user actions.

## Guidance

Clarity offers solid, outline, and flat buttons to create visual distinction among different button types based on their priority or hierarchy within the application. This variety helps users easily identify the most important actions and enhances overall usability.

### Button Types

- Solid buttons **must** be used for the primary actions that the application encourages users to take. This choice emphasizes the importance of the action and guides user attention effectively.
- Outline buttons **must** be used to represent secondary actions that support a primary action. This helps to establish a clear hierarchy between the actions, ensuring users can easily identify their options.
- Outline buttons **should** be used to minimize visual clutter when presenting multiple actions of equal importance on the page. This approach helps users focus on the actions without overwhelming them with bold visuals.
- Flat buttons **should** be used when the user is expected to perform an action within the page, as they provide a subtle visual cue that encourages interaction without dominating the design.
- Links (or anchor elements) **should** be used instead of a button to navigate the user to a different page, as this distinction helps clarify the action.
- Flat buttons **should** be used for tertiary actions on the page to maintain visual hierarchy, ensuring that these actions are clearly distinguished from primary and secondary actions.

### Button Placement

- Buttons **should** be positioned to enhance visibility, Clarity follows the [Z-pattern and F-pattern](https://clarity.design/documentation/button#placement) for effective placement. Use the Z-pattern in constrained containers, like modals, and the F-pattern for unconstrained content, such as forms on the main page.

### Button Typography

- Button text **should** be uppercase to distinguish it from other content, but keep in mind accessibility needs, as uppercase can be challenging for users with dyslexia or visual impairments.
- Button text **should** be concise, ideally three words or less, for visual clarity and increased usability.
- Buttons **should** use clear, descriptive language to convey their intent, helping users easily understand the associated action.

### Button Size

Clarity offers two button sizes : default and compact

- Compact buttons **should** be used when smaller buttons are needed to de-emphasize calls to action, especially when presenting multiple actions of equal importance. This helps maintain visual hierarchy and ensures that users can easily navigate their options without feeling overwhelmed.

### Button with Icons

- Two icons **must not** be used in the same button, as this can create confusion about the button's purpose and make it harder for users to understand the intended action.
- Text alongside the icons **should** be included to clearly indicate the button's function, as this enhances user understanding and accessibility.
- Icons **should** be placed in buttons according to context: typically to the left of the text for in-context actions, but on the right for actions that lead users away from the current page. Always prioritize descriptive text alongside icons to enhance clarity and ensure a consistent user experience.
- Icons **may** be used without text if space is limited, but they **must** ensure that an accessible name is provided and highlighted in the design.
- Icons **should** be used inside buttons to provide a visual indicator for the call to action.

### Button with Badges

- Badges within buttons **must** always appear to the right of the text in a left-to-right presentation.
- Badges within buttons **should** be used to display the number of associated items, providing users with quick and relevant information about the action.

### Button Interactions & States

Buttons have built-in loading and disabled states. There are three sub-states within the loading state: loading, error, and success.

- Buttons **should** utilize badges to display associated item counts, providing users with quick and relevant information about the action.
- Applications **should** display a loading state to indicate ongoing processing, keeping users informed that their request is being handled.
- Applications **should** display an error state when actions fail, informing users of unsuccessful requests and potential next steps.
- Applications **should** display a success state upon completing actions, providing clear feedback to users that their requests were processed successfully.
- Applications **should** display loading, error, and success (states) that prevent subsequent interactions, avoiding confusion and informing users of ongoing or completed processes.

### Disabled Buttons

- Disabled buttons **must** not trigger a tooltip because they are inactive and excluded from tab indexes making tooltips inaccessible to both mouse and keyboard users. A separate button (possibly with an info icon) *may* be placed next to the disabled button to trigger a tooltip.
- Applications **should** provide clear visual indicators of why a button is disabled, either through contextual information on the page or by using alternative design patterns that maintain interactivity.
- Designers **should** consider alternative ways to communicate why an action is unavailable, such as inline error messages or helper text near the relevant form fields or interactive elements.

## Changelog

- **2024-10-30**: Initial guidance
- **2024-11-18**: Guidelines for disabled buttons
