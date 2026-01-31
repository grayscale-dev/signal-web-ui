# signal-accessibility-helpers



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                              | Type                                    | Default     |
| -------------- | --------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------- | ----------- |
| `ariaLabels`   | --              | Optional aria labels bag (exposed for parity; not mutated in DOM).                                       | `string \| undefined`                   | `undefined` |
| `focusVisible` | `focus-visible` | Enable :focus-visible styling toggle (`data-focus-visible`).                                             | `boolean`                               | `true`      |
| `returnFocus`  | `return-focus`  | Return focus to the previously focused element when unmounted or when trapFocus is disabled.             | `boolean`                               | `false`     |
| `shortcutMap`  | --              | Keyboard shortcut map: `{ 'cmd+k': 'openCommandPalette' }`. Emits `shortcut` event with the matched key. | `undefined \| { [x: string]: string; }` | `undefined` |
| `trapFocus`    | `trap-focus`    | Trap focus inside the component subtree while mounted.                                                   | `boolean`                               | `false`     |


## Events

| Event      | Description | Type                              |
| ---------- | ----------- | --------------------------------- |
| `shortcut` |             | `CustomEvent<{ combo: string; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
