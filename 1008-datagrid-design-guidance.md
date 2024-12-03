---
category: component design guidance
state: approved
created: 2024-10-22
updated: 2024-12-03
---

# Datalist Design Guidance

[Datagrid](https://clarity.design/documentation/datagrid) organizes large volumes of data in columns and rows allowing users to scan, compare, and perform other actions.

## Guidance

- Datagrids **must** contain structured, homogeneous content where each object has the same attributes.
- Datagrids **must** be used when users need to search, filter, or perform batch operations on structured data.
- Datagrids **must not** be used to display name/value pairs such as terms and definitions. Consider using a [stack view](https://clarity.design/documentation/stack-view) component instead.
- Datagrids **must not** use be nested within datagrid cells or expandable rows. Placing datagrid inside another datagrid impacts performance and increases complexity. A datagrid detail pane _may_ contain another datagrid.
- Datagrids **should** be used to present large volumes of data that doesn't fit on one page. For smaller amounts of data (10 to 20 lines), use a [table](https://clarity.design/documentation/table).
- **Should** use a [card](https://clarity.design/documentation/card) for datasets with a blend of text, images, and data visualizations, or content with mixed formatting.
- **Should** use `pagination` for large datasets, when the comparison of the datasets in different pages is not important and you would like the user to reach a specific page quickly by using the page navigation options (Either by entering the page number or clicking on the following links - Next, Prev, First, Last).
- **Should** use `infinte scroll` for large datasets, when the comparision of the datasets is important and you do not want the focus of the users to shift across the pages.
- The detail pane **should** be used to show additional details for a record. A detail pane allows you to show the full content of the record in a larger scrollable space.
- Expandable rows **may** be used when you have additional information for a row or row cells that do not need to be shown at all times.
- Expandable rows **may** replace the original row data with a customized view or layout that includes most or all of the original row data.
- Datagrid column headers **should** be short and concise. One or two words when possible to communicate the essence of what the column contains.
- The contents of datagrid cells or column headers **may** be as complex as you need them to be, with nested components and interpolation.

## Accessibility

- Infinite scroll is not ideal for keyboard users. You **should** provide a downloadable file for better accessibility.

## Changelog

- **2024-10-22**: Initial guidance
