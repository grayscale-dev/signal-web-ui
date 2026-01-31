# signal-toast



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute      | Description | Type                                           | Default     |
| ---------------------- | -------------- | ----------- | ---------------------------------------------- | ----------- |
| `actionLabel`          | `action-label` |             | `string \| undefined`                          | `undefined` |
| `description`          | `description`  |             | `string \| undefined`                          | `undefined` |
| `dismissible`          | `dismissible`  |             | `boolean`                                      | `true`      |
| `duration`             | `duration`     |             | `number`                                       | `3200`      |
| `heading`              | `title`        |             | `string \| undefined`                          | `undefined` |
| `message` _(required)_ | `message`      |             | `string`                                       | `undefined` |
| `open`                 | `open`         |             | `boolean`                                      | `true`      |
| `tone`                 | `tone`         |             | `"danger" \| "info" \| "success" \| "warning"` | `"info"`    |


## Events

| Event     | Description | Type                |
| --------- | ----------- | ------------------- |
| `action`  |             | `CustomEvent<void>` |
| `dismiss` |             | `CustomEvent<void>` |


## Shadow Parts

| Part            | Description |
| --------------- | ----------- |
| `"action"`      |             |
| `"close"`       |             |
| `"description"` |             |
| `"message"`     |             |
| `"root"`        |             |
| `"title"`       |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
