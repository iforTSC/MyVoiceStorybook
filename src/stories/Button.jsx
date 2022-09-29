import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, size, active, icon, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const classlist = ['storybook-button', `storybook-button--${size}` , mode]
  if (active){classlist.push( `storybook-button--${active}`)}
  if (icon){classlist.push(  `storybook-button--${icon}`)}

  switch( size){

    case 'checkbox' :
      return (<label className="checkbox"><input type="checkbox" {...props}/> <span>{label}</span></label>)  ;
      break;
      
    case 'select' :
      return (<label> <button  type="button"  className='storybook-button storybook-button--select storybook-button--chevron-down'    {...props} >     </button> </label>);
      break;
    default:
      return (<button  type="button"  className={classlist.join(' ')}    {...props} >    {label}  </button> );
  }
};
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'regular', 'full', 'menu', 'menuDD', 'select', 'checkbox']),

  
  icon: PropTypes.oneOf(['none', 'plus','chevron-up','chevron-down']),
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

};

Button.defaultProps = {
  primary: false,
  size: 'regular',
  
};
