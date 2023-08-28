import * as PropTypes from 'prop-types';

const RadioButtonGroup = ({ options }) => {
  return (
    <>
      {options.map((radioItem, index) => (
        <>
          <label className="radio-item-label">
            <input
              type="radio"
              id={radioItem.id}
              value={radioItem.value}
              name={radioItem.name}
            />
            <img
              className="radio-button-image"
              src={radioItem.defaultImage}
              alt={radioItem.imageAlt}
            />
            {radioItem.text}
          </label>
        </>
      ))}
    </>
  );
};

RadioButtonGroup.defaultProps = {
  options: [],
};

RadioButtonGroup.propTypes = {
  options: PropTypes.array.isRequired,
};

export default RadioButtonGroup;
