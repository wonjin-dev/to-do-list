import {combineReducers} from "redux";
import {persistReducer, PersistConfig} from "redux-persist";
import storage from "redux-persist/lib/storage";
import toDoReducer, {ToDoSchema} from "./slices/toDoSlice";

export interface ReduxState {
  toDo: ToDoSchema[];
}

const rootReducer = combineReducers({
  toDo: toDoReducer
});

type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  whitelist: ['toDo']
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);