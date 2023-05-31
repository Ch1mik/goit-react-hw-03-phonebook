import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css'

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={s.label}>
      Find contacts by name
          <input
              className={s.input}
              placeholder='Enter name'
              type="text"
              value={value}
              onChange={onChangeFilter}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
};

export default Filter;
