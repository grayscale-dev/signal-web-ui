# signal-toast

Toast notification item.

## Props

- `tone?: "info" | "success" | "warning" | "danger"` (default `"info"`)
- `title?: string`
- `message: string`
- `description?: string`
- `actionLabel?: string`
- `dismissible?: boolean` (default `true`)
- `open?: boolean` (default `true`)
- `duration?: number` (default `3200`)

## Events

- `action` — when action clicked
- `dismiss` — when closed/auto-dismissed
