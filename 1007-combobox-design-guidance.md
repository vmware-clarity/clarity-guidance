---
category: component design guidance
state: approved
created: 2024-10-30
updated: 2024-10-30
---

# Combobox Design Guidance

The [combobox](https://clarity.design/documentation/combobox) is a versatile component that combines a text input box with a drop-down list. Users can type text into the input field to filter and narrow down the predefined options available in the drop-down menu.

## Guidance

- Comboboxes **must** be used for lists with more than 10 options. This allows users to easily filter through the options by typing, improving usability and efficiency.
- Comboboxes **must** be used when search and filtering capabilities are needed. This allows users to quickly find specific options from a long list, improving accuracy in their selections and reducing the time spent searching.
- Comboboxes **must not** allow free text input outside of predefined list options to ensure valid selections and prevent data entry errors.
- Comboboxes **should** be used when selecting multiple items from a list. This allows users to easily filter and choose options while keeping the interface organized and user-friendly.
- Comboboxes **should** be used when data needs to be loaded asynchronously. This allows users to begin their selection while the options are being fetched, enhancing the overall user experience and reducing wait times.
- Comboboxes **should** be used when custom input is required or when there’s a need to display a richer user interface in the list. This enhances user interaction by allowing for both predefined options and unique entries, improving flexibility and functionality.

## Content Guidelines

- Option text in the combobox **must** be kept short and concise to improve readability. This helps users quickly scan and understand their choices, enhancing the overall user experience.
- Labels **should** be included for the combobox to ensure accessibility. This helps users understand the purpose of the input and supports those using assistive technologies.
- The length of the items in a combobox **should not** exceed the width of the text field. This ensures that all options are visible and prevents layout issues, maintaining a clean and user-friendly interface.

## Changelog

- **2024-10-30**: Initial guidance
