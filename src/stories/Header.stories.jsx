import React from 'react';

import { Header } from './Header';

export default {
  title: 'Form-Builder/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};


const logout = () => {alert('log out')
};

const ntp = () => {alert('ntp')
};


const Template = (args) => <Header {...args} />;
export const Default = Template.bind({});
Default.args = {
  buttons: [
    {  id: '1', name: 'Home' , nav:'NavigateHome' },
    {  id: '2', name: 'Form Builder', nav:'NavigateFormBuilder' },
    {  id: '3', name: 'Settings', nav:'NavigateSettings' },
  ],
  user: {
    name: 'Jane Doe',
  },
  page: {
    name: 'Home',
  },
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  buttons: [
    ...Default.args.buttons],
    user: Default.args.user,
    page: Default.args.page,
 
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};



export const ShowDropDown = Template.bind({});
ShowDropDown.args = {
  buttons: [
    ...Default.args.buttons],
 user: Default.args.user,
  page: Default.args.page,
  onLogout: logout,
  onNavToPortal: ntp,
  show:true,
};


export const NavigateHome = Template.bind({});
NavigateHome.args = {
  buttons: [
    ...Default.args.buttons],
 
    user: Default.args.user,
 page: Default.args.page,
  
};

export const NavigateFormBuilder= Template.bind({});
NavigateFormBuilder.args = {
  buttons: [
    ...Default.args.buttons],
  page: {
    name: "Form Builder",
  }, 
  user: Default.args.user,
};


export const NavigateSettings = Template.bind({});
NavigateSettings.args = {
  buttons: [
    ...Default.args.buttons],
  page: {
    name: 'Settings',
  }, 
  user: Default.args.user,
};
