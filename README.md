<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">

[<img src="https://img.shields.io/badge/Linkedin-kathesama-blue?style=for-the-badge&logo=linkedin">](https://www.linkedin.com/in/kathesama)
<br>
![IntellijIdea](https://img.shields.io/badge/Made%20for-IntellijIdea-1f425f.svg?style=for-the-badge)
![ReactJS](https://img.shields.io/badge/-ReactJS-blue?logo=react&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-ready-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![RTK Query](https://img.shields.io/badge/RTK_Query-ready-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![PWA Ready](https://img.shields.io/badge/PWA-ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Docker Ready](https://img.shields.io/badge/Docker-ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-ready-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-ready-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-ready-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing_Library-ready-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)
![MSW](https://img.shields.io/badge/MSW-ready-FF6A33?style=for-the-badge)
![i18next](https://img.shields.io/badge/i18next-ready-26A69A?style=for-the-badge&logo=i18next&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-ready-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-ready-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![Husky](https://img.shields.io/badge/Husky-ready-42B883?style=for-the-badge)
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

Enterprise-ready modular monolith frontend starter for React projects with
TypeScript, Vite, React Router, Redux Toolkit, RTK Query, Redux Persist, Sass
modules, Vitest, React Testing Library, Playwright, MSW, Storybook, ESLint,
Prettier, Husky, i18n, Docker, and a production-only PWA setup.

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

## Architecture Patterns

This template uses a feature-oriented frontend architecture, similar to a
modular monolith on the frontend: one app, one build, one router, one store, and
feature modules with clear public entry points.

The template keeps the architecture generic and avoids app-specific UI kits or
domain documentation. The structure is prepared for product work without being
coupled to a specific business domain:

- `src/app`: application composition.
- `src/common/api`: shared RTK Query base API.
- `src/common/config`: shared configuration helpers.
- `src/common/hooks`: typed Redux hooks and reusable cross-feature hooks.
- `src/common/i18n`: i18next setup and bundled locale resources.
- `src/common/types`: shared TypeScript types.
- `src/common/utils`: shared pure utilities.
- `src/components`: shared reusable UI/layout components only.
- `src/router`: route constants and router configuration.
- `src/store`: configured Redux store, persistence, and app store types.
- `src/features`: product modules such as `auth`, `home`, `not-found`, and
  `user/session`.
- `src/mocks`: MSW handlers for local development and tests.
- `tests/e2e`: Playwright browser tests.

Feature modules expose their public surface through `index.ts`. App-level code
should import from the feature barrel, for example `@/features/home`, instead
of reaching into feature internals.

The `home` feature is the complete reference module:

```text
src/features/home/
  index.ts
  components/
  config/
  hooks/
  store/
  types/
```

Use that shape when adding new product modules.

Feature folder responsibilities:

- `components`: screens and React components owned by the feature.
- `config`: feature-local constants, defaults, permissions, and flags.
- `hooks`: feature controller hooks and reusable feature-specific hooks.
- `store`: feature slices, RTK Query endpoints, selectors, and state tests.
- `types`: feature TypeScript contracts and DTOs.

## Available Scripts

- `npm start`: starts Vite in development mode. PWA features are disabled in
  this mode.
- `npm run build`: type-checks and builds production assets into `dist/`.
- `npm run preview`: serves the production build locally with the generated PWA
  assets.
- `npm run test:run`: runs tests once with Vitest.
- `npm test`: starts Vitest in watch mode.
- `npm run test:e2e`: runs Playwright end-to-end tests.
- `npm run test:e2e:headed`: runs Playwright with a visible browser.
- `npm run test:all`: runs Vitest and Playwright.
- `npm run storybook`: starts Storybook on port `6006`.
- `npm run build-storybook`: builds the static Storybook site.
- `npm run lint`: runs ESLint.
- `npm run prettier:check`: checks formatting.
- `npm run prettier:fix`: formats the project.
- `npm run verify`: runs lint, formatting check, Vitest, Playwright, app build,
  and Storybook build.
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

## Storybook

This template includes Storybook with the Vite React framework. Use it to build
and document reusable UI components in isolation.

Run Storybook locally:

```bash
npm run storybook
```

Build the static Storybook output:

```bash
npm run build-storybook
```

Initial stories are included for `Home` and `UserSessionComponent`.

## Testing

Automated tests use Vitest with React Testing Library in a jsdom environment
for unit and integration coverage:

- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/user-event`
- `vitest`
- `jsdom`

Browser end-to-end coverage uses Playwright:

```bash
npm run test:e2e
```

The initial E2E smoke test verifies that the home route renders in a real
browser.

## Mocking

MSW is included for isolated frontend development and tests. Test setup starts
the MSW server automatically through `src/setupTests.ts`.

Browser mocks are opt-in during development to avoid hiding real API issues:

```bash
VITE_ENABLE_MOCKS=true npm start
```

Add project-specific handlers in `src/mocks/handlers.ts`.

## Internationalization

This template includes i18n with `i18next`, `react-i18next`, and browser
language detection.

Locale resources live in:

```text
src/common/i18n/locales/
```

The default language is English (`en`) and Spanish (`es`) is included as the
second starter locale. Add new locale JSON files and register them in
`src/common/i18n/index.ts`.

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
