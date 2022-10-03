import React from 'react';

import { EditableTableCell } from './EditableTableCell';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form-Builder/EditableTableCell',
  component: EditableTableCell,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: [etc => <div style={{ background:'ghhostwhite', padding: '3em' }}>{etc()}</div>],
};




// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <EditableTableCell {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  position: 'above',
  text: 'text',
  icon:'pen',
};