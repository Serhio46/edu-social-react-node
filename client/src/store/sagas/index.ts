import { all, fork } from 'redux-saga/effects';
import { watchAuth } from 'store/sagas/auth/authSaga';

export function* rootSaga() {
   yield all([fork(watchAuth)]);
   yield console.log('df');
}
