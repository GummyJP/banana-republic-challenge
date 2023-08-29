import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RadioButtonGroup = ({ options, defaultValue }) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (event, id) => {
    setSelected(event.target.value);
  };

  return (
    <div className="radio-group">
      {options.map((radioItem) => (
        <label key={radioItem.id} className="radio-item-label">
          <input
            type="radio"
            value={radioItem.value}
            name={radioItem.name}
            checked={selected === radioItem.value}
            onChange={(e) => handleChange(e, radioItem.id)}
          />
          <img
            className="radio-button-image"
            src={selected === radioItem.value ? radioItem.activeImage : radioItem.defaultImage}
            alt={radioItem.imageAlt}
          />
          {radioItem.text}
        </label>
      ))}
    </div>
  );
};

RadioButtonGroup.defaultProps = {
  options: [],
};

RadioButtonGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      activeImage: PropTypes.string.isRequired,
      defaultImage: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default RadioButtonGroup;
