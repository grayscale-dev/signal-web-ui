# signal-page

Page scaffold for loading/empty/error states.

## Usage
```html
<signal-page heading="Dashboard" loading>
  <p>Content once loaded.</p>
</signal-page>
```

## Props
- `heading` string
- `description` string
- `loading` boolean
- `empty` boolean
- `error` boolean

## Events
None.

## Slots
- default: page content.
- `empty`, `error`, `loading` (if supported for custom states).
