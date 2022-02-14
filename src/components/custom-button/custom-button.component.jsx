import React from 'react'
import './custom-button.style.scss';

const CustomButton = ({children , ...others}) => (
    <button className='custom-button' {...others}>
        {children}
    </button>
  );

export default CustomButton