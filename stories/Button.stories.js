import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const DarkMode = {
  args: {
    darkMode: true,
    label: 'Conoce más aquí',
    size: 'large'
  },
};

export const Light = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

//primary and secundary buttons

export const Registrarse = {
  args: {
    size: 'large',
    label: 'Registrarse',
    type: "secundary",
  },
};

export const ConoceLarge = {
  args: {
    size: 'large',
    label: 'Conoce más aquí',
    type: "primary",
  },
};

export const 
 = {
  args: {
    size: 'large',
    label: 'Conoce más aquí',
    type: "primary",
  },
};

export const BuscarLarge = {
  args: {
    size: 'large',
    label: 'Buscar',
    type: 'primary',
  },
};

export const BuscarSmall = {
  args: {
    size: 'small',
    label: 'Buscar',
    type: 'primary',
  },
};
