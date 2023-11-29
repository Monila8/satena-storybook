import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
  },
};

export const Standard = {
  args: {
    socialNetworks: [
      { icon: 'instagram' }
    ]
  }
}
