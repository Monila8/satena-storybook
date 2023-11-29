import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { InputText } from './InputText';
import { InputSelect } from './InputSelect';
import { InputDate } from './InputDate';

export const Search = ({ onSubmit }) => {

  return (
    <main>

      <h6>Vuelos</h6>
      <h3>Busca tu vuelo</h3>

      <form onSubmit={onSubmit} className='search__form'>

        <fieldset>
          <ul>
            <li>
              <input type="radio" name='trip-radio' id="radio-one-way" />
              <label htmlFor="radio-one-way">Solo ida</label>
            </li>
            <li>
              <input type="radio" name='trip-radio' id="radio-round-trip" />
              <label htmlFor="radio-round-trip">Ida y regreso</label>
            </li>
          </ul>
        </fieldset>

        <fieldset>
          <InputText placeholder="Desde" />
          <InputText placeholder="Hacia" />
        </fieldset>

        <fieldset>
          <InputSelect />
          <InputSelect />
        </fieldset>

        <fieldset>
          <InputDate />
          <InputDate />
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
