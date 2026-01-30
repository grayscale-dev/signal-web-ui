# Release checklist

## Pre-flight
- Confirm versions for all publishable packages in `packages/*/package.json`.
- Run a clean install: `pnpm install`.
- Run `pnpm build` and `pnpm test`.
- Ensure `packages/core/dist/signal-web-ui/` contains both `signal-web-ui.esm.js` and `signal-web-ui.js`.

## Publish order
1) `@signal-web-ui/design-tokens` (if publishing)
2) `@signal-web-ui/core`
3) Wrappers: `@signal-web-ui/react`, `@signal-web-ui/vue`, `@signal-web-ui/angular`, `@signal-web-ui/ember`
4) Tooling packages (if publishing): `@signal-web-ui/tsconfig`, `@signal-web-ui/eslint-config`

## Publish commands (pnpm)
- From repo root: `pnpm -r publish --access public --tag latest`
- If doing a dry run: `pnpm -r publish --access public --tag latest --dry-run`

## Post-publish
- Verify CDN assets on unpkg/jsDelivr.
- Smoke test loader:
  - `import { defineCustomElements } from "@signal-web-ui/core/loader"; defineCustomElements();`
- Smoke test wrappers in a demo app.
