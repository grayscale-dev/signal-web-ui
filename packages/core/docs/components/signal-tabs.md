# signal-tabs

Tabs/steps component with validation states and lazy rendering.

## Usage
```html
<signal-tabs .tabs=${[{ key: 'one', label: 'One' }, { key: 'two', label: 'Two' }]} value="one"></signal-tabs>
```

## Props
- `tabs` array of tab configs `{ key, label, disabled?, badge?, status? }`
- `value` / `activeKey` string
- `variant` string (e.g., "underline", "pill")
- `orientation` "horizontal" | "vertical"
- `keepAlive` boolean
- `lazy` boolean
- `validationMap` Record<string, string | boolean>

## Events
- `valueChange` → `{ value: string }`

## Slots
- default: tab panels slotted by `slot="panel-{key}"` (if supported by implementation).
