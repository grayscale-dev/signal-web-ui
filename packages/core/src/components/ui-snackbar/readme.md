# signal-snackbar



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute      | Description | Type                                           | Default     |
| ---------------------- | -------------- | ----------- | ---------------------------------------------- | ----------- |
| `actionLabel`          | `action-label` |             | `string \| undefined`                          | `undefined` |
| `duration`             | `duration`     |             | `number`                                       | `4000`      |
| `message` _(required)_ | `message`      |             | `string`                                       | `undefined` |
| `open`                 | `open`         |             | `boolean`                                      | `true`      |
| `tone`                 | `tone`         |             | `"danger" \| "info" \| "success" \| "warning"` | `"info"`    |


## Events

| Event     | Description | Type                |
| --------- | ----------- | ------------------- |
| `action`  |             | `CustomEvent<void>` |
| `dismiss` |             | `CustomEvent<void>` |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"action"`  |             |
| `"close"`   |             |
| `"message"` |             |
| `"root"`    |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
