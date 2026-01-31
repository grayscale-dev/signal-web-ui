# signal-snackbar

Transient notification bar.

## Props

- `message: string`
- `tone?: "info" | "success" | "warning" | "danger"` (default `"info"`)
- `duration?: number` (default `4000`)
- `actionLabel?: string`
- `open?: boolean`

## Events

- `action` — when action clicked
- `dismiss` — when closed/auto-dismissed
