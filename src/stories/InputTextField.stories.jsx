import React from 'react';

import { InputTextField } from './InputTextField';

export default {
  title: 'Form-Builder/InputTextField',
  component: InputTextField,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    
  },
  
  decorators: [page => <div>
  <div style={{  margin: '3em' }} className="input-area">
  {page()}</div></div>],
};




const Template = (args) => <InputTextField {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: 'Title',
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
};

export const WithValidation = Template.bind({});
WithValidation.args={
  title: 'Title with Validation displayed',
  label: 'Label with Validation dispayed',
  hint: 'Hint with Validation',
  input:"value with Validation",
  icon: null,
  textarea:false,
  textareaRows:4,
  required:true,
  validationType:"error",
  validationMessage:"Input incorrect",
  showValidation:true,
  placeholder: Default.args.placeholder
};

