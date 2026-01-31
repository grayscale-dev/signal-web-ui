# signal-dropdown



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description                                    | Type                | Default  |
| --------------- | ----------------- | ---------------------------------------------- | ------------------- | -------- |
| `align`         | `align`           | Horizontal alignment of the menu.              | `"left" \| "right"` | `"left"` |
| `closeOnSelect` | `close-on-select` | Close menu when an item is selected.           | `boolean`           | `true`   |
| `items`         | --                | Items to render inside the menu.               | `DropdownItem[]`    | `[]`     |
| `label`         | `label`           | Button label when no custom trigger slot.      | `string`            | `"Menu"` |
| `open`          | `open`            | Controls open state. Two-way via `openChange`. | `boolean`           | `false`  |


## Events

| Event        | Description                     | Type                              |
| ------------ | ------------------------------- | --------------------------------- |
| `itemSelect` | Emits when an item is selected. | `CustomEvent<{ key: string; }>`   |
| `openChange` | Emits when open toggles.        | `CustomEvent<{ open: boolean; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
