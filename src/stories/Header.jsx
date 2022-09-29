import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './header.scss';
export const Header = ({ buttons, user, page, show, onLogin, onLogout, onNavToPortal, onShowDropDown }) => (
  

  
  
  <header>
    <div className="header">
      <div  className="header-inner">
      <div className="svg-wrapper">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#323742"/>
            <path d="M22.8889 18.25C22.8889 18.6478 22.7295 19.0294 22.4457 19.3107C22.1619 19.592 21.777 19.75 21.3757 19.75H12.2962L9.26978 22.75V10.75C9.26978 10.3522 9.42921 9.97064 9.71299 9.68934C9.99678 9.40804 10.3817 9.25 10.783 9.25H21.3757C21.777 9.25 22.1619 9.40804 22.4457 9.68934C22.7295 9.97064 22.8889 10.3522 22.8889 10.75V18.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div className ="product-name">FormBuilder</div>
    {user || page? (<div className ="header-menu">

  
    {buttons.map(button => (
        <Button size="menu" key={button.id} active={page.name===button.name?'active':''} label={button.name} />
      ))}

    </div>):<></>}
</div>


      <div  className="header-inner">
        {user || page ? (
          <>
            <span className="welcome">{user.name}</span>
            <Button size="select" onClick={onShowDropDown} label=""  icon="chevron-down"/>
            {show &&<div className="dropdown">
            <div className="dropdown-inner dropdown-inner--down">  
            <Button size="menuDD" onClick={onLogout} label="Log out" /><br/>
            <Button size="menuDD" onClick={onNavToPortal} label="Portal" />
            </div>
            </div>    
            }
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onNavigateHome: PropTypes.func,
  onNavigateFormBuilder: PropTypes.func,
  onNavigateSettings: PropTypes.func,
  onShowDropDown: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
  page:null,
  show:false
};
