import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import hotels from 'reducers/hotels';

const appReducer = combineReducers({
  router: routerReducer,
  hotels,
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
};

export default rootReducer;
