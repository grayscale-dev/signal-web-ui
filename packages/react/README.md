# @signal-web-ui/react

React wrappers for Signal UI web components.

## Install

```bash
pnpm add @signal-web-ui/react @signal-web-ui/core
```

## Usage

```tsx
import { defineCustomElements } from "@signal-web-ui/core/loader";
import { SignalButton } from "@signal-web-ui/react";

defineCustomElements();

export function Example() {
  return <SignalButton onClick={() => console.log("clicked")}>Hello</SignalButton>;
}
```

Notes:
- Complex props (arrays/objects) are passed as properties.
- Custom events map to props like `onValueChange` and `onOpenChange`.
