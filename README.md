# Car Trawler Test
Simple ES6 project to parse a JSON list to display a list of Cars

## Introduction
This is a simple ES6 project that parses a JSON api and returns a visual representation of it.
The following technologies have been used:
1. Babel for transpiling to ES5
2. Webpack for building
3. Jest for testing
4. Bootstrap 4 for some styling

## Start

1. Clone the repo
2. Run `yarn` to install the require packages
3. Run `yarn start` to start the development server

## Production build
To build the production output run:
`yarn build`.

This command will production `index.html` and `bundle.js` in the `dist` folder.

## Test
Test is done using Jest framework. To run tests run `yarn test`.

## Structure
The project has the following structure:
```
src/
  css/
  factory/
  model/
  utility/
  view/
  CarTrawler.js
  constants.js
  index.js
.babelrc
.editorconfig
.eslintrc
.gitignore
index.html
package.json
README.md
webpack.config.dev.js
webpack.config.js
yarn.lock
```

The Factory pattern is used to create the Models, in order to avoid dependencies
from API change. Logic and View are separated, in order to allow to change data visualisation
without changing the model.
