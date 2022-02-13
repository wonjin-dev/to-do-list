import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistedReducer} from './store/index';
import App from './App';

const store = createStore(persistedReducer);
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);