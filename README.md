# Open Collective GraphQL API v2 Docs

Built with [Magidoc](https://magidoc.js.org/). The schema is fetched from `https://api.opencollective.com/graphql/v2` at build time, and custom pages live in `pages/`.

## Requirements

- Node 24.x (Magidoc 7 requires Node >= 22.13)
- pnpm (Magidoc also bundles its own pnpm to install the website template)

## Updating:

**Install dependencies**

```bash
pnpm install
```

**Updating the documentation**

```bash
pnpm build
```

**Previewing the documentation**

```bash
pnpm preview
```

**Developing the documentation with hot-reload**

```bash
pnpm dev
```

## Dependency overrides

`@magidoc/cli` pins a vulnerable `axios` version, so it is overridden to `^1.20.0`. Keep both definitions in sync:

- `overrides` in `package.json` (npm)
- `overrides` in `pnpm-workspace.yaml` (pnpm)

Both `package-lock.json` and `pnpm-lock.yaml` are committed, so regenerate both after changing dependencies.
