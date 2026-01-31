# signal-popover

Floating content container anchored to a trigger.

```html
<signal-popover placement="bottom">
  <button slot="trigger">Open</button>
  <div slot="content">Popover body</div>
</signal-popover>
```

## Props
- `open` boolean: controlled state.
- `defaultOpen` boolean: uncontrolled initial state.
- `placement` "top" | "right" | "bottom" | "left" (default `bottom`).
- `dismissOnClickOutside` boolean (default true).
- `closeOnSelect` boolean (default true).

## Events
- `openChange` → `{ open: boolean }`.
- `close` → `void` when dismissed.

## Slots
- `trigger`: element that toggles the popover.
- `content` (or default): popover content.

## Notes
- Clicking inside triggers `close` when `closeOnSelect` is true.
- Uses Signal tokens for theming.
