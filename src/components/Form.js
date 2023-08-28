//Component Imports
import RadioButtonGroup from './RadioButtonGroup';

//images
import maleImageDefault from '../assets/icon/mars-symbol.svg';
import maleImageActive from '../assets/icon/mars-symbol--white.svg';
import femaleImageDefault from '../assets/icon/venus-symbol.svg';
import femaleImageActive from '../assets/icon/venus-symbol--white.svg';
import cardImageDefault from '../assets/icon/card.svg';
import cardImageActive from '../assets/icon/card--white.svg';

const genderOptions = [
  {
    id: 'male-radio-select',
    text: 'Male',
    value: 'M',
    name: 'genderRadioGroup',
    defaultImage: maleImageDefault,
    activeImage: maleImageActive,
    imageAlt: 'MALE',
    selected: false,
  },
  {
    id: 'female-radio-select',
    text: 'Female',
    value: 'F',
    name: 'genderRadioGroup',
    defaultImage: femaleImageDefault,
    activeImage: femaleImageActive,
    imageAlt: 'MALE',
    selected: false,
  },
];

const membershipOptions = [
  {
    id: 'classic-radio-select',
    text: 'Classic',
    value: 'C',
    name: 'membershipOptionGroup',
    defaultImage: cardImageDefault,
    activeImage: cardImageActive,
    imageAlt: '',
    selected: false,
  },
  {
    id: 'silver-radio-select',
    text: 'Silver',
    value: 'S',
    name: 'membershipOptionGroup',
    defaultImage: cardImageDefault,
    activeImage: cardImageActive,
    imageAlt: '',
    selected: false,
  },
  {
    id: 'gold-radio-select',
    text: 'Gold',
    value: 'G',
    name: 'membershipOptionGroup',
    defaultImage: cardImageDefault,
    activeImage: cardImageActive,
    imageAlt: '',
    selected: false,
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
        <RadioButtonGroup options={genderOptions} defaultValue={'M'} />
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
        <RadioButtonGroup options={membershipOptions} defaultValue={'C'} />
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
