import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },

};

export const Standard = {
  args: {
    socialNetworks: [
      { icon: 'instagram' }
    ]
  }
}
