import * as PropTypes from 'prop-types';
import React from 'react';

const Button = ({ type, text, onButtonPress }) => {
  if (type === 'submit') {
    return (
      <button onClick={onButtonPress} className="submit-button">
        {text}
      </button>
    );
  } else {
    return (
      <button onClick={onButtonPress} className="cancel-button">
        {text}
      </button>
    );
  }
};

Button.defaultProps = {
  text: 'SAVE',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
