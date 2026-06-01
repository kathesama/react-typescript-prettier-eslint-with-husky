<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">

[<img src="https://img.shields.io/badge/Linkedin-kathesama-blue?style=for-the-badge&logo=linkedin">](https://www.linkedin.com/in/kathesama)
<br>
![IntellijIdea](https://img.shields.io/badge/Made%20for-IntellijIdea-1f425f.svg?style=for-the-badge)
![ReactJS](https://img.shields.io/badge/-ReactJS-blue?logo=react&logoColor=white&style=for-the-badge)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![PWA Ready](https://img.shields.io/badge/PWA-ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Docker Ready](https://img.shields.io/badge/Docker-ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
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
Redux Toolkit, React Router, Sass modules, Testing Library, and a PWA-ready
setup. The production build is Docker-ready and served with Nginx.

## Requirements

- Node.js `^20.19.0 || ^22.13.0 || >=24.0.0`
- npm
- Docker, optional for containerized production builds

## Setup

1. Clone this repo
   > git clone https://github.com/kathesama/react-typescript-prettier-eslint-with-husky.git
2. Run install
   > npm install
3. Run the dev server
   > npm start

## Available Scripts

- `npm start`: starts Vite in development mode. PWA features are disabled in
  this mode.
- `npm run build`: type-checks and builds production assets into `dist/`.
- `npm run preview`: serves the production build locally with the generated PWA
  assets.
- `npm run test:run`: runs tests once with Vitest.
- `npm test`: starts Vitest in watch mode.
- `npm run lint`: runs ESLint.
- `npm run prettier:check`: checks formatting.
- `npm run prettier:fix`: formats the project.
- `npm run docker:build`: builds the production Docker image.
- `npm run docker:run`: runs the production Docker image on port `8080`.

## PWA Ready

This template includes a production-only PWA setup using `vite-plugin-pwa`.
The build generates a web app manifest and service worker with auto-update
registration and static asset precaching.

PWA features are not enabled when running `npm start` or `npm run dev`. This
keeps development free from service worker cache issues. The PWA output is
generated only when running `npm run build` and can be tested locally with
`npm run preview`.

Runtime API caching is intentionally not configured. Add app-specific Workbox
runtime caching only after defining the API and offline strategy for the
project.

For mobile, the production build can be installed from supported mobile browsers
as a PWA. If the project needs native app store packaging later, wrap the built
web app with a tool such as Capacitor or a Trusted Web Activity.

To test the PWA build locally:

```bash
npm run build
npm run preview
```

## Docker

This template includes a production Docker setup. The Docker image builds the
Vite app with `npm ci` and serves the generated `dist/` folder with Nginx.

PWA assets are generated during the Docker build because the container runs
`npm run build`. The Nginx config keeps `index.html`, `manifest.json`, `sw.js`,
and `registerSW.js` uncached while allowing long-term caching for fingerprinted
static assets under `/assets/`.

Build and run with npm scripts:

```bash
npm run docker:build
npm run docker:run
```

Or use Docker Compose:

```bash
docker compose up --build
```

Then open `http://localhost:8080`.

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
