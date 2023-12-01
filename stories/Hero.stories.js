import { Preview } from '@storybook/react';
import { Hero } from "./Hero";

const customViewports = {
  desktop: {
    name: 'desktop name',
    styles: {
      width: '1400px',
      height: '963px',
    },
  },
};

export default {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
    viewport: { viewports: customViewports },
  },

};

export const standard = {
  args: {
  }
}
