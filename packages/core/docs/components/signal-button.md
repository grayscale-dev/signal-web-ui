---
title: Signal Button
component: signal-button
package: @signal-web-ui/core
---

# signal-button

A styled button component with variants, sizes, and optional icon slots. Renders a native `<button>` element in Shadow DOM.

## Usage

```html
<signal-button variant="primary" size="md">Submit</signal-button>
```

## Props

- `variant`: `"primary" | "secondary" | "ghost" | "subtle" | "danger"` (default: `"primary"`)
- `size`: `"sm" | "md" | "lg"` (default: `"md"`)
- `loading`: `boolean` (default: `false`) — disables the button and shows a spinner
- `disabled`: `boolean` (default: `false`)
- `type`: `"button" | "submit" | "reset"` (default: `"button"`)

## Events

- Native `click` event from the internal `<button>` element.

## Slots

- default: button label
- `icon-left`: optional leading icon
- `icon-right`: optional trailing icon

## CSS Parts

- `button`, `label`, `icon-left`, `icon-right`, `spinner`

## Notes

- `loading` sets `aria-busy="true"` and disables the button.
- Icons are hidden unless content is provided in the corresponding slot.
