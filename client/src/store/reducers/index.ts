import { combineReducers } from 'redux';
import authReducer from 'store/reducers/auth/authReducer';
import dialogReducer from './dialogs/dialogsReducer';
import messageReducer from './messages/messagesReducer';

const rootReducer = combineReducers({
   authReducer,
   dialogReducer,
   messageReducer,
});

export default rootReducer;
