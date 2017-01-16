# Vieux example with ECMAScript 6

This project implements an example chat application with Vieux architecture. It demonstrates how a complex, stateful application should be built.

![demo](https://cloud.githubusercontent.com/assets/698308/9188378/41976688-3fe4-11e5-940d-e555f666b294.gif)

## Install

```
$ git clone --recursive git@github.com:vieuxio/example-chat-es6.git
$ cd example-chat-es6
$ npm install
```

Now you are ready to run the project. After you execute this command, the project will be built and you can open `dist/index.html` with your favorite browser.

```
$ npm run build:dev
```

## Development

This project provides a development web server that listens on port 1973.

Run

```
$ npm run server
```

and the project will be ready for development and inspection. The server watches for file changes with hot reloading, so any change you make to the files under `src` folder will cause an automatic reload.

## Production builds

When you are satisfied with development and want to make a production build in order to deploy the app, just run

```
$ npm run build:prod
```

and a minified, optimized bundle will be deployed under the `dist` folder.

Happy coding!
