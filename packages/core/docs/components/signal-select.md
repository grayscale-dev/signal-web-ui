# signal-select

Select input for single value choice.

## Usage
```html
<signal-select .options=${[{ label: 'One', value: '1' }]} value="1"></signal-select>
```

## Props
- `options` Array<{ label: string; value: string }>
- `value` string | undefined
- `placeholder` string
- `disabled` boolean

## Events
- `valueChange` → `{ value: string | undefined }`

## Slots
- default: custom option rendering (optional)
