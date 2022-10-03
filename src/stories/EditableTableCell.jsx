import React from 'react';
import PropTypes from 'prop-types';

import { InputTextField } from './InputTextField';
import './editabletablecell.scss';
import './globalStyles/icons.scss';

import './editabletablecell.scss';
/**
 * Primary UI component for user interaction
 */


 const focus = (evt) => {
   
  let ro = evt.target.parentNode.getElementsByClassName("first")
  let lo = evt.target.parentNode.getElementsByClassName("last")
  if(ro.length > 0){
    ro[0].style.display ="none"
  };
  if(lo.length > 0){
    lo[0].style.display =""
  };
};

const blur = (evt) => {
  let ro = evt.target.parentNode.getElementsByClassName("first")
  let lo = evt.target.parentNode.getElementsByClassName("last")
  if(ro.length > 0){
    ro[0].style.display =""
  };
  if(lo.length > 0){
    lo[0].style.display ="none"
  };
};


export const EditableTableCell = ({ text,onEdit,...props }) => {
 return(
<div>

  <div  className='editable-tablecell-container icon-bg-pen first' style={{ backgroundColor:'transparent'}} onClick={(e)=>focus(e)}>
    <div><div className='editable-tablecell-text'>{props? props.title: text}</div></div>
  </div>
  

  <div className='editable-tablecell-container icon-bg-save  last' style={{display:'none',  backgroundColor:'transparent'}}  onClick={(e)=>blur(e)}>
    <div><div className='editable-tablecell-input'><InputTextField  input={text} label={null} title={null} hint={null} onEdit={onEdit} {...props}/></div></div>
  </div>
  </div>
 )
};

EditableTableCell.propTypes = {
  text:PropTypes.string,
  onClick: PropTypes.func,

};

EditableTableCell.defaultProps = {
  text: 'text',
  onEdit:()=> {return;}
};
