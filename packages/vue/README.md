# @signal-web-ui/vue

Vue wrappers for Signal UI web components.

## Install

```bash
pnpm add @signal-web-ui/vue @signal-web-ui/core
```

## Usage

```ts
import { defineCustomElements } from "@signal-web-ui/core/loader";

defineCustomElements();
```

```vue
<template>
  <SignalButton @click="onClick">Hello</SignalButton>
</template>
```

Notes:
- Bind complex props with `:prop` to set properties.
- Listen to custom events like `@valueChange` and `@openChange`.
