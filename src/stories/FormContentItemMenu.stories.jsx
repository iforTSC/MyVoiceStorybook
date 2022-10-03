import React from 'react';

import FormContentItemMenu from './FormContentItemMenu';
import * as FormContentItemStories from './FormContentItem.stories';

import { Provider } from 'react-redux';

import { configureStore, createSlice } from '@reduxjs/toolkit';


// A super-simple mock of the state of the store
export const MockedState = {
  contentitems: [
    {
      id:1,
      title:'mockdefTitle1',
      help: 'Help1',
      placeholder:'Placeholder1',
      mapsto: 'Maps To1',
      show:{checked:true, disabled:false},
      mandatory:{checked:true, disabled:true}
    },
    {
      id:2,
      title:'defTitle2',
      help: 'Help2',
      placeholder:'Placeholder2',
      mapsto: 'Maps To2',
      show:{checked:false, disabled:false},
      mandatory:{checked:true, disabled:false}
    },
    {
      id:3,
      title:'defTitle3',
      help: 'Help3',
      placeholder:'Placeholder3',
      mapsto: 'Maps To3',
      show:{checked:true, disabled:false},
      mandatory:{checked:true, disabled:false}
    }
  ],
  status: 'idle',
  total:3,
  error: null,
};



// A super-simple mock of a redux store
const Mockstore = ({ contentitemboxState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        contentitembox: createSlice({
          name: 'contentitembox',
          initialState: contentitemboxState,
          reducers: {
            updateContentItemOrder: (state, action) => {
              
              const { id, dir } = action.payload;

                const contentitem = state.contentitems.findIndex((contentitem) => contentitem.id === id);
                let storeitem = null;
                let pos = (dir==='up'? contentitem - 1 : contentitem + 1 )
                  storeitem = state.contentitems[pos];
                  state.contentitems[pos] = state.contentitems[contentitem];
                  state.contentitems[contentitem] = storeitem;
            },
            updateContentItemStatus: (state, action) => {
              const { id, attr } = action.payload;
              const contentitem = state.contentitems.findIndex((contentitem) => contentitem.id === id);
              let checked = state.contentitems[contentitem][attr].checked;
              state.contentitems[contentitem][attr].checked = !checked;
            },
            updateContentItemText: (state, action) => {
              const { id, attr, content } = action.payload;
              const contentitem = state.contentitems.findIndex((contentitem) => contentitem.id === id);
              
              state.contentitems[contentitem][attr] = content;
            },
            addContentItem: (state, action) => {
              state.total = 1 + state.total
              let newId = state.total;
              const   newItem = {
                id:newId,
                title:'New Title',
                help: 'New Help',
                placeholder:'New placeholder',
                mapsto: 'New maps to',
                show:{checked:false, disabled:false},
                mandatory:{checked:false, disabled:false}
              }
              state.contentitems.push(newItem);
            }
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export default {
  component: FormContentItemMenu,
  title: 'Form-Builder/FormContentItemMenu',
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*MockedState$/,
};

const Template = (args) => <FormContentItemMenu {...args}/>;

export const Default = Template.bind({});
Default.args = {
  rollovertext:"Rollover text of some description",
  rolloverposition:"above"
  };
Default.decorators = [
  (story) => <Mockstore contentitemboxState={MockedState}>{story()}</Mockstore>,
];




/*import React from 'react';

import { FormContentItemMenu } from './FormContentItemMenu';
export default {
  title: 'Form-Builder/FormContentItemMenu',
  component: FormContentItemMenu,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  
decorators: [fcim => <div>
  <header>
    <div className="header"></div>
  </header>
  <div style={{ margin: '3em' }}>
  {fcim()}</div></div>],
};




const Template = (args) => <FormContentItemMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
  formdetails:[{
    id:1,
    title:'Title1',
    help: 'Help1',
    placeholder:'Placeholder1',
    mapsto: 'Maps To1',
  },
  {
    id:2,
    title:'Title2',
    help: 'Help2',
    placeholder:'Placeholder2',
    mapsto: 'Maps To2',
  },
  {
    id:3,
    title:'Title3',
    help: 'Help3',
    placeholder:'Placeholder3',
    mapsto: 'Maps To3',
  }
]
        
};

*/