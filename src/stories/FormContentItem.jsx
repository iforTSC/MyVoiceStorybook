import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import { EditableTableCell } from './EditableTableCell';
import './formselect.scss';

export const FormContentItem = ({formdetails, length, onMove, onCheck, onEdit}) => (
<table className='form-menu form-menu--select'>
{
    (length > 1) && 
  
  
     <thead>
      <tr>
        <th className="table-headings">Show</th>
        <th className="table-headings table-headings--left">Title</th>
        <th className="table-headings table-headings--left" >Help Text</th>
        <th className="table-headings table-headings--left">Input Placeholder</th>
        <th className="table-headings table-headings--left">Maps To</th>
        <th className="table-headings ">Mandatory</th>
        <th className="table-headings table-headings--left">Order</th>
       </tr>
       </thead>
       
    }
    <tbody>
      {formdetails.map((formdetail,index) => (
        
          <tr key= {formdetail.id}> 
            <td className='table-cell table-cell--icon'><Button size="checkbox" label="" onChange={() => onCheck(formdetail.id,'show')} checked={formdetail.show.checked} /></td>
            <td className='table-cell'><EditableTableCell  {...formdetail} onEdit={onEdit} /></td>
            <td className='table-cell'>{formdetail.help}</td>
            <td className='table-cell'>{formdetail.placeholder}</td>
            <td className='table-cell'>{formdetail.mapsto}</td>
            <td className='table-cell table-cell--icon'><Button size="checkbox" label="" onChange={() => onCheck(formdetail.id,'mandatory')} checked={formdetail.mandatory.checked}  disabled={formdetail.mandatory.disabled} /></td>
            <td className='table-cell table-cell--order '> 
            <div>
              {index > 0 ?  <Button  size="regular" label="" icon="chevron-up" onClick={() => onMove(formdetail.id,'up')}/>:<>&nbsp;</>}
              </div>
              <div>
              {index < length - 1 ? <Button  size="regular" label="" icon="chevron-down"  onClick={() => onMove(formdetail.id,'dn')}/>:<>&nbsp;</>}
              </div>
            </td>
          </tr>
        ))
      }
     </tbody>
</table>

);

/*
const moveup = (i) => {
  alert(`Swap ${i} with ${i-1}`)
}; 
*/
FormContentItem.propTypes = {
  onMoveUp: PropTypes.func,
};

FormContentItem.defaultProps = {
  /*onMoveUp: (i) => moveup(i)*/
};
