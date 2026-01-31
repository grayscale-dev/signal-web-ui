# signal-tabs



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute     | Description | Type                               | Default        |
| --------------- | ------------- | ----------- | ---------------------------------- | -------------- |
| `activeKey`     | `active-key`  |             | `string \| undefined`              | `undefined`    |
| `keepAlive`     | `keep-alive`  |             | `boolean`                          | `true`         |
| `lazy`          | `lazy`        |             | `boolean`                          | `false`        |
| `orientation`   | `orientation` |             | `"horizontal" \| "vertical"`       | `"horizontal"` |
| `tabs`          | --            |             | `TabItem[]`                        | `[]`           |
| `validationMap` | --            |             | `"invalid" \| "warning" \| string` | `{}`           |
| `value`         | `value`       |             | `string \| undefined`              | `undefined`    |
| `variant`       | `variant`     |             | `"steps" \| "tabs"`                | `"tabs"`       |


## Events

| Event         | Description | Type                              |
| ------------- | ----------- | --------------------------------- |
| `valueChange` |             | `CustomEvent<{ value: string; }>` |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"list"`    |             |
| `"panel"`   |             |
| `"panels"`  |             |
| `"root"`    |             |
| `"trigger"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
