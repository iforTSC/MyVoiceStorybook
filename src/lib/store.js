
/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
import { configureStore, createSlice } from '@reduxjs/toolkit';

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server. Let's not worry about that now
 */
const defaultContentItems = [
  {
    id:1,
    title:'defTitle1',
    help: 'Help1',
    placeholder:'Placeholder1',
    mapsto: 'Maps To1',
    show:{checked:true, disabled:false},
    mandatory:{checked:true, disabled:false}
  },
  {
    id:2,
    title:'defTitle2',
    help: 'Help2',
    placeholder:'Placeholder2',
    mapsto: 'Maps To2',
    show:{checked:true, disabled:false},
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
]
;
const ContentItemBoxData = {
  contentitems: defaultContentItems,
  status: 'idle',
  error: null,
};

export const  blankItem = {
  id:0,
  title:'New Title',
  help: 'New Help',
  placeholder:'New placeholder',
  mapsto: 'New maps to',
  show:{checked:false, disabled:false},
  mandatory:{checked:false, disabled:false}
}
/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 */
const ContentItemsSlice = createSlice({
  name: 'contentitembox',
  initialState: ContentItemBoxData,
 
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
    addContentItem: (state) => {
      let newItem = blankItem;
      newItem.id = 1 + state.contentitems.length;
      state.contentitems.push(newItem);
    }
  },
});

// The actions contained in the slice are exported for usage in our components
export const { updateContentItemOrder, updateContentItemStatus,updateContentItemText, addContentItem } = ContentItemsSlice.actions;

/*
 * Our app's store configuration goes here.
 * Read more about Redux's configureStore in the docs:
 * https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
  reducer: {
    contentitembox: ContentItemsSlice.reducer,
  },
});

export default store;