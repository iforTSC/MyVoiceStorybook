import React from 'react';
import PropTypes from 'prop-types';

import './formselect.scss';
export const FormSelect = ({showall, filter,  id, formslength, productname,productdetails}) => (
  

  <table className='form-menu'>
  {
      (productname && formslength > 1) && 
      <>
       <thead>
        <tr  key= {`${id}`}>
        <th className="table-title">{productname}</th>
          {showall? (<><th  className="table-headings table-headings--right table-headings--min">Views</th><th  className="table-headings table-headings--right table-headings--min">Submitted</th></>):<></>}
          <th  className="table-headings table-headings--date">Last edited</th>
        </tr>
        </thead>
      </>
      }
<tbody>
        {productdetails.map(productdetail => (
            <tr key= {`${id}_${productdetail.id}`}>
                  <td className='table-cell table-cell--fill  form-name'><span>{productdetail.name}</span></td>
                  {showall? (
                    <>
                      <td className='table-cell table-cell--numbers'>{productdetail.views}</td>
                      <td className='table-cell table-cell--numbers'>{productdetail.submitted}</td>
                    </>):<></>
                    }
                  <td className='table-cell table-cell--date'>{productdetail.date}</td>
            </tr>
          ))
        }
        
        {filter!='null' && (<tr><td colSpan={4} className='table-cell table-cell--footer'>({filter})</td></tr>)}
        </tbody>
</table>
);

FormSelect.propTypes = {
  showall: PropTypes.bool,
  filter: PropTypes.oneOf([null, 'Today', 'Last 7 Days', 'Last 30 days', 'Last 90 Days', 'Last 365 Days']),
};

FormSelect.defaultProps = {
  showall:true,
  filter:null
};

