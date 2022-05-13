# mb-todo-list

A simple TODO list app

## Editor

VSCode usage preferred:

- `.vscode/extensions.json` has preffered plugins
- `.vscode/settings.json` hold the setting for the project (formatting on save, linting on change...)

## Tech Stack

- Framework - Next.js + Preact (more lightweight)
- Typescript
- Styling - CSS Modules (preprocessed via [PostCSS/PostCSS-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)) and [classnames](https://github.com/JedWatson/classnames)
- Animations - Pure CSS + [Framer Motion](https://www.framer.com/docs/)
- eslint + prettier
- [husky](https://github.com/typicode/husky) for git hooks interceptions:
  - [lint-staged](https://github.com/okonet/lint-staged) -> running linters and prettier against staged git files
  - [commitizen](https://github.com/commitizen/cz-cli) ([conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/))
- [Next bundle analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) for dependencie analysis

## Running locally

1. Clone the repository
2. Run `npm ci`
3. Dev mode: `npm run dev`
4. Production mode: `npm run build && npm run start`
5. The webpage will be available at `http://localhost:3000`

## Deployment

The webpage is live and available at: https://todo-filipjakov.vercel.app/. Just push to `main` (origin) to reflect new changes.

## Features

Tested on macOS 12.1 -> Desktop Safari v15.4, Firefox v100, Chrome v100, Mobile Chrome v100

- Requirements:

  - [x] every item in the list has a name and optional due date
  - [x] items can be marked as “done”
  - [x] implement undo/redo functionality. Every action (add, ~~edit~~, delete, mark as done…) should be undoable/redoable. This functionality has to be custom developed in full without using any library that might have this feature built-in. REMARK: missing edit functionality, just delete the todo and start over hehe
  - [x] add keyboard shortcut support for all actions. You can implement any key combination of your choice -> tested only on macos (cmd+z undo, cmd+shift+z redo)
  - [x] implement item reordering with drag ‘n’ drop
  - [x] item reordering should be undoable/redoable as well as other actions

- Additional features:
  - Light/dark OS preference (no toggle) 🌙
  - Mobile friendly & lightweight 🪶
  - TODO list reordering and animations 💫 (NOTE: seems like animations are at bit laggy/buggy for some desktop browser, but work as expected on mobile. The library authors (framer-motion) are working on it -> could be preact thing?)
  - List persisted across sesions 💾 (local storage)
  - Looks beautiful ✨

## Roadmap

- [] edit TODO entry
- [] dark mode toggle
- [] translations
- [] user login + user usermanagment -> store user preferences + todo entries in a database

## Badges

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@filipjakov](https://www.github.com/octokatherine)

## FAQ

#### Why is this app so awesome?

Guess we'll never know
