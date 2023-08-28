import React, { useState } from 'react';
import faceSVG from '../face.svg';
import arrowSVG from '../arrow.svg';
import arrowRotatedSVG from '../arrowRotated.svg';
import Form from '../components/Form';

const MainLayout = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleButtonClick = () => {
    setIsButtonPressed(!isButtonPressed);
  };
  return (
    <div className="container">
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
      <div className="right-section">
        <Form />
        <div className={`orange-container ${isButtonPressed ? 'active' : ''}`}>
          <div className="orange-text">
            <h2 className="orange-heading">My world today</h2>
            <p className="orange-paragraph">
              Pellentesque habitant morbi tristique senectus et nets et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante.{' '}
              <b>
                <u>View all days</u>
              </b>{' '}
              eu libero sit amet quam egestas semper. Aenean ultricies mi vitae
              est. Maris placerat eleifend leo. Quisque sit amet est et sapien
              ullamcorper pharetra. Vestibulum erat wisi. condimentum sea.
              commodo vitae. ornare sit amet. WIsI Aenean fermentum, elit get
              tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
              lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut
              felis. Present dapibus, neque id cursus faucibus, tortor neque
              egestas augue, eu vulptate magna eros eu erat. Aliquam erat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MainLayout;
