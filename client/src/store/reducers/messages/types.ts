import { type } from '@testing-library/user-event/dist/type';
import { IMessage } from 'models/IMessage';
import { IMessageCreate } from 'models/IMessageCreate';

export interface messagesReducerState {
   messages: IMessage[];
   isLoading: boolean;
}

export enum MessageActionTypes {
   SET_IS_MESSAGES_LOADING = 'SET_IS_MESSAGES_LOADING',
   LOAD_MESSAGES = 'LOAD_MESSAGES',
   SET_MESSAGES = 'SET_MESSAGES',
   RELOAD_MESSAGES = 'RELOAD_MESSAGES',
   REMOVE_MESSAGES = 'REMOVE_MESSAGES',
   CREATE_MESSAGE = 'CREATE_MESSAGE',
   UPDATE_MESSAGES_LOCAL = 'UPDATE_MESSAGES_LOCAL',
}

export interface setMessagesIsLoadingAction {
   type: MessageActionTypes.SET_IS_MESSAGES_LOADING;
   payload: boolean;
}

export interface loadMessagesAction {
   type: MessageActionTypes.LOAD_MESSAGES;
   payload: string;
}

export interface setMessagesAction {
   type: MessageActionTypes.SET_MESSAGES;
   payload: IMessage[];
}

export interface reloadMessagesAction {
   type: MessageActionTypes.RELOAD_MESSAGES;
}

export interface removeMessagesAction {
   type: MessageActionTypes.REMOVE_MESSAGES;
}

export interface createMessageAction {
   type: MessageActionTypes.CREATE_MESSAGE;
   payload: IMessageCreate;
}

export interface updateMessageLocal {
   type: MessageActionTypes.UPDATE_MESSAGES_LOCAL;
   payload: IMessage;
}

export type MessagesActions =
   | setMessagesIsLoadingAction
   | loadMessagesAction
   | setMessagesAction
   | removeMessagesAction
   | createMessageAction
   | updateMessageLocal;
