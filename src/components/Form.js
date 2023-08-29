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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting');
    // Add your form submission logic here
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <FormGroup label="Name">
        <input type="text" placeholder="Enter your name" />
      </FormGroup>
      <FormGroup label="Gender">
        <RadioButtonGroup options={genderOptions} defaultValue="M" />
      </FormGroup>
      <FormGroup label="Date of Birth">
        <input type="date" />
      </FormGroup>
      <FormGroup label="Email">
        <input type="email" placeholder="Enter your email" />
      </FormGroup>
      <FormGroup label="Mobile">
        <input type="tel" placeholder="+91 98765 43210" />
      </FormGroup>
      <FormGroup label="Customer ID">
        <input type="text" placeholder="Enter your customer ID" />
      </FormGroup>
      <FormGroup label="Membership">
        <RadioButtonGroup options={membershipOptions} defaultValue="C" />
      </FormGroup>
      <div className="form-control align-right">
        <button className="cancel-button" type="reset">
          CANCEL
        </button>
        <button className="submit-button" type="submit">
          SAVE
        </button>
      </div>
    </form>
  );
};

const FormGroup = ({ label, children }) => {
  return (
    <div className="form-control">
      <label className="form-item-label">{label}</label>
      {children}
    </div>
  );
};

export default Form;
