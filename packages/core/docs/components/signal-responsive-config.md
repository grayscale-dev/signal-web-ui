# signal-responsive-config

Provides breakpoint and z-index scales as CSS custom properties for any nested content.

## Usage
```html
<signal-responsive-config
  .breakpoints=${{ sm: 640, md: 768, lg: 1024 }}
  .zIndexScale=${{ overlay: 1000, toast: 1100 }}
>
  <!-- children that read CSS vars -->
</signal-responsive-config>
```

## Props
- `breakpoints` Record<string, number>: creates `--bp-{key}` variables (px values).
- `zIndexScale` Record<string, number>: creates `--z-{key}` variables.
- `hostClass` string: forwarded to the inner wrapper.

## Events
None.

## Slots
- default: content.
