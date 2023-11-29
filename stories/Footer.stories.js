import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'twitter',
      values: [
        {
          name: 'twitter',
          value: '#00aced',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
      ],
    },
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
