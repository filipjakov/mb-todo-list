# mb-todo-list

A simple TODO list app

## Tech Stack

- Framework - Next.js + Preact (more lightweight)
- Typescript
- Styling - CSS Modules (preprocessed via [PostCSS/PostCSS-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)) and [classnames](https://github.com/JedWatson/classnames)
- Animations - Pure CSS + [React Transition Group](https://reactcommunity.org/react-transition-group/) (for mounting/unmounting)
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

- Light/dark OS preference (no toggle) 🌙
- Mobile friendly & lightweight 🪶
- TODO list animations 💫
- List persisted across sesions 💾
- Respects motion preferences 😵‍💫
- Looks beautiful all in all ✨

## Roadmap

- dark mode toggle
- edit individual TODO list entries
- reordering items
- user login + user usermanagment -> store user preferences + todo entries in a database

## Badges

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@filipjakov](https://www.github.com/octokatherine)

## FAQ

#### Why is this app so awesome?

Guess we'll never know
