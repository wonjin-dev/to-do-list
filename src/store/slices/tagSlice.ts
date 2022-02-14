import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TagSchema {
  title: string;
  bgColor: string;
  fontColor?: string;
  created?: number;
}

const initialState: TagSchema[] = [];

const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTag (state: TagSchema[], action: PayloadAction<TagSchema>) {
      const newState = [...state]
      const index = newState.findIndex((tags) => {
        return tags.title === action.payload.title
      });
      if(index > 0) {
        return newState;
      } else {
        newState.push({...action.payload, created: Date.now()});
        return newState;
      }
    }
  }
});

export const {addTag} = tagSlice.actions;

export default tagSlice.reducer;