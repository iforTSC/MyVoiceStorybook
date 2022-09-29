import React from 'react';

import { Page } from './Page';

export default {
  title: 'Form-Builder/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  
  decorators: [page => <div>
  <header>
    <div className="header"></div>
  </header>
  <div style={{ margin: '3em' }}>
  {page()}</div></div>],
};




const Template = (args) => <Page {...args} />;
export const Default = Template.bind({});
Default.args = {
  heading:'Heading For the Page',
  subheading:'Subheading For the Page',
 content:['Para1']
};


