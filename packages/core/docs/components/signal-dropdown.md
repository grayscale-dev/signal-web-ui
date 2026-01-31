# signal-dropdown

Accessible menu with keyboard navigation and selection events.

```html
<signal-dropdown
  label="Actions"
  align="right"
  .items=${[
    { key: 'edit', label: 'Edit' },
    { key: 'archive', label: 'Archive' },
    { key: 'delete', label: 'Delete', danger: true }
  ]}
></signal-dropdown>
```

## Props
- `open` boolean (two-way via `openChange`).
- `items` DropdownItem[] (`key`, `label`, optional `shortcut`, `disabled`, `danger`).
- `label` string: default trigger text.
- `align` "left" | "right".
- `closeOnSelect` boolean: default true.

## Events
- `openChange` → `{ open: boolean }`.
- `itemSelect` → `{ key: string }`.

## Slots
- `trigger`: custom trigger element. Menu content is generated from `items`.

## Accessibility
- `role="menu"`, arrow keys to move, Enter to select, Escape to close.
