# signal-slider

Single or range slider for numeric input.

## Usage
```html
<signal-slider value="50" min="0" max="100" step="1"></signal-slider>
```

## Props
- `value` number | [number, number]
- `min` number
- `max` number
- `step` number
- `mode` "single" | "range"
- `showValue` boolean
- `disabled` boolean

## Events
- `valueChange` → `{ value: number | [number, number] }`

## Slots
- default: not used
