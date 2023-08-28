import * as PropTypes from 'prop-types';
import React, { useState } from 'react';

const RadioButtonGroup = ({ options, defaultValue}) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (event , id) => {
    setSelected(event.target.value);
  };

  return (
    <div className='radio-group'>
      {options.map((radioItem) => (
        <>
          <label className="radio-item-label">
            <input
              type="radio"
              id={radioItem.id}
              value={radioItem.value}
              name={radioItem.name}
              onChange={(e) =>handleChange(e,radioItem.id)}
              defaultChecked={selected === radioItem.value}
            />
            <img
              className="radio-button-image"
              src={document.getElementById(radioItem.id) !== null && document.getElementById(radioItem.id).value === selected ? radioItem.activeImage : radioItem.defaultImage}
              alt={radioItem.imageAlt}
            />
            {radioItem.text}
          </label>
        </>
      ))}
    </div>
  );
};

RadioButtonGroup.defaultProps = {
  options: [],
};

RadioButtonGroup.propTypes = {
  options: PropTypes.array.isRequired,
};

export default RadioButtonGroup;
