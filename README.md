**⚠ Note: This template is unmaintained.**

# Rollup Base Template
Extended template for rollup builds

## How to use
Run:
```
npx degit "TimoBechtel/rollup-base-template#main" my-app
```

Or, with typescript support:
```
npx degit "TimoBechtel/rollup-base-template#option/typescript" my-app
```
Or you can use the Github template feature.


`src` folder already includes:

- template.html - bundles are injected through rollup
- app.js / app.ts - main entry point, automatically linked in html
- app.scss - transpiled through node-sass and imported in app.js / app.ts

### Development
Run `npm run dev` to start the dev server with live reloading.

### Production
Run `npm run build` to bundle app to `public/`.

## Features
- supports scss
- auto injects build files into html
- dev server with live reload included `npm run dev`
- fixes from normalize and sanitize depending on `.browserlist`
- transpiles css/scss for older browsers based on .browserlist
- minifies: css, javascript, html
- support for commonjs
- babel for transpiling modern javascript for older browsers based on .browserlist
- (optional) typescript support, compiled for older browsers based on .browserlist
- eslint config, for IDE extensions
- prettier config, for IDE extensions
