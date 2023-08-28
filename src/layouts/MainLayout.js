import React, { useState } from 'react';
import faceSVG from '../assets/icon/face.svg';
import arrowSVG from '../assets/icon/arrow.svg';
import arrowRotatedSVG from '../assets/icon/arrowRotated.svg';
import ProfileView from '../components/ProfileView';
import Form from '../components/Form';
import TextView from '../components/TextView';

const MainLayout = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleButtonClick = () => {
    setIsButtonPressed(!isButtonPressed);
  };

  return (
    <div className="container">
      <ProfileView faceSVG={faceSVG} handleButtonClick={handleButtonClick} isButtonPressed={isButtonPressed} arrowSVG={arrowSVG} arrowRotatedSVG={arrowRotatedSVG}></ProfileView>
      <div className="right-section">
        <Form />
        <TextView isButtonPressed={isButtonPressed}/>
      </div>
    </div>
  );
};


export default MainLayout;
