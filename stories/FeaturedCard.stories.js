import { FeaturedCard } from './FeaturedCard';

export default {
  title: 'Elements/FeaturedCard',
  component: FeaturedCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
  },
};

export const Destination1 = {
  args: {
    backgroundImage: 'https://picsum.photos/300',
    headline: 'La macarena',
    price: '$130.000',
    dates: '5 nov - 13 dic',
  },
};
