# Setup

This repository is a Yarn 4 (Berry) monorepo using Corepack, Turborepo, TypeScript, Vitest, and Biome.

It is structured as a multi-package workspace:
- packages/easy
- packages/medium
- packages/hard

## Install dependencies

```bash
corepack enable
yarn install
```

## Run checks
```bash
# Run all tests (via Turborepo)
yarn test

# Type checking (all packages)
yarn typecheck

# Lint code (Biome via Turbo)
yarn lint
```

## Format code
```bash
# Format files
yarn format

# Auto-fix lint issues
yarn lint:fix
```

# Project scripts overview
|     Command    |           Description          |
|:--------------:|:------------------------------:|
| yarn test      | Run all Vitest tests via Turbo |
| yarn typecheck | Run TypeScript type checking   |
| yarn lint      | Check code style (Biome)       |
| yarn lint:fix  | Auto-fix lint issues           |
| yarn format    | Format code with Biome         |
