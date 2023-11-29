import React from 'react';
import PropTypes from 'prop-types';
import { SwitchButton } from './SwitchButton';
import { Logo } from './Logo';
import { Button } from './Button';
import './navbar.css'

export const Navbar = ({ links, theme, onChange }) => {

  return (
    <nav className={['navbar', `navbar--${theme}`].join(' ')}>
      <Logo />
      <ul className='navbar__list'>
        {links.map(link => (
          <li className='navbar__item'>
            <a className='navbar__link' href={link.href} >{text}</a>
          </li>
        ))}
      </ul>
      <Button primary={false} label="Registrarse" size="large" />
      <SwitchButton onChange={onChange} />
      <div className='navbar__hamburger'>
        <span>=</span>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  })),
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['light', 'dark'])
};

Navbar.defaultProps = {
  links: [
    { text: 'foo', href: '#ref' },
    { text: 'bar', href: '#ref' },
    { text: 'baz', href: '#ref' },
    { text: 'qux', href: '#ref' },
  ],
  onChange: () => { }
};
