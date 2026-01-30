---
title: Signal Modal
component: signal-modal
package: @signal-web-ui/core
---

# signal-modal

A dialog/modal component with optional drag, resize, and confirm actions.

## Usage

```html
<signal-modal id="modal" heading="Details" open></signal-modal>
```

## Props

- `open`: `boolean` (default: `false`, mutable, reflected)
- `heading`: `string` (optional)
- `description`: `string` (optional)
- `size`: `"sm" | "md" | "lg"` (default: `"md"`)
- `closeOnBackdrop`: `boolean` (default: `true`)
- `closeOnEsc`: `boolean` (default: `true`)
- `dragEnabled`: `boolean` (default: `false`)
- `resizable`: `boolean` (default: `false`)
- `fullscreen`: `boolean` (default: `false`)
- `showHeaderControls`: `boolean` (default: `true`)
- `showConfirm`: `boolean` (default: `false`)
- `confirmText`: `string` (default: `"Confirm"`)
- `defaultSize`: `{ width: number; height: number }` (optional)
- `minSize`: `{ width: number; height: number }` (optional)
- `maxSize`: `{ width: number; height: number }` (optional)
- `defaultPosition`: `{ x: number; y: number }` (optional)

## Events

- `openChange`: `{ open: boolean }`
- `close`: `void`
- `confirm`: `void`

## Slots

- default: modal body
- `header`: custom header content (replaces default header)
- `footer`: footer content

## CSS Parts

- `overlay`, `backdrop`, `dialog`, `header`, `body`, `footer`, `resize-handle`

## Notes

- When `open` becomes `true`, the component traps focus and disables document body scrolling.
- When `dragEnabled` is true, the header becomes draggable (except buttons in the header).
