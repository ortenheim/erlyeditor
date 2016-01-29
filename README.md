[![badge 1](https://img.shields.io/badge/follows-npm%20checklist-brightgreen.svg)](CHECKLIST.md)
[![Travis](https://travis-ci.org/vyorkin-personal/erlyeditor.svg)](https://travis-ci.org/vyorkin-personal/erlyeditor)
[![Circle](https://circleci.com/gh/vyorkin-personal/erlyeditor.svg?style=svg)](https://circleci.com/gh/vyorkin-personal/erlyeditor)
[![Dependency Status](https://david-dm.org/vyorkin-personal/erlyeditor.svg)](https://david-dm.org/vyorkin-personal/erlyeditor)
[![devDependency Status](https://david-dm.org/vyorkin-personal/erlyeditor/dev-status.svg)](https://david-dm.org/vyorkin-personal/erlyeditor#info=devDependencies)

# ErlyEditor

A simple video editing tool. Test assignment for Erlyvideo. WIP.

# Table of contents

- [Prerequisites](#prerequisites)
- [Development](#development)
- [Testing](#testing)
- [Resources](#resources)

# Prerequisites

* `cp .example.env .env` and set required environment variables
* `npm install`
* install peer dependencies running `npm install react react-dom react-motion`
* you have to `npm install` and build (`npm run build:lib`) modules that is pulled from github by yourself

# Development

For a smooth dev process you can install these tools (not required):

* [greenkeeper](https://github.com/greenkeeperio/greenkeeper)
* [npm-check-updates](https://github.com/tjunnone/npm-check-updates)
* [nvm](https://github.com/creationix/nvm)
* [node-foreman](https://github.com/strongloop/node-foreman)

Updates are arriving automatically as PR's, thanks to [greenkeeper](http://greenkeeper.io/)
If you want to check for updates manually: [npm-check-updates](https://github.com/tjunnone/npm-check-updates)

In `dist` directory you can find webpack stats file named `webpack.stats.json` and
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

## Ideas

Check this out: [react-gl](https://github.com/ProjectSeptemberInc/gl-react).
[One of the examples](http://projectseptemberinc.github.io/gl-react-dom/Examples/VideoBlur/) places canvas over `video` to apply blurring and customize HUE.
This technique makes possible to implement really cool effects.
