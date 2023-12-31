import React from 'react';
import PropTypes from 'prop-types';

const ButtonTypes = {
  SUBMIT: 'submit',
  CANCEL: 'cancel',
};

const Button = ({ type, text, onButtonPress, className }) => {
  return (
    <button onClick={onButtonPress} className={`button ${className}`} >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'SAVE',
  type: ButtonTypes.SUBMIT,
  className: 'default-button', 
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(ButtonTypes)).isRequired,
  onButtonPress: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
