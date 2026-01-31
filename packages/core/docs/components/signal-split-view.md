# signal-split-view

Resizable split panes for layouts.

## Usage
```html
<signal-split-view .panes=${[{ id: 'a', content: 'Left' }, { id: 'b', content: 'Right' }]}></signal-split-view>
```

## Props
- `panes` array of pane configs
- `orientation` "horizontal" | "vertical"
- `defaultSizes` number[]
- `minSizes` number[]
- `collapsible` boolean

## Events
- `sizesChange` → `{ sizes: number[] }`

## Slots
- default: pane content if provided via slots instead of props.
