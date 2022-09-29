import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateContentItemOrder,updateContentItemStatus } from '../lib/store';

import {FormContentItem } from './FormContentItem';

import { Rollover } from './Rollover';
import { Button } from './Button';
import './formcontentitemmenu.scss';

export default function FormContentItemMenu({rollovertext, rolloverposition}){
//export const  FormContentItemMenu =   () => {
 //We're retrieving our state from the store
  const contentitems = useSelector((state) => {
    const formDetails = state.contentitembox.contentitems;
    return formDetails;
  });

  const { status } = useSelector((state) => state.contentitembox);

  const dispatch = useDispatch();
  
  
  const move = (value, direction) => {
  
    dispatch(updateContentItemOrder({ id: value, dir:direction }));
}; 

const check = (value, attribute) => {
  
  dispatch(updateContentItemStatus({ id: value, attr:attribute }));
};
  
    return (
      <>
        <div className="form-title">Safeguarding Form</div>
        <Rollover position={rolloverposition} icon="info" rollovertext={rollovertext}></Rollover>
        <FormContentItem formdetails={contentitems}  length={ contentitems.length} onMove={move} onCheck={check} />
        <Button primary={true} size="regular" label="Add Custom Field"/>
    </>
  );
    }



/*

export const FormContentItemMenu = ({ formdetails, onMoveUp}) => (
  
<FormContentItem formdetails={formdetails}  length={ formdetails.length} onMoveUp={onMoveUp} />
   

);*/


FormContentItemMenu.propTypes = {
 
  rolloverposition: PropTypes.oneOf(['above', 'below', 'left', 'right']),
  rollovertext: PropTypes.string,
 
};

FormContentItemMenu.defaultProps = {

 rolloverposition: 'above',
  rollovertext: 'ro text',
};


