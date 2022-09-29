import React from 'react';
import PropTypes from 'prop-types';
import './rollover.scss';
import './globalStyles/icons.scss';

/**
 * Primary UI component for user interaction
 */


 const roll = (evt) => {
  let ro = evt.target.getElementsByClassName("rollover")
  if(ro.length > 0){
    ro[0].style.visibility ="visible"
  }
};

const out = (evt) => {
  let ro = evt.target.getElementsByClassName("rollover")
  if(ro.length > 0){
    ro[0].style.visibility ="hidden"
  }
};

export const Rollover = ({ position, rollovertext, icon, ...props }) => {
 return(
  <span className="rollover-container icon-bg-info" onMouseOver={(e)=>roll(e)} onMouseOut={(e)=>out(e)}>
      
    <div className={`rollover rollover--${position}`} style={{visibility:'hidden'}}>
      <div>{rollovertext}</div>
    </div>
  </span>
 )
};

Rollover.propTypes = {
  
  position: PropTypes.oneOf(['above', 'below', 'left', 'right']),

  
  icon: PropTypes.oneOf(['info']),
  /**
   * Button contents
   */
   rollovertext: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

};

Rollover.defaultProps = {
  position: 'above',
  rollovertext: 'text',
  icon:'info'
};
