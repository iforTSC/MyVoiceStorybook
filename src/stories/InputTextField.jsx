import React from 'react';
import PropTypes from 'prop-types';
/*
import { Button } from './Button';*/
import './inputtextfield.scss';
export const InputTextField = ({title, label, hint, textarea, textareaRows, showValidation, validationType, validationMessage, input,icon, required, placeholder  }) => (
  

  <div className="input-area">
    <div className="input-title">{title}</div>
    <div className="input-label">{label}{required && (<span className="required">*</span>)}</div>
    <div className="input-hint">{hint}</div>
    {showValidation && (<div className={  `input-validation input-validation--${validationType}`}>{validationMessage}</div>)}
    <div className="input-text-content-wrapper">
    {!textarea && ( <input type="text"  placeholder={placeholder}  value={input} className="input-text-content"></input>)}
    {(!textarea && icon) && (<span className={`input-text-icon icon-${icon}`}></span>)}
    {textarea && ( <textarea  rows={textareaRows} cols="50" className="input-textarea-content" placeholder={placeholder}>{input}</textarea>)}
    </div>
  </div>
);


InputTextField.propTypes = {
  title: PropTypes.string,
  label:PropTypes.string.isRequired,
  hint:PropTypes.string.isRequired,
  input:PropTypes.string,
  required: PropTypes.bool,
  textarea: PropTypes.bool,
  textareaRows: PropTypes.number.isRequired,
  showValidation: PropTypes.bool,
  validationType: PropTypes.oneOf(['error', 'success', 'warning']),
  validationMessage:PropTypes.string.isRequired,
  icon: PropTypes.oneOf([null, 'clock', 'calendar']),
  onClick: PropTypes.func,

};

InputTextField.defaultProps = {
  title: 'Title',
  label: 'Label',
  hint: 'Hint',
  input: 'Input',
  icon:null,
  textarea:false,
  textareaRows:4,
  showValidation:false,
  validationMessage:"Validation Message",
  validationType:"error",
  onClick: undefined,
}

