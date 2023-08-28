import * as PropTypes from 'prop-types';

const RadioButtonGroup = ({ options }) => {
  return (
    <>
      {options.map((radioItem, index) => (
        <>
          <label className="radio-item-label">
            <input type="radio" value={radioItem.value} name={radioItem.name} />
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

RadioButtonGroup.propTypes = {
  options: PropTypes.array,
};

// const headingStyle = { color: 'red', backgroundColor: 'black' };

export default RadioButtonGroup;
