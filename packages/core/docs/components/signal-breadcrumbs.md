# signal-breadcrumbs

Breadcrumb navigation trail with truncation support.

## Usage
```html
<signal-breadcrumbs .items=${[{ id: 'home', label: 'Home' }, { id: 'page', label: 'Page' }]}></signal-breadcrumbs>
```

## Props
- `items` array `{ id, label, href? }`
- `maxItems` number (to collapse in the middle)

## Events
- `navigate` → `{ id: string }`

## Slots
- default: not used (items come from props).
