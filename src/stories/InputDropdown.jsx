import React from 'react';
import PropTypes from 'prop-types';
import './inputdropdown.scss';
export const InputDropdown = ({title, label, hint, prompt, showValidation, validationType, validationMessage, input, inputAll, inputSelect, required  }) => (
  

  <div className="input-area">
    <div className="input-title">{title}</div>
    <div className="input-label">{label}{required && (<span className="required">*</span>)}</div>
    <div className="input-hint">{hint}</div>
    {showValidation && (<div className={  `input-validation input-validation--${validationType}`}>{validationMessage}</div>)}

    <select  className='icon-bg-chevron-down'>
        <option disabled hidden selected>{prompt}</option>
        {inputAll.map(option => (
        <option  value={option} >{option}</option>
      ))}
    </select>
   </div>
);


InputDropdown.propTypes = {
  title: PropTypes.string,
  label:PropTypes.string.isRequired,
  hint:PropTypes.string.isRequired,
  prompt:PropTypes.string.isRequired,
  required: PropTypes.bool,
  showValidation: PropTypes.bool,
  validationType: PropTypes.oneOf(['error', 'success', 'warning']),
  validationMessage:PropTypes.string.isRequired,
  onClick: PropTypes.func,

};

InputDropdown.defaultProps = {
  title: 'Title',
  label: 'Label',
  hint: 'Hint',
  prompt:'Select',
  input: 'OptionA',  
  inputAll: ['OptionA', 'OptionB', 'OptionC'],
  showValidation:false,
  validationMessage:"Validation Message",
  validationType:"error",
  onClick: undefined,
}

