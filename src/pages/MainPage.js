import React, { useState } from 'react';

//Asset Imports
import faceSVG from '../assets/icon/face.svg';
import arrowSVG from '../assets/icon/arrow.svg';
import arrowRotatedSVG from '../assets/icon/arrowRotated.svg';

//Component Imports
import ProfileView from '../components/ProfileView';
import Form from '../components/Form';
import TextView from '../components/TextView';

const MainPage = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleButtonClick = () => {
    setIsButtonPressed(!isButtonPressed);
    if (isButtonPressed && (window.innerWidth < 768)) {
      goToBotom();
    }
  };

  return (
    <div className="container">
      <ProfileView faceSVG={faceSVG} handleButtonClick={handleButtonClick} isButtonPressed={isButtonPressed} arrowSVG={arrowSVG} arrowRotatedSVG={arrowRotatedSVG} />
      <div className="right-section">
        <Form />
        <TextView isButtonPressed={isButtonPressed}/>
        <div className='anchor'></div>
      </div>
    </div>
  );
};

const goToBotom = () => {
  window.scrollTo({
      top: 1000,
      behavior: 'smooth',
  });
};

export default MainPage;
