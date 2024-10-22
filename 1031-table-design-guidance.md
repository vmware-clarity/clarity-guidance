---
category: component design guidance
state: draft
created: 2024-10-22
updated: 2024-10-22
---

# Table Component

[Table](https://clarity.design/documentation/table) is a component that use rows and columns to display information in a grid view.

## Guidance

- **Must** use the table component wherever you need to present static data in a tabular format.
- **Must** alternatively choose [datagrid](https://clarity.design/documentation/datagrid) for advanced features like sorting, filtering, pagination, or perform batch operations on the structured data.
- **Should** choose borderless table, when you want to present it in clean and minimalistic appearance.
- **Should** use compact tables when the vertical space is limited. This variant reduces the row height.
- **May** choose vertical tables when you do not need a header. Left most cells in the table can be a data or header cell.

## Changelog

- **2024-10-22**: Initial guidance
