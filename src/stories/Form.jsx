import React from 'react';
import PropTypes from 'prop-types';

import { Page } from './Page';
import { InputTextField } from './InputTextField';
import './form.scss';

export const Form = ({inputs}) => (
  
<div className='form-container'>
  <div className='input-area'>

  {inputs.map((input,index) => (
          <InputTextField  key={index} {...input} />
        ))}
  </div>
</div>
);

Form.propTypes = {
};

Form.defaultProps = {
};

