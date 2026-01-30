---
title: Signal Table
component: signal-table
package: @signal-web-ui/core
---

# signal-table

A data table with optional search, filters, and row reordering.

## Usage

```html
<signal-table id="table"></signal-table>
<script type="module">
  const table = document.querySelector('#table');
  table.columns = [
    { key: 'name', header: 'Name' },
    { key: 'role', header: 'Role' }
  ];
  table.rows = [
    { id: '1', name: 'Ada', role: 'Engineer' },
    { id: '2', name: 'Grace', role: 'Manager' }
  ];
</script>
```

## Props

- `columns`: `TableColumn[]` (default: `[]`)
- `rows`: `Record<string, unknown>[]` (default: `[]`)
- `caption`: `string` (optional)
- `rowKey`: `string` (optional)
- `searchable`: `boolean` (default: `false`)
- `filterable`: `boolean` (default: `false`)
- `reorderable`: `boolean` (default: `false`)
- `loading`: `boolean` (default: `false`)
- `emptyText`: `string` (default: `"No results"`)
- `filters`: `TableFilter[]` (default: `[]`)

### TableColumn

```ts
{ key: string; header: string; align?: "left" | "center" | "right"; render?: (row) => string; }
```

### TableFilter

```ts
{ key: string; label: string; options: { value: string; label: string }[]; value?: string; }
```

## Events

- `rowClick`: `{ row: Record<string, unknown> }`
- `reorder`: `{ rows: Record<string, unknown>[] }`
- `searchChange`: `{ query: string }`
- `filterChange`: `{ filters: Record<string, string> }`

## Slots

- `filters`: custom filter UI block in the toolbar
- `empty`: custom empty state content

## CSS Parts

- `container`, `toolbar`, `search`, `filters`, `filter`, `filter-select`, `table-wrapper`, `table`, `caption`, `head-row`, `head-cell`, `row`, `cell`, `reorder-up`, `reorder-down`

## Notes

- Filtering is applied on the current `rows` in memory.
- `rowKey` controls stable row identity for events and rendering.
