---
title: Signal Input
component: signal-input
package: @signal-web-ui/core
---

# signal-input

A text input field with optional prefix/suffix slots. Emits `valueInput` and `valueChange` custom events.

## Usage

```html
<signal-input placeholder="Search"></signal-input>
```

## Props

- `value`: `string` (default: `""`) — mutable; updates from user input and external changes
- `placeholder`: `string` (optional)
- `name`: `string` (optional)
- `type`: `string` (default: `"text"`)
- `disabled`: `boolean` (default: `false`)
- `readonly`: `boolean` (default: `false`)
- `required`: `boolean` (default: `false`)
- `inset`: `boolean` (default: `false`)
- `autocomplete`: `string` (optional)

## Events

- `valueInput`: `{ value: string }` — fired on input
- `valueChange`: `{ value: string }` — fired on change

## Slots

- `prefix`: optional leading content
- `suffix`: optional trailing content

## CSS Parts

- `field`, `input`, `prefix`, `suffix`

## Notes

- When `value` is updated externally, the internal input value is synchronized.
