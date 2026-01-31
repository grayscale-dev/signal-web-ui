# signal-behavioral-primitives

Wrapper that manages scroll locking and focus restoration for overlays/modals.

## Usage
```html
<signal-behavioral-primitives lock-scroll restore-focus>
  <!-- modal content -->
</signal-behavioral-primitives>
```

## Props
- `enabled` boolean (default `true`).
- `lockScroll` boolean: toggles `document.body.style.overflow = 'hidden'` while mounted.
- `restoreFocus` boolean: captures active element on mount and restores it on disconnect.

## Events
None.

## Slots
- default: content.
