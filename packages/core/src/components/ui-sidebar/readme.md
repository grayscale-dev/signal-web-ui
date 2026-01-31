# signal-sidebar



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type                  | Default        |
| ------------------ | ------------------- | ----------- | --------------------- | -------------- |
| `activeItem`       | `active-item`       |             | `string \| undefined` | `undefined`    |
| `collapsible`      | `collapsible`       |             | `boolean`             | `false`        |
| `defaultCollapsed` | `default-collapsed` |             | `boolean`             | `false`        |
| `heading`          | `title`             |             | `string`              | `"Navigation"` |
| `items`            | --                  |             | `SidebarNavItem[]`    | `[]`           |
| `searchable`       | `searchable`        |             | `boolean`             | `false`        |


## Events

| Event      | Description | Type                                   |
| ---------- | ----------- | -------------------------------------- |
| `navigate` |             | `CustomEvent<{ id: string; }>`         |
| `toggle`   |             | `CustomEvent<{ collapsed: boolean; }>` |


## Shadow Parts

| Part         | Description |
| ------------ | ----------- |
| `"collapse"` |             |
| `"footer"`   |             |
| `"header"`   |             |
| `"root"`     |             |
| `"search"`   |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
