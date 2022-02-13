import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ToDoSchema {
  id: number;
  title: string;
  desc?: string;
  tags?: string;
  // 목표일 (DeaD-line Day)
  ddd?: string;
  // 생성일 (CReated Day)
  crd?: string;
  // 완료일 (CompleTe Day)
  ctd?: string;
  isCompleted?: boolean;
}

const initialState: ToDoSchema[] = [];

const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo (state: ToDoSchema[], action: PayloadAction<ToDoSchema>) {
      return [...state, action.payload]
    },
    deleteToDo (state: ToDoSchema[], action: PayloadAction<ToDoSchema>) {
      const cloneState = [...state];
      return cloneState.filter((todo: {id: number}) =>
        todo.id !== action.payload.id
      )
    },
    updateToDo(state: ToDoSchema[], action: PayloadAction<ToDoSchema>) {
      const cloneState = [...state];
      const origin = cloneState.filter((details: ToDoSchema) =>
        details.id !== action.payload.id
      );
      const newArr = [action.payload];
      return [...origin, ...newArr];
    }
  }
});
  
export const {addToDo, deleteToDo, updateToDo} = toDoSlice.actions;

export default toDoSlice.reducer;