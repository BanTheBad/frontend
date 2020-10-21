import { combineReducers } from 'redux';

// import reducers here
import { sampleReducer } from './modules/sample';

export default combineReducers({
  //attach reducers here
  sample: sampleReducer,
});
