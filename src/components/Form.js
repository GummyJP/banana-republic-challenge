//Component Imports
import RadioButtonGroup from './RadioButtonGroup';

//images
import maleImageDefault from '../assets/icon/mars-symbol.svg';
import femaleImageDefault from '../assets/icon/venus-symbol.svg';
import carImageDefault from '../assets/icon/card.svg';

const genderOptions = [
  {
    text: 'Male',
    value: 'M',
    name: 'genderRadioGroup',
    defaultImage: maleImageDefault,
    imageAlt: 'MALE',
  },
  {
    text: 'Female',
    value: 'F',
    name: 'genderRadioGroup',
    defaultImage: femaleImageDefault,
    imageAlt: 'MALE',
  },
];

const membershipOptions = [
  {
    text: 'Classic',
    value: 'C',
    name: 'membershipOptionGroup',
    defaultImage: carImageDefault,
    imageAlt: '',
  },
  {
    text: 'Silver',
    value: 'S',
    name: 'membershipOptionGroup',
    defaultImage: carImageDefault,
    imageAlt: '',
  },
  {
    text: 'Gold',
    value: 'G',
    name: 'membershipOptionGroup',
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

export default Form;
