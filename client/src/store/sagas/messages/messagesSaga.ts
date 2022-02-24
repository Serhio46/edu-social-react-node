import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import { IMessage } from 'models/IMessage';
import * as messgesAPI from 'api/messagesApi';
import { loadMessagesAction, createMessageAction } from '../../reducers/messages/types';
import { messageActionCreators } from '../../reducers/messages/messagesAction';
import { MessageActionTypes } from '../../reducers/messages/types';

export function* loadMessages(action: loadMessagesAction): SagaIterator {
   yield put(messageActionCreators.setIsLoading(true));
   const messages: IMessage[] = yield call(messgesAPI.loadMessages, action.payload);
   yield put(messageActionCreators.setMessages(messages));
   yield put(messageActionCreators.setIsLoading(false));
}

export function* reloadMessage(): SagaIterator {
   yield put(messageActionCreators.setIsLoading(true));
   yield put(messageActionCreators.removeMessages());
   yield put(messageActionCreators.setIsLoading(false));
}

export function* createMessage(action: createMessageAction): SagaIterator {
   yield put(messageActionCreators.setIsLoading(true));
   const response: IMessage = yield call(messgesAPI.createMessage, action.payload);
   yield put(messageActionCreators.updateMessage(response));
   yield put(messageActionCreators.setIsLoading(false));
}

//watcher

export function* messagesSaga(): SagaIterator {
   yield takeEvery(MessageActionTypes.LOAD_MESSAGES, loadMessages);
   yield takeEvery(MessageActionTypes.RELOAD_MESSAGES, reloadMessage);
   yield takeEvery(MessageActionTypes.CREATE_MESSAGE, createMessage);
}
