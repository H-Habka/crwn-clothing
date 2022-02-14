import React from 'react'
import './form-input.style.scss';

const FormInput = ({handleChange, lable , ...others}) => (

    <div className='group'>
        <input type="email" className="form-input" onChange={handleChange} {...others} />
        {
            lable?
            (<label className={`${others.value.length ? 'shrink' : '' } form-input-label `}>
                {lable}
            </label>) : null

        }
    </div>
  )

export default FormInput