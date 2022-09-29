import React from 'react';

import { Rollover } from './Rollover';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form-Builder/Rollover',
  component: Rollover,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: [ro => <div style={{ background:'#fffffd', padding: '8em' }}>{ro()}</div>],
};




// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <Rollover {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  position: 'above',
  rollovertext: 'text',
  icon:'info',
};