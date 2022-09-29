import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form-Builder/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: [button => <div style={{ background:'#fffffd', padding: '0.5em' }}>{button()}</div>],
};


const buttonClick = () => {
  alert('bc')
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <Button {...args} />;
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  size: 'regular',
  label: 'Button',
  onClick: buttonClick
};

export const Secondary = Template.bind({});
Secondary.args = {
  
  primary: false,
  label: 'Button',
  size: 'regular',
};

export const Full = Template.bind({});
Full.args = {
  primary: true,
  size: 'full',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  size: 'small',
  label: 'Button',
};

export const NavMenu = Template.bind({});
NavMenu.args={
    size: 'menu',
    label: 'Menu Item',
};

export const DDMenu = Template.bind({});
DDMenu.args={
    size: 'menuDD',
    label: 'DD Menu Item',
};

export const Select = Template.bind({});
Select.args={
    size: 'select',
    label: '',
    icon:'chevron-down'
};

export const Checkbox = Template.bind({});
Checkbox.args={
    size: 'checkbox',
    label: '',
    icon:'none'
};