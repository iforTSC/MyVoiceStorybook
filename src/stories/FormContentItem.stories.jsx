import React from 'react';

import { FormContentItem } from './FormContentItem';

export default {
  title: 'Form-Builder/FormContentItem',
  component: FormContentItem,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  
  decorators: [fci => 
  <div style={{margin:'3em'}}>
  {fci()}</div>],

  
};




const Template = (args) => <FormContentItem {...args} />;
export const Default = Template.bind({});
Default.args = {
  formdetails:[{
    id:1,
    title:'Title',
    help: 'Help',
    placeholder:'Placeholder',
    mapsto: 'Maps To',
    show:{checked:true},
    mandatory:{checked:true, disabled:false}
  }]
};

