---
category: component design guidance
state: approved
created: 2024-10-22
updated: 2024-10-24
---

# Datalist Design Guidance

[Datagrid](https://clarity.design/documentation/datagrid) organizes large volumes of data in columns and rows allowing users to scan, compare, and perform other actions.

## Guidance

- **Must** use a datagrid for structured, homogeneous content, where each object has the same attributes.
- **Must** use a datagrid when users need to search, filter, or perform batch operations on the structured data.
- **Must not** use to display name/value pairs such as terms and definitions. Consider using a [stack view](https://clarity.design/documentation/stack-view) component instead.
- **Must not** use nested datagrid. Placing data grid inside another datagrid impacts performance and increases complexity. **Must** use flat data structure for better performance.
- **Should** be used to present large volumes of data that doesn't fit on one page. For smaller amounts of data (10 to 20 lines), use a [table](https://clarity.design/documentation/table).
- **Should** use a [card](https://clarity.design/documentation/card) for datasets with a blend of text, images, and data visualizations, or content with mixed formatting.
- **Should** use `pagination` for large datasets, when the comparison of the datasets in different pages is not important and you would like the user to reach a specific page quickly by using the page navigation options (Either by entering the page number or clicking on the following links - Next, Prev, First, Last).
- **Should** use `infinte scroll` for large datasets, when the comparision of the datasets is important and you do not want the focus of the users to shift across the pages.
- **Should** use detail pane to show additional details for a record. A detail pane allows you to show the full content of the record in a larger scrollable space.
- **Should** use expandable rows when you have additional information for a row, or row cells that do not need to be shown at all times.
- **Should** use expandable rows to replace original row data with a customized view or layout that includes most or all of the original row data.
- **Should** use short headers, one or two words when possible to communicate the essence of what the table column contains.
- The contents of datagrid cells or column headers **may** be as complex as you need them to be, with nested components and interpolation.

## Accessibility

Infinite scroll is not ideal for keyboard users. You **should** consider providing a downloadable file for better accessibility.

## Changelog

- **2024-10-22**: Initial guidance
