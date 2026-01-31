# signal-card

Card surface supporting headings, status, and interactive states.

## Usage
```html
<signal-card heading="Title" description="Details" interactive></signal-card>
```

## Props
- `heading` string
- `description` string
- `status` string
- `variant` string
- `padded` boolean
- `interactive` boolean
- `selected` boolean
- `disabled` boolean
- `loading` boolean
- `href` string (makes the card link-like)

## Events
None (click is native when interactive/href).

## Slots
- default: card body content.
- `media` (if component supports).
