import React from 'react';

import { InputDropdown } from './InputDropdown';

export default {
  title: 'Form-Builder/InputDropdown',
  component: InputDropdown,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    
  },
  
  decorators: [page => <div>
  <div style={{  margin: '3em' }}>
  {page()}</div></div>],
};




const Template = (args) => <InputDropdown {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  label: 'Label',
  hint: 'Hint',
  prompt:'Select',
  
  inputAll: ['OptionA', 'OptionB', 'OptionC'],
  prompt:'Select',
  required:true,
  validationType:"warning",
  validationMessage:"Validation message",
  showValidation:false,
};

export const WithValidation = Template.bind({});
WithValidation.args={
  title: 'Title with Validation displayed',
  label: 'Label with Validation dispayed',
  hint: 'Hint with Validation',
  
  inputAll: ['OptionA', 'OptionB', 'OptionC'],
  prompt:'Select',
  required:true,
  validationType:"error",
  validationMessage:"Input incorrect",
  showValidation:true,
};

