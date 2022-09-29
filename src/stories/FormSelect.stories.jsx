import React from 'react';

import { FormSelect } from './FormSelect';

export default {
  title: 'Form-Builder/FormSelect',
  component: FormSelect,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  
  decorators: [fs => 
  <div style={{margin:'3em'}}>
  {fs()}</div>],

  
};




const Template = (args) => <FormSelect {...args} />;
export const Default = Template.bind({});
Default.args = {
    showall:true,
    id:1,
    productname:null,
    productdetails:[{name: 'Form about ....' ,date:"01/01/2020" , views:100, submitted:50 }],
    filter: null
};


/*
text input*/