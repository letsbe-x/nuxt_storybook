# Template

> 0 days StoryBook

---

## OverView

*  StoryBook + Nuxt.JS template

---

## Setting

```bash
npm install @storybook/vue --save-dev
yarn add @storybook/addon-knobs --dev
npm i -D @storybook/addon-actions
yarn add -D @storybook/addon-viewport
```

```javascript
/*.storybook/config.js*/
import { configure, addParameters } from "@storybook/vue";
import {INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "someDefault"
  }
});

configure(require.context("../stories", true, /\.stories\.js$/), module);
```

```javascript
/* .stroybook/addons.js */
import '@storybook/addon-knobs/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-viewport/register';
```



---

# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```



```