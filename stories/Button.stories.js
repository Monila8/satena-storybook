import { Button } from './Button';

export default {
  title: 'Elements/Buttons',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
    primary: true,
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
    primary: false,
  },
};

// primary and secundary buttons

export const LogIn = {
  args: {
    size: 'large',
    label: 'Registrarse',
    primary: false,
  },
};

export const LearnMoreLarge = {
  args: {
    size: 'large',
    label: 'Conoce más aquí',
    primary: true,
  },
};

export const SearchLarge = {
  args: {
    size: 'xl',
    label: 'Buscar',
    primary: true,
  },
};

export const SearchSmall = {
  args: {
    size: 'small',
    label: 'Buscar',
    primary: true,
  },
};
