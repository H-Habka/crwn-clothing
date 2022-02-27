import React from 'react'
import { CustomButtonJSX } from './custom-button-styledComponents';

const CustomButton = ({children, ...props}) => (
    <CustomButtonJSX {...props}>
        {children}
    </CustomButtonJSX>
  );

export default CustomButton