import React from 'react';
import {Logo} from './Logo';

export default {
  title: 'Logo',
  component: Logo,
};

export const FullColor = () => <Logo type="fullColor" />;
export const White = () => <Logo type="white" />;
export const Small = () => <Logo type="small" />;
