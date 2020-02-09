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
