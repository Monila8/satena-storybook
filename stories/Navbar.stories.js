import { Navbar } from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    links: { control: 'array' },
    onChange: { action: 'onChange' },
    theme: { control: { type: 'select', options: ['light', 'dark'] } },
  },
};

export const Labels = {
  args: {
    links: [
      { text: 'Destinos', href: '#ref' },
      { text: 'Vuelos', href: '#ref' },
      { text: 'Check in', href: '#ref' },
      { text: 'Iniciar sesión', href: '#ref' },
    ],
    onChange: () => {},
    theme: 'light',
  },
};