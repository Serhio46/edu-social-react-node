import { combineReducers } from 'redux';
import authReducer from 'store/reducers/auth/authReducer';

const rootReducer = combineReducers({
   authReducer,
});

export default rootReducer;
