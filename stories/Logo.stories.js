import React from 'react';
import { Logo } from './Logo';

export default {
  title: 'Elements/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

export const FullColor = () => <Logo />;
export const White = () => <Logo />;
export const Small = () => <Logo />;
