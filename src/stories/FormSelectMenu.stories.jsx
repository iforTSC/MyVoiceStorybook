import React from 'react';

import { FormSelectMenu } from './FormSelectMenu';
export default {
  title: 'Form-Builder/FormSelectMenu',
  component: FormSelectMenu,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  
decorators: [fsm => <div>
  <header>
    <div className="header"></div>
  </header>
  <div style={{ margin: '3em' }}>
  {fsm()}</div></div>],
};




const Template = (args) => <FormSelectMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
  showall:true,
  user:{
firstname:"Jane",
secondname:"Doe"
  }, 
  forms: [
            {
              id:1,
              productname:"Product Name",
              productdetails:
                  [
                    {id:'p1f1',name: 'Form about ....' ,date:"01/01/2020" , views:100, submitted:50, filter:'Today'},
                    {id:'p1f2',name: 'Form about1 ....' ,date:"01/01/2020" , views:100, submitted:50, filter:'Today'}
                  ]
            }
            ,
            { 
              id:2,
              productname:"Product2 Name",
              productdetails:
                [
                  {id:'p2f1',name: '2ndForm about ....' ,date:"01/01/2020" , views:100, submitted:50, filter:'Today'},
                  {id:'p2f2',name: '2nd Form about1 ....' ,date:"01/01/2020" , views:100, submitted:50, filter:'Today'}
              ]
            }
          ]
        
};

