import {combineReducers} from "redux";
import {persistReducer, PersistConfig} from "redux-persist";
import storage from "redux-persist/lib/storage";
import toDoReducer, {ToDoSchema} from "./slices/toDoSlice";
import tagReducer, {TagSchema} from "./slices/tagSlice";

export interface ReduxState {
  toDo: ToDoSchema[];
  tags: TagSchema[];
}

const rootReducer = combineReducers({
  toDo: toDoReducer,
  tags: tagReducer
});

type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  whitelist: ['toDo', 'tags']
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);