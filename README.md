[![follows npm checklist](https://img.shields.io/badge/follows-npm%20checklist-brightgreen.svg)](CHECKLIST.md)
[![semantic release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Travis](https://travis-ci.org/vyorkin-personal/erlyeditor.svg)](https://travis-ci.org/vyorkin-personal/erlyeditor)
[![Circle](https://circleci.com/gh/vyorkin-personal/erlyeditor.svg?style=svg)](https://circleci.com/gh/vyorkin-personal/erlyeditor)

[![dependency Status](https://david-dm.org/vyorkin-personal/erlyeditor.svg)](https://david-dm.org/vyorkin-personal/erlyeditor)
[![devDependency Status](https://david-dm.org/vyorkin-personal/erlyeditor/dev-status.svg)](https://david-dm.org/vyorkin-personal/erlyeditor#info=devDependencies)

# ErlyEditor

A simple video editing tool. Test assignment for Erlyvideo. WIP.

# Table of contents

- [Prerequisites](#prerequisites)
- [Development](#development)
- [Testing](#testing)
- [Examples](#examples)
- [Resources](#resources)

# Prerequisites

* `cp .example.env .env` and set required environment variables
* `npm install`
* install peer dependencies running `npm install react react-dom react-motion`
* you have to `npm install` and build (`npm run build:lib`) modules that is pulled from github by yourself

# Usage

#### Intro

 `erlyeditor` primarily consists of two things: components and reducers.
 * top-level Redux reducers: `editorReducer`, `playerReducer` and `html5videoReducer`.
 * top-level React components: `Editor`, `Player` and `Html5Video`.

The reducers listen to dispatched actions from the component to maintain your state in Redux.

#### Setup

##### Step

The first thing that you have to do is to give the player and video reducers to Redux.
```
import { foo, bar } from 'my-awesome-reducers';
import { editorReducer as editor } from 'erlyeditor';

const reducers = {
  // ... your other reducers here ...
  editor, // <- mounting editor reducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);
```

The default mount point for `editorReducer` is `editor`.

**NOTE**:

It won't work if you change mounting point.
Right now you can't change this, so be carefull.

#### Roboto Font and Material Design Icons

ErlyEditor assumes that you are importing Roboto Font and Material Design Icons.
In order to import the fonts for you, we'd need to include them in the CSS which is considered a bad practice.
If you are not including them in your app go to the linked sites and follow the instructions.

#### Customization

Almost any component allows use to specify className which will be applied to it
via composition with existing built-in className. Additionally you can override
built-in styles because everything is based on the [react-css-modules](https://github.com/gajus/react-css-modules).
You need to export unstyled version of component to provide your own styles, to
do this simple `import { QuxComponent } from 'erlyeditor/components/QuxComponent';` instead of importing the default one.

#### Components

Also you can use other components as well. Here is the full list:

* `Html5Video`
* `Player`
* `Icon`
* `Button`
* `Slider`
* `hoc/Tooltip` - high-order component for tooltips

Every component is exported in 2 different ways:
* To import *unstyled* version use `import { FooComponent } from erlyeditor`
* To import *styled* use `import FooComponent from 'erlyeditor`

# Development

### Building

#### Build erlyeditor

Running the `build` task will create both a CommonJS module-per-module build and a UMD build.
```
npm run build
```

To create just a CommonJS module-per-module build:
```
npm run build:lib
```

To create just a UMD build:
```
npm run build:umd
npm run build:umd:min
```

### Testing and Linting

To run both linting and testing at once, run the following:
```
npm run check
```

To only run tests:
```
npm run test
```

To continuously watch and run tests, run the following:
```
npm run test:watch
```

To perform linting with `eslint`, run the following:
```
npm run lint
```

### Examples

Erlyeditor comes with examples to demonstrate its usage.
When adding a new example, please adhere to the style and format of the existing examples,
and try to reuse as much code as possible.

#### Building and testing the examples

Clone the repo, cd to example you are interested in and
run `npm install && npm start`. It will
take a while to start, but after the site is built, you can access the examples
by opening [http://localhost:3001/](http://localhost:3001/).

#### Tools

For a smooth dev process you can install these tools (not required):

* [greenkeeper](https://github.com/greenkeeperio/greenkeeper)
* [npm-check-updates](https://github.com/tjunnone/npm-check-updates)
* [nvm](https://github.com/creationix/nvm)

Updates are arriving automatically as PR's, thanks to [greenkeeper](http://greenkeeper.io/)
If you want to check for updates manually: [npm-check-updates](https://github.com/tjunnone/npm-check-updates)

After building in `dist` directory you can find webpack stats file named `webpack.stats.json` and
feed it to [webpack stats analyzer](http://webpack.github.io/analyse/) to see
some useful info about your bundle.

The [debug](https://www.npmjs.com/package/debug) package is used for debugging.
To turn it on simply specify the **DEBUG** environment variable:

- `DEBUG=app:server:(log|info|error)` &mdash; to see nodejs server debugging output.
- `DEBUG=app:webpack` &mdash; to see app-related webpack output.
- `DEBUG=app:*` &mdash; to see everything.

# Testing

Packages I use for testing:

* [mocha](http://mochajs.org/#getting-started)
* [chai](http://chaijs.com/api/bdd/)
* [sinon](http://sinonjs.org/)
* [sinon-chai](https://github.com/domenic/sinon-chai)
* [enzyme](https://github.com/airbnb/enzyme)
* [cheerio](https://github.com/cheeriojs/cheerio)

# Resources

Make sure that you've read this [npm-module-checklist](https://github.com/bahmutov/npm-module-checklist) before
starting to build your own npm package.

* [react-css-modules](https://github.com/gajus/react-css-modules) - Seamless mapping of class names to CSS modules inside of React components.

## Ideas

Check this out: [react-gl](https://github.com/ProjectSeptemberInc/gl-react).
[One of the examples](http://projectseptemberinc.github.io/gl-react-dom/Examples/VideoBlur/) places canvas over `video` to apply blurring and customize HUE.
This technique makes possible to implement really cool effects.
