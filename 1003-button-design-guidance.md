---
category: component design guidance
state: draft
created: 2024-10-15
updated: 2024-10-18
---

# Button Component

[Button](https://clarity.design/documentation/button) component allows users to trigger actions or events with a single click.

## Guidance

Clarity supports `Solid`, `Outline` and `Flat` buttons. They are provided to give visual distinction between the priority or hierarchy of the buttons in the application.

### Button Types

- **Must** use `Solid` buttons for the primary action that the application is suggesting that the user take.
- **Must** use `Outline` buttons to indicate a secondary action that complements a primary action.
- **Should** use `Outline`buttons to reduce visual noise when there are many actions of equal importance on the page.
- **Should** use `Flat` buttons when a user is expected to take an action within the page.
- **Should** use a link (or anchor element) in place of a Button to navigate the user to a different page.
- **Should** use a `Flat` button for some tertiary action in the page.
 
### Button Placement

- **Should** be positioned to help increase their visibility. Clarity follows [two distinct patterns](https://clarity.design/documentation/button#placement) : `Z Pattern` & `F Pattern`.

### Button Typography

- The text inside of buttons **must** always be uppercase, to distinguish buttons from the rest of the page content.
- **Should** not use more than three words inside a button to prevent the button text from wrapping to the next line.
- **Should** use descriptive language on buttons to help the user understand its intent.

### Button Size

Clarity offers two button sizes : `Default` and `Compact` 

- **Should** use `Compact` buttons where smaller buttons are needed to de-emphasize calls to action. Specially when multiple actions of equal importance are available.

### Button with Icons

- **Must** NOT use two icons in the same button.
- **Should** include text besides the icons that clearly indicates what the button will do.
- **Should** place icons to the left or right of the button text.
- **Should** use only an icon with no text, if you have space constraints on the page.
- Use Icons inside buttons to provide the call to action with a visual indicator.

### Button with Badges

- Badges **must** always appear to the right of the text in a left-to-right presentation.
- **Should** use badges inside buttons to indicate a known number of items associated with the action.

### Button Interactions & States

Buttons have built-in loading and disabled states. There are three sub-states within the loading state: `loading`, `error`, and `success`.

- **Must** use a `disabled` button when the action is unavailable or if the user task is incomplete.
- **Should** use a `loading` state to indicate that the application is working on the corresponding action.
- **Should** use an `error` state to indicate that the action has failed to complete.
- **Should** use a `success` state to indicate that the action has completed successfully.
- All three states (`loading`, `error`, and `success`) **should** prevent further execution of the call to action.

## Changelog

- **2024-10-21**: Initial guidance