# signal-drawer



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                            | Type                                     | Default     |
| ------------------- | --------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------- | ----------- |
| `defaultSnap`       | `default-snap`        | Fallback snap point when `snapPoints` provided but empty.                              | `number`                                 | `0.5`       |
| `description`       | `description`         | Optional description text.                                                             | `string \| undefined`                    | `undefined` |
| `dismissOnBackdrop` | `dismiss-on-backdrop` | Allow closing when clicking the backdrop.                                              | `boolean`                                | `true`      |
| `dismissible`       | `dismissible`         | Disable closing entirely when set to false.                                            | `boolean`                                | `true`      |
| `heading`           | `heading`             | Optional heading text.                                                                 | `string \| undefined`                    | `undefined` |
| `open`              | `open`                | Controls open/closed state. Can be two-way bound via `openChange`.                     | `boolean`                                | `false`     |
| `side`              | `side`                | Which edge the drawer should attach to.                                                | `"bottom" \| "left" \| "right" \| "top"` | `"right"`   |
| `size`              | `size`                | Width (for left/right) or height (for top/bottom). Numbers are treated as px.          | `number \| string`                       | `420`       |
| `snapPoints`        | --                    | Snap points for top/bottom drawers (values between 0 and 1 represent viewport height). | `number[] \| undefined`                  | `undefined` |


## Events

| Event        | Description                         | Type                              |
| ------------ | ----------------------------------- | --------------------------------- |
| `close`      | Fired when the drawer is dismissed. | `CustomEvent<void>`               |
| `openChange` | Fires whenever open state changes.  | `CustomEvent<{ open: boolean; }>` |


## Shadow Parts

| Part         | Description |
| ------------ | ----------- |
| `"backdrop"` |             |
| `"panel"`    |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
