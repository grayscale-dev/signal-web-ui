# signal-radio-group

Radio group for selecting one option.

## Usage
```html
<signal-radio-group .options=${[{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }]} value="a"></signal-radio-group>
```

## Props
- `options` Array<{ label: string; value: string }>
- `value` string | undefined
- `name` string
- `disabled` boolean

## Events
- `valueChange` → `{ value: string | undefined }`

## Slots
- default: custom option rendering (optional)
