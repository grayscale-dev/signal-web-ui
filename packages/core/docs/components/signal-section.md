# signal-section

Collapsible content section with heading/subtitle.

## Usage
```html
<signal-section heading="Details" collapsible default-collapsed>
  <p>Body</p>
</signal-section>
```

## Props
- `heading` string
- `subtitle` string
- `collapsible` boolean
- `defaultCollapsed` boolean
- `loading` boolean

## Events
None (collapse handled internally).

## Slots
- default: section body.
- `header` (if supported by component).
