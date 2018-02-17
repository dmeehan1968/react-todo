# React Todo

A demo project to explore React development.

Based on [react-native-web-sketch-boilerplate](https://github.com/dmeehan1968/react-native-web-sketch-boilerplate).  See there for details on the finer points of the setup.

## Goals

1. To explore React API's when targeting multiple platforms.  
2. The application is intended to share as much code a possible between
platforms, be that Native on iOS or Android, or Browsers on the web.
3. The application should be responsive to viewport changes regardless of
4. platform, and its UI should be adaptive to the accepted standard for each
platform.

## Utilising

* [React Native](https://facebook.github.io/react-native/)
* [React Native Web](https://github.com/necolas/react-native-web)
* [React Sketchapp](http://airbnb.io/react-sketchapp/)
* [Sketchapp](https://www.sketchapp.com)
* [Expo](https://expo.io)
* [Webpack](https://webpack.js.org)
* [Babel](https://babeljs.io)
* [Jest](https://facebook.github.io/jest/)
* [Enzyme](http://airbnb.io/enzyme/)
* [ESLint](https://eslint.org)
* [Flow](http://flow.org)

## Code Standard

The project uses some ES7 features and proposals such as arrow functions,
rest/spread (...) and function bind (::).  Babel is used to transpile.

## License

Terms are use are defined in the [MIT License](https://github.com/dmeehan1968/react-todo/blob/master/LICENSE.md)

## Scripts

The following scripts are provided:

* ```npm run ios```

  Build app and start the iOS Simulator using the Expo app.  Will watch for
  code changes and reload when needed

* ```npm run android```

  Build app and start the Android Simulator using the Expo app.  Will watch for
  code changes and reload when needed (untested)

* ```npm run web```

  Build app and run in browser using Webpack Dev Server and Hot Module
  Reloading

* ```npm run sketch```

  Build and run app in Sketchapp (MacOS Only), watch for changes and reload
  when needed

* ```npm run test:web```

  Run tests for web and common components

* ```npm run test:native```

  Run tests for native and common components

* ```npm run native:start```

  Start the React Native packager only

* ```npm run native:eject```

  Eject the React Native project

* ```npm run sketch:build```

  Build only for Sketch target

* ```npm run sketch:watch```

  Same as ```sketch```

* ```npm run sketch:render:once```

  Builds for Sketch and renders once, doesn't watch.

* ```npm run webpack:build```

  Build only for webpack

* ```npm run webpack```

  Run webpack dev server, open in browser, hot module replacement enabled

* ```npm run express```

  Run express server with hot module replacement enabled, uses localhost:3000

* ```npm run lint```

  Runs eslint on all the entire project

* ```npm run flow```

  Runs Flow type checking on the entire project

* ```npm run precommit```

  Runs lint and tests for currently staged modules.  See
  '[git hooks](#git-hooks)' for more.

## Git Hooks

The package uses [husky](https://www.npmjs.com/package/husky) to run
commands on certain git actions (git hooks).

[Lint-staged](https://www.npmjs.com/package/lint-staged) is used to simplify
identification of staged files and run the appropriate commands.

* Pre Commit

  Before committing, flowtype, linting and tests are run on the currently
  staged files.
