import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
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

export const Registrarse = {
  args: {
    size: 'large',
    label: 'Registrarse',
    primary: false,
  },
};

export const ConoceLarge = {
  args: {
    size: 'large',
    label: 'Conoce más aquí',
    primary: true,
  },
};

export const BuscarLarge = {
  args: {
    size: 'xl',
    label: 'Buscar',
    primary: true,
  },
};

export const BuscarSmall = {
  args: {
    size: 'small',
    label: 'Buscar',
    primary: true,
  },
};
