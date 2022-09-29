import React from 'react';
import PropTypes from 'prop-types';

import { FormSelect } from './FormSelect';

import './formselectmenu.scss';
export const FormSelectMenu = ({ forms,user,showall, filter}) => (
  

  <>

  <div className="greeting">Hi {user.firstname}</div>
  

    {forms.map(form => (
        <FormSelect key={form.id} {...form} formslength={forms.length} showall={showall} filter={filter} />
      ))}

    
  </>
);


FormSelectMenu.propTypes = {
 
  showall: PropTypes.bool,
  filter: PropTypes.oneOf([null, 'Today', 'Last 7 Days', 'Last 30 days', 'Last 90 Days', 'Last 365 Days']),
 
};

FormSelectMenu.defaultProps = {
  showall:true,
  filter:'Today'
};
