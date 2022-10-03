import React from 'react';

import { Form } from './Form';

export default {
  title: 'Form-Builder/Form',
  component: Form,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  
  decorators: [fs => 
  <div style={{margin:'3em'}}>
  {fs()}</div>],

  
};




const Template = (args) => <Form {...args} />;
export const Default = Template.bind({});
Default.args = {
   inputs:[
      { title: 'Title',
      label: 'Label',
      hint: 'Hint',
      input:"value",
      icon: null,
      required:true,
      textarea:false,
      textareaRows:4,
      validationType:"warning",
      validationMessage:"Validation message",
      showValidation:false,
      placeholder:"Enter some data"
    },
    { title: null,
      label: 'Label 4 text area',
      hint: 'Hint',
      input:"value",
      icon: null,
      required:true,
      textarea:true,
      textareaRows:4,
      validationType:"warning",
      validationMessage:"Validation message",
      showValidation:false,
      placeholder:"Enter some data"
    },
    { title: null,
      label: 'Time',
      hint: 'Hint',
      input:"value",
      icon: 'clock',
      required:true,
      textarea:false,
      textareaRows:4,
      validationType:"warning",
      validationMessage:"Validation message",
      showValidation:false,
      placeholder:"Enter some data"
    }

   ]
};


/*
text input*/