# @signal-web-ui/angular

Angular wrappers for Signal UI web components.

## Install

```bash
pnpm add @signal-web-ui/angular @signal-web-ui/core
```

## Usage

```ts
import { defineCustomElements } from "@signal-web-ui/core/loader";
import { SignalWebUiModule } from "@signal-web-ui/angular";

defineCustomElements();
```

```ts
@NgModule({
  imports: [SignalWebUiModule]
})
export class AppModule {}
```

Notes:
- Add `CUSTOM_ELEMENTS_SCHEMA` if you do not import `SignalWebUiModule`.
- Use property bindings like `[options]` for arrays/objects.
- Listen to custom events like `(valueChange)` and `(openChange)`.
