import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export const Search = ({ onSubmit }) => {

  return (
    <main>

      <form onSubmit={onSubmit} className='search__form'>

        <fieldset>
          <ul>
            <li>
              <input type="radio" name='trip-radio' id="radio-one-way" />
              <label htmlFor="radio-one-way">Solo ida</label>
            </li>
            <li>
              <input type="radio" name='trip-radio' id="radio-round-trip" />
              <label htmlFor="radio-round-trip">Ida y vuelta</label>
            </li>
          </ul>
        </fieldset>

        <fieldset>
          
        </fieldset>

        <fieldset>
          <Button size="xl" label="buscar" primary />
        </fieldset>
      </form>
    </main>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func
};

Search.defaultProps = {
  onSubmit: () => { }
};
