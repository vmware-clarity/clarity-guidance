---
category: component developer guidance
state: approved
created: 2024-11-07
updated: 2024-11-08
---

# Card Developer Guidance

[Cards](https://clarity.design/documentation/card) are containers that group related content and actions together, providing a cohesive way to present information in a visually appealing format.

## Guidance

Clarity provides clickable cards and information cards.

### Usage

- **Must** use a card to present high-level information and guide users toward related actions and details. This facilitates quick understanding and encourages user engagement with the content.
- **Must** use clickable cards when a card is intended to initiate an action. This clearly indicates to users that the card is interactive and provides a pathway to further engagement. Add the `.clickable` class to make the entire card clickable.
- **Must** align multiple cards in a [grid](https://clarity.design/documentation/grid) or a CSS column layout. This layout facilitates easy scanning of content, improving organization and enhancing user navigation through the information.
- Cards **may** contain [Alerts](https://clarity.design/documentation/alert), use small alerts positioned at the top of the card.
- Cards **may** contain unordered, ordered and unstyled [lists](https://clarity.design/documentation/list).
- Cards **may** contain list groups.
- Cards **may** contain [progress bars](https://clarity.design/documentation/progress), which can be positioned at the very top of the card ,above the header or at the top of the card's footer, above buttons.

### Card Footer

- The footer **must** contain a maximum of two action buttons, a primary action and a single additional (secondary) action, both left-aligned. This layout helps to prioritize the main action while still offering users an alternative option if needed.
- **Must** use a dropdown menu for more than two actions in the card footer. This approach keeps the interface clean and organized, allowing users to access multiple actions without cluttering the card.

### CSS Classes

- A `.card` **may** contain a `.card-header`, `.card-footer`, and one or more `.card-blocks`.
- An image **may** be added anywhere in the card or occupy the entire card with the `.card-img` class.
- A card **may** contain a card media block, use a `.card-media-block` class, which combines a `.card-media-image` and `.card-media-description`. The description can contain a `.card-media-title` and a `.card-media-text`.

### Style

- The card title **should** be in 20px Metropolis Medium and content in 14px Metropolis Regular. This maintains a clear visual hierarchy and improves readability, helping users navigate the card content more effectively.

### Accessibility

- Clickable cards **must** not contain any clickable elements.
- Information card footers **must** contain only buttons or button groups.
- **Must** not nest a card within another card. This practice can lead to confusion and clutter, making it difficult for users to navigate and understand the content hierarchy.
- The card header **should** include only a concise title with no clickable elements.

## Changelog

- **2024-11-08**: Initial guidance
