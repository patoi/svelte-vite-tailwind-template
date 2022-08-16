# svelte-vite-tailwindcss-template

This is a fork and enhanced version of Lukem121/svelte-vite-tailwind-template

Extended with enhanced tooling:

- Stylelint
- ESLint
- Commitlint
- Prettier
- Husky/lint-staged
- .vscode/ directory with disabled VS Code CSS warning, and recommended extensions
- and pnpm!

**Recommended: Node.js v16**

Turn on pnpm:

`nvm install v16.16.0 && corepack enable && corepack prepare --activate pnpm@7.9.0 && pnpm -v`

On Windows (non-posix) use scipts: `pnpm --shell-emulator <script_name>`

[Node.js Version Manager (nvm) install](https://github.com/nvm-sh/nvm#installing-and-updating)

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
pnpm dlx degit patoi/svelte-vite-tailwind-template svelte-vite-tailwind-app
cd svelte-vite-tailwind-app
```

## Getting started

1. Starting with development mode:

```bash
cd svelte-vite-tailwind-app
pnpm install
pnpm dev
open http://localhost:5173/
```

2. Changing `src/App.svelte` class attributes, browser automatically updates page.
