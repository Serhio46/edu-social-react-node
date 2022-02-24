import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import { dialogsActions, DialogActionTypes, loadDialogsAction } from 'store/reducers/dialogs/types';
import { DialogActionCreators } from 'store/reducers/dialogs/dialogsAction';
import * as dialogsAPI from 'api/dialogsApi';
import { IDialog } from 'models/IDialog';

export function* loadDialogs(action: loadDialogsAction): SagaIterator {
   try {
      yield put(DialogActionCreators.setIsLoading(true));
      const dialogsData: IDialog[] = yield call(dialogsAPI.loadDialogs, action.payload);
      yield put(DialogActionCreators.setDialogs(dialogsData));
      yield put(DialogActionCreators.setIsLoading(false));
   } catch (error) {}
}

//watcher

export function* dialogSaga(): SagaIterator {
   yield takeEvery(DialogActionTypes.LOAD_DIALOGS, loadDialogs);
}
