import { messagesReducerState, MessagesActions, MessageActionTypes } from './types';
import { IMessage } from 'models/IMessage';

const initialState: messagesReducerState = {
   messages: [] as IMessage[],
   isLoading: false,
};

const messageReducer = (state = initialState, action: MessagesActions): messagesReducerState => {
   switch (action.type) {
      case MessageActionTypes.SET_IS_MESSAGES_LOADING:
         return {
            ...state,
            isLoading: action.payload,
         };
      case MessageActionTypes.SET_MESSAGES:
         return {
            ...state,
            messages: action.payload,
         };
      case MessageActionTypes.REMOVE_MESSAGES:
         return {
            ...state,
            messages: [] as IMessage[],
         };
      case MessageActionTypes.UPDATE_MESSAGES_LOCAL:
         const newMessages = [...state.messages];
         newMessages.push(action.payload);
         return {
            ...state,
            messages: newMessages,
         };
      default:
         return state;
   }
};

export default messageReducer;
