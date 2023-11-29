import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { InputText } from './InputText';
import { InputSelect } from './InputSelect';
import { InputDate } from './InputDate';

export const Search = ({ onSubmit }) => {
  const selectOptions = [
    {value: '1', label: '1'},
  ]

  return (
    <main className='search'>

      <h6 className='text__pre-headline'>Vuelos</h6>
      <h3 className='text__headline'>Busca tu vuelo</h3>

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
          <InputDate placeholder="ida" />
          <InputDate placeholder="regreso" />
        </fieldset>

        <fieldset>
          <InputSelect options={selectOptions} placeholder="Número de pasajeros" />
          <InputSelect options={selectOptions} placeholder="Categoría" />
        </fieldset>

        <fieldset className='search__call-to-action'>
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
