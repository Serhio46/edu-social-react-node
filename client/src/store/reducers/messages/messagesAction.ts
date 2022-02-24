import { type } from '@testing-library/user-event/dist/type';
import { IMessage } from 'models/IMessage';
import { IMessageCreate } from 'models/IMessageCreate';

import {
   MessageActionTypes,
   setMessagesIsLoadingAction,
   loadMessagesAction,
   setMessagesAction,
   removeMessagesAction,
   createMessageAction,
   updateMessageLocal,
} from './types';

export const messageActionCreators = {
   setIsLoading: (isLoading: boolean): setMessagesIsLoadingAction => ({
      type: MessageActionTypes.SET_IS_MESSAGES_LOADING,
      payload: isLoading,
   }),

   loadMessages: (dialogId: string): loadMessagesAction => ({
      type: MessageActionTypes.LOAD_MESSAGES,
      payload: dialogId,
   }),

   setMessages: (messages: IMessage[]): setMessagesAction => ({
      type: MessageActionTypes.SET_MESSAGES,
      payload: messages,
   }),

   reloadMessages: () => ({
      type: MessageActionTypes.RELOAD_MESSAGES,
   }),

   removeMessages: (): removeMessagesAction => ({
      type: MessageActionTypes.REMOVE_MESSAGES,
   }),

   createMessage: (message: IMessageCreate): createMessageAction => ({
      type: MessageActionTypes.CREATE_MESSAGE,
      payload: message,
   }),

   updateMessage: (message: IMessage): updateMessageLocal => ({
      type: MessageActionTypes.UPDATE_MESSAGES_LOCAL,
      payload: message,
   }),
};
