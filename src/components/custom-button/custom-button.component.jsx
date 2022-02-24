import React from 'react'
import './custom-button.style.scss';

const CustomButton = ({children ,isGoogleSignIn,inverted ,...others}) => (
    <button className={`${inverted? 'inverted' : ''}  ${isGoogleSignIn? 'google-sign-in' : ''} custom-button`} {...others}>
        {children}
    </button>
  );

export default CustomButton