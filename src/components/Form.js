import * as PropTypes from 'prop-types';
import RadioButtonGroup from './RadioButtonGroup';
import Button from './Button';

//images
import maleImageDefault from '../mars-symbol.svg';
import femaleImageDefault from '../venus-symbol.svg';
import carImageDefault from '../card.svg';

const genderOptions = [
  {
    text: 'Male',
    value: 'M',
    name: 'maleRadioItem',
    defaultImage: maleImageDefault,
    imageAlt: 'MALE',
  },
  {
    text: 'Female',
    value: 'F',
    name: 'femaleRadioItem',
    defaultImage: femaleImageDefault,
    imageAlt: 'MALE',
  },
];

const membershipOptions = [
  {
    text: 'Classic',
    value: 'C',
    name: 'clasicRadioItem',
    defaultImage: carImageDefault,
    imageAlt: '',
  },
  {
    text: 'Silver',
    value: 'S',
    name: 'silverRadioOption',
    defaultImage: carImageDefault,
    imageAlt: '',
  },
  {
    text: 'Gold',
    value: 'G',
    name: 'goldRadioOption',
    defaultImage: carImageDefault,
    imageAlt: '',
  },
];

const Form = () => {
  return (
    <form className="user-form" onSubmit={validateForm}>
      <div className="form-control">
        <label className="form-item-label">Name</label>
        <input type="text" placeholder="" />
      </div>
      <div className="form-control">
        <label className="form-item-label">Gender</label>
        <RadioButtonGroup options={genderOptions} />
      </div>
      <div className="form-control">
        <label className="form-item-label">Date of Birth</label>
        <input type="date" />
      </div>
      <div className="form-control">
        <label className="form-item-label">Email</label>
        <input type="text" placeholder="" />
      </div>
      <div className="form-control">
        <label className="form-item-label">Mobile</label>
        <input type="text" placeholder="+91 98765 43210" />
      </div>
      <div className="form-control">
        <label className="form-item-label">Customer ID</label>
        <input type="text" placeholder="576802-ERD0348-45" />
      </div>
      <div className="form-control">
        <label className="form-item-label">Membership </label>
        <RadioButtonGroup options={membershipOptions} />
      </div>
      <div className="form-control align-right">
        <button className="cancel-button" type="reset">
          CANCEL
        </button>
        <button className="submit-button" type="button">
          SAVE
        </button>
      </div>
    </form>
  );
};

const validateForm = () => {
  console.log('Submitting');
};

Form.defaultProps = {
  title: 'BANANA REPUBLIC',
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = { color: 'red', backgroundColor: 'black' };

export default Form;
