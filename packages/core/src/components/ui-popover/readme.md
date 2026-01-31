# signal-popover



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                  | Description                                           | Type                                     | Default    |
| ----------------------- | -------------------------- | ----------------------------------------------------- | ---------------------------------------- | ---------- |
| `closeOnSelect`         | `close-on-select`          | Auto-close when selecting an item inside the popover. | `boolean`                                | `true`     |
| `defaultOpen`           | `default-open`             | Start open by default when uncontrolled.              | `boolean`                                | `false`    |
| `dismissOnClickOutside` | `dismiss-on-click-outside` | Close when clicking outside.                          | `boolean`                                | `true`     |
| `open`                  | `open`                     | Control open state (for controlled usage).            | `boolean`                                | `false`    |
| `placement`             | `placement`                | Placement relative to the trigger.                    | `"bottom" \| "left" \| "right" \| "top"` | `"bottom"` |


## Events

| Event        | Description | Type                              |
| ------------ | ----------- | --------------------------------- |
| `close`      |             | `CustomEvent<void>`               |
| `openChange` |             | `CustomEvent<{ open: boolean; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
