# signal-sidebar

Navigation sidebar with collapsible groups and search support.

## Usage
```html
<signal-sidebar .items=${[{ id: 'home', label: 'Home' }]}></signal-sidebar>
```

## Props
- `items` array of nav items (id, label, children?, icon?)
- `heading` string
- `searchable` boolean
- `collapsible` boolean
- `defaultCollapsed` boolean
- `activeItem` string

## Events
- `navigate` → `{ id: string }`
- `toggle` → `{ collapsed: boolean }`

## Slots
- default: custom header/footer via named slots if implemented in component.
