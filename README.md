<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">

[<img src="https://img.shields.io/badge/Linkedin-kathesama-blue?style=for-the-badge&logo=linkedin">](https://www.linkedin.com/in/kathesama)
<br>
![IntellijIdea](https://img.shields.io/badge/Made%20for-IntellijIdea-1f425f.svg?style=for-the-badge)
![ReactJS](https://img.shields.io/badge/-ReactJS-blue?logo=react&logoColor=white&style=for-the-badge)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
<br>
[![GitHub issues](https://img.shields.io/github/issues/kathesama/react-typescript-prettier-eslint-with-husky?style=plastic)](https://github.com/kathesama/react-typescript-prettier-eslint-with-husky/issues)
[![GitHub forks](https://img.shields.io/github/forks/kathesama/react-typescript-prettier-eslint-with-husky?style=plastic)](https://github.com/kathesama/react-typescript-prettier-eslint-with-husky/network)
[![GitHub stars](https://img.shields.io/github/stars/kathesama/react-typescript-prettier-eslint-with-husky?style=plastic)](https://github.com/kathesama/react-typescript-prettier-eslint-with-husky/stargazers)
<br>
![GitHub last commit](https://img.shields.io/github/last-commit/kathesama/react-typescript-prettier-eslint-with-husky?color=red&style=plastic)
![GitHub version commits](https://img.shields.io/github/commits-since/kathesama/react-typescript-prettier-eslint-with-husky/V2.0.0.svg?color=yellow&style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/kathesama/react-typescript-prettier-eslint-with-husky?style=plastic)
<br>
![Maintaned](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=plastic)

[comment]: <> (![OWASP]&#40;https://img.shields.io/badge/OWASP%3F-yes-green.svg?style=plastic&#41;)

[comment]: <> (![CleanCode]&#40;https://img.shields.io/badge/CleanCode%3F-yes-green.svg?style=plastic&#41;)
[![GitHub license](https://img.shields.io/github/license/kathesama/react-typescript-prettier-eslint-with-husky?style=plastic)](https://github.com/kathesama/react-typescript-prettier-eslint-with-husky/blob/main/LICENSE)
![GitHub repo size](https://img.shields.io/github/repo-size/kathesama/react-typescript-prettier-eslint-with-husky?style=plastic)
<br>

# React TypeScript Template

Initial seed for a React project with TypeScript, Vite, ESLint, Prettier, Husky,
Redux Toolkit, React Router, Sass modules, and Testing Library.

## Requirements

- Node.js `^20.19.0 || ^22.13.0 || >=24.0.0`
- npm

## Setup

1. Clone this repo
   > git clone https://github.com/kathesama/react-typescript-prettier-eslint-with-husky.git
2. Run install
   > npm install
3. Run the dev server
   > npm start

## Available Scripts

- `npm start`: starts Vite in development mode.
- `npm run build`: type-checks and builds production assets into `dist/`.
- `npm run test:run`: runs tests once with Vitest.
- `npm test`: starts Vitest in watch mode.
- `npm run lint`: runs ESLint.
- `npm run prettier:check`: checks formatting.
- `npm run prettier:fix`: formats the project.

## Commit Message Format

This project uses Commitlint with Husky. Commit messages should use this format:

```text
correct format: <type>[scope]: <subject>

  type:
    feat     A new feature.
    docs     Documentation only changes.
    style    Changes that do not affect the meaning of the code
              (white-space, formatting, missing semi-colons, etc).
    refactor A code change that neither fixes a bug nor adds a feature.
    test     Adding missing tests or correcting existing ones.
    chore    Changes to the build process or auxiliary tools and
              libraries such as documentation generation.
    perf     A code change that improves performance.
    ci       Changes to your CI configuration files and scripts.
    build    Changes that affect the build system or external dependencies
              (example scopes: gulp, broccoli, npm).
    temp     Temporary commit that won't be included in your CHANGELOG.

  scope:
    Optional, can be anything specifying the scope of the commit change.
    For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc.
    In App Development, scope can be a page, a module or a component.

  subject:
    Brief summary of the change in present tense. Not capitalized. No period at the end.
```
