//import { linkTo } from '@storybook/addon-links';
import Vue from 'vue'
import Welcome from '../components/Welcome.vue';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
});

ToStorybook.story = {
  name: 'to Storybook',
};
