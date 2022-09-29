import React from 'react';
import PropTypes from 'prop-types';

import './universalcolourchart.scss';
export const UCT = ({ colours, shades }) => {
  return (
    <div style={{display:'flex', flexFlow:'wrap'}}>
       {colours.map(colour => (
        <div style={{margin: '2em 3em', display:'flex',  flexFlow:'column', minWidth:'170px'}}>
          <div style={{textTransform:'capitalize', margin:'0 0 8px 0'}}>{colour}</div>
          {shades.map(shade => (
             <div style={{display:'flex', margin:'4px 0'}}>
            <div className={`uct uct-${colour.replace(/\s+/g, '')}--${shade}`}></div>
            <div style={{display:'flex', flexFlow:'column', fontSize:'11px', marginLeft:'8px', textTransform:'capitalize'}}>
              <div>{shade}</div>
              <div className={`hex-${colour.replace(/\s+/g, '')}--${shade}`}></div>
            </div>
            </div>
          ))}
          
        </div>
      ))}
      <div style={{margin: '2em 3em', display:'flex',  flexFlow:'column', minWidth:'170px'}}>
          <div style={{textTransform:'capitalize', margin:'0 0 8px 0'}}>Text</div>
         
             <div style={{display:'flex', margin:'4px 0'}}>
            <div className={`uct uct-text--main`}></div>
            <div style={{display:'flex', flexFlow:'column', fontSize:'11px', marginLeft:'8px', textTransform:'capitalize'}}>
              <div>Main</div>
              <div className={`hex-text--main`}></div>
            </div>
            </div>
            <div style={{display:'flex', margin:'4px 0'}}>
            <div className={`uct uct-text--light`}></div>
            <div style={{display:'flex', flexFlow:'column', fontSize:'11px', marginLeft:'8px', textTransform:'capitalize'}}>
              <div>Light</div>
              <div className={`hex-text--light`}></div>
            </div>
            </div>
            <div style={{display:'flex', margin:'4px 0'}}>
            <div className={`uct uct-text--light`}></div>
            <div style={{display:'flex', flexFlow:'column', fontSize:'11px', marginLeft:'8px', textTransform:'capitalize'}}>
              <div>Lighter</div>
              <div className={`hex-text--light`}></div>
            </div>
            </div>
          
        </div>
    </div>
  );
};



UCT.propTypes = {
 /* user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onNavigateHome: PropTypes.func,
  onNavigateFormBuilder: PropTypes.func,
  onNavigateSettings: PropTypes.func,
  onShowDropDown: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,*/
};

UCT.defaultProps = {
  /*user: null,
  page:null,
  show:false*/
};
