import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  reducer from '../store/reducer';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export type AppState = ReturnType<typeof store.getState>;

export default store;