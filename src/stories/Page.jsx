import React from 'react';
import PropTypes from 'prop-types';
import './page.scss';
export const Page = ({heading, subheading, content=['para1', 'para2'] }) => (
  

  
  
  <div className="card">
    <div className="card-heading">{heading}</div>
    <div className="card-subheading">{subheading}</div>
    
    
    {content.map(para => (
        <p className="card-text">{para}</p>
      ))}
  </div>
);

Page.propTypes = {
  
  heading: PropTypes.string,
  subheading: PropTypes.string,
  content: PropTypes.array,
};

Page.defaultProps = {
 heading: 'This Is The Card Heading',
 subheading: 'This Is The Card Subheading',
 content:['para1','para2','para3']
};
