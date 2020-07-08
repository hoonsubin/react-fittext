# react-lib-boilerplate

A boilerplate for creating React component libraries.
This was made based on <https://levelup.gitconnected.com/create-a-react-component-library-with-typescript-and-storybook-ed28fc7511f2>

## Usage

To install dependencies

`$ yarn`

To build

`$ yarn build`

To run tests

`$ yarn tests`

To run Storybook

`$ yarn storybook`

To publish to npm

`$ yarn publish`

## Template Structure

```bash
.
├── build
│   ├── components
│   │   └── MyComponent.d.ts
│   ├── index.d.ts
│   ├── index.es.js
│   ├── index.es.js.map
│   ├── index.js
│   ├── index.js.map
│   └── __tests__
│       └── index.spec.d.ts
├── .eslintrc.js
├── package.json
├── .prettierignore
├── .prettierrc.js
├── rollup.config.js
├── src
│   ├── components
│   │   ├── MyComponents.stories.tsx
│   │   ├── MyComponent.tsx
│   │   └── __tests__
│   │       └── MyComponent.spec.tsx
│   └── index.ts
├── .storybook
│   ├── config.js
│   └── webpack.config.js
└── tsconfig.json
```

-   `.storybook/` folder contains the [Storybook](https://storybook.js.org/) configurations.
-   `build/` folder contains the react component ready for publishing.
    Everything in here is what the end-user will use.
-   `src/` folder contains the react components written in TypeScript. Every components should be stored in `src/components/` as the end user will be using this library as a component, and the developer should treat that as such. This is also where you should store all of your Story files with the name `{name}.stories.tsx`.
-   `src/components/__tests__/` folder contains all the unit tests for the developed component.

## How to use this

This is a template repo.
All you have todo is simply clone this and change the package settings inside the `package.json` file.

### Setting up

In most cases you only need to change the `name`, `description`, `keywords` and the `author`.
But feel free to add additional scripts and anything else.

### Create a component

To create a React component, first you will have to remove all the `MyComponents` component and create your own `.tsx` files.
After you have finished working on the component, unit tests and the component story, edit the export content in the `src/index.ts` as everything in there is what the end use will interact when they download your package.

### Publish

Before you publish anything to npm, make sure that you have an account.
If you don't have one, you can make one from here <https://www.npmjs.com/>
Then login to npm by using `$ npm login`.

After that you can change your package configuration via `$ npm init`.
If everything is fine, use `$ yarn publish` to publish this package to npm.
