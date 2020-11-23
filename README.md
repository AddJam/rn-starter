# Mobile App

react-native repo for the {projectName} mobile app

# Development

## Running the app locally - iOS

1. Install the react-native-cli - instructions [on the React Native website](https://facebook.github.io/react-native/docs/getting-started)
2. [Install cocoapods](https://guides.cocoapods.org/using/getting-started.html)
3. Make sure you've installed xcode and opened it to accept terms etc
4. Install js dependencies: `npm install`
5. Install native dependencies: `cd ios && pod install`
5. Create `app/config/local.js` - local dev config that isn't committed.
6. Start the js bundler: `react-native start`
7. Run the project: `react-native run-ios`

## Running the app locally - Android

1. Install the react-native-cli - instructions [on the React Native website](https://facebook.github.io/react-native/docs/getting-started)
2. Make sure you've installed Android Studio, have the jdk etc. You'll likely need to create at least one emulator using the Virtual Device Manager (or have a real device connected)
3. Install js dependencies: `npm install`
4. Create `app/config/local.js` - local dev config that isn't committed. Default options can be copied from `app/config/local-example.js`
5. Start the js bundler: `react-native start`
6. Run the project: `react-native run-android`

## Structure

We're using `redux` for state management and `redux-saga` for asynchronous actions e.g. api requests.

The bulk of the code is in the `app` directory.

| location       | contents                                                                                                               |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| app/App.js     | Entrypoint for the app                                                                                                 |
| app/components | lower level components, e.g. buttons                                                                                   |
| app/screens    | components representing entire screens within the app, where integration with redux would happen                       |
| app/config     | app-wide config - things like an api host, colors, etc. Configuration of the redux store and, in dev, tools like Reactotron. |
| app/state      | redux reducers/actions/selectors. Combined in `index.js`                                                               |
| app/sagas      | `redux-saga` sagas, forked from the root saga in `index.js` to run in parallel.                                        |
| \_\_tests\_\_/ | Tests, using [Jest](https://jestjs.io/)                                                                                |
| ios/           | Native iOS project
| android/       | Native Android project

## Config

Global app config is in `app/config/index.js`. There are some defaults which are overridden by the contents of `local.js` and either `development.js` or `production.js`, in that order, depending on if the app is being run locally or built as a release.

`local.js` is intended for overriding config values without committing them. Things like enabling/disabling storybook locally or secret tokens.

`production.js` is applied last, so local values for these won't have an effect.

#### Possible config values

**TODO** Update these as config values are established

| value              | purpose                                                                |
| ------------------ | ---------------------------------------------------------------------- |
| `colors`           | The colors used throughout the app
| `storybookEnabled` | Should storybook run? (not currently implemented)

## Redux

**TODO** Setup redux

Our typical redux setup would be done in `config/store.js`. This would setup the redux store, add middleware (such as redux-saga and redux-persist).

We would then add the react-redux `Provider` to `app/App.js`.

We have included `@reduxjs/toolkit` which speeds up development by allowing us to abstract away most of the typical boilerplate code associated with setting up and using redux. For example:
- Includes a convenience function for configuring the store
- Has the concept of a `slice` which incorporates reducers and action creators

It's worth reading through the [toolkit docs](https://redux-toolkit.js.org/) for more details

## Storybook

**TODO** Implement

[Storybook](https://storybook.js.org/) allows us to list example usages of our components with various props so that we can quickly iterate on them without manually navigating to get the app into a useful state.

Run the storybook server using `npm storybook`, then start the app with `storybookEnabled` set to `true` in `app/config/local.js`. Storybook takes over the app UI with a component browser.

## Reactotron

We are using Reactotron for inspecting `Logs` and `Networking` currently. We can configure more custom actions in `reactotron-config.js` file.

**TODO** Implement

[Reactotron](https://github.com/infinitered/reactotron/) is a quick and easy way to inspect what's going on with the app while it's running, and to modify some basic state.

We can use it to quickly run custom actions and to inspect:

- API requests
- Redux state
- Sagas
- Logs
- Basic performance tracking

## Tests

Run the tests with `npm test`. We use a mixture of snapshot tests for making sure we don't make any unintentional changes to components or redux state mutations, and unit tests elsewhere.

## Code style

We use `prettier` for code formatting.

## Git Flow

The branching model used in this repo is based on [git
flow](https://nvie.com/posts/a-successful-git-branching-model/)

# Build & Deploy

## iOS

**TODO** document how to deploy

## Android

**TODO** document how to deploy
