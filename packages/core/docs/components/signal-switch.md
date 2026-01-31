# signal-switch

Toggle switch with optional label and control id.

## Usage
```html
<signal-switch label="Enable feature" checked></signal-switch>
```

## Props
- `label` string
- `checked` boolean
- `disabled` boolean
- `loading` boolean
- `controlId` string

## Events
- `valueChange` → `{ checked: boolean }`

## Slots
- default: custom label content (optional)
