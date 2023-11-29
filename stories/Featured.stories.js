import { Featured } from "./Featured";

export default {
  title: 'Components/Featured',
  component: Featured,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
  },
};

export const standard = {
  args: {
    featuredCards: [
      {
        backgroundImage: 'image_file',
        headline: 'La macarena',
        price: '$130.000',
        dates: '5 nov - 13 dic',
      }
    ]
  }
}