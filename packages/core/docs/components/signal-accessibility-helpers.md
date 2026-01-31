# signal-accessibility-helpers

Utility wrapper providing keyboard shortcuts, focus-visible toggle, and optional focus trap.

## Usage
```html
<signal-accessibility-helpers
  focus-visible
  trap-focus
  return-focus
  .shortcutMap=${{ "cmd+k": "palette", "shift+?": "help" }}
  onShortcut={(e) => console.log(e.detail.combo)}
>
  <!-- content -->
</signal-accessibility-helpers>
```

## Props
- `focusVisible` boolean (default `true`): sets `data-focus-visible` on `<html>`.
- `shortcutMap` Record<string, string>: map combos to identifiers; emits `shortcut`.
- `ariaLabels` Record<string, string>: reserved bag for parity.
- `trapFocus` boolean: trap focus within slotted content.
- `returnFocus` boolean: restore last active element when trap ends.

## Events
- `shortcut` → `{ combo: string }` when a configured shortcut is triggered.

## Slots
- default: content to render inside the helper container.
