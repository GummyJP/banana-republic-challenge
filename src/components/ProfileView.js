import * as PropTypes from 'prop-types';

const ProfileView = ({faceSVG , handleButtonClick, isButtonPressed , arrowSVG ,arrowRotatedSVG}) => {
  return (
    <div className="left-section">
        <img className="profile-image" src={faceSVG} alt="Centered" />
        <h1 className="left-header">Front-end challenge!</h1>
        <p className="left-text">
          This is a design that you will need to code up and impress us.
        </p>
        <button
          className={`second-image-button ${isButtonPressed ? 'active' : ''}`}
          onClick={handleButtonClick}
        >
          <div className="second-image-container">
            <img
              className={`second-image ${
                isButtonPressed ? 'rotated' : 'rotatedAgain'
              }`}
              src={!isButtonPressed ? arrowSVG : arrowRotatedSVG}
              alt="SecondImage"
            />
          </div>
        </button>
      </div>
  );
};

ProfileView.defaultProps = {
  isButtonPressed: false,
};

ProfileView.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  isButtonPressed: PropTypes.bool.isRequired,
};

export default ProfileView;
