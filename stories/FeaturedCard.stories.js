import { FeaturedCard } from './FeaturedCard';

export default {
  title: 'Components/FeaturedCard',
  component: FeaturedCard,
  tags: ['autodocs'],

  argTypes: {
    backgroundImage: { control: 'text' },
    headline: { control: 'text' },
    price: { control: 'text' },
    dates: { control: 'text' },
  },
};

export const Destiny1 = {
  args: {
    backgroundImage: 'image_file',
    headline: 'La macarena',
    price: '$130.000',
    dates: '5 nov - 13 dic',
  },
};

export const Destiny2 = {
    args: {
      backgroundImage: 'image_file',
      headline: 'Nuquí',
      price: '$197.000',
      dates: '5 nov - 13 dic',
    },
  };

  export const Destiny3 = {
    args: {
      backgroundImage: 'image_file',
      headline: 'La macarena',
      price: '$184.900',
      dates: '5 nov - 13 dic',
    },
  };