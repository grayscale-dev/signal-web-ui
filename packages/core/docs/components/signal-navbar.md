# signal-navbar

Top navigation bar with brand, items, and collapsed state support.

## Usage
```html
<signal-navbar .items=${[{ id: 'home', label: 'Home' }]} brand="Signal"></signal-navbar>
```

## Props
- `brand` string | markup
- `items` array `{ id, label, href?, icon?, children? }`
- `activeItem` string
- `collapsed` boolean
- `scrolled` boolean (allows styling when page is scrolled)

## Events
- `navigate` → `{ id: string }`

## Slots
- default: custom brand/content if supported.
