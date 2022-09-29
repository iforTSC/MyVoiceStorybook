import React from 'react';

import { UCT } from './UniversalColourChart';

export default {
  title: 'Form-Builder/UniversalColourChart',
  component: UCT,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  
  decorators: [uct => <div>
  <header>
  <div className="header"><div className="header-inner"><h2>Universal Colour Chart</h2></div></div>
  </header>
  <div style={{ margin: '3em' }}>
  {uct()}</div></div>],
};




const Template = (args) => <UCT {...args} />;
export const Default = Template.bind({});
Default.args = {
    colours:['safeguarding blue','wisdom blue', 'protected teal','calming violet','hopeful yellow', 'growth green', 'confident cyan','concern red'],
    shades:['main', 'dark',  'darker', 'darkest', 'light', 'lighter', 'lightest-1', 'lightest-2', 'lightest-3']
};


