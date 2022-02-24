import { all, spawn, call } from 'redux-saga/effects';
import { authSaga } from 'store/sagas/auth/authSaga';
import { dialogSaga } from 'store/sagas/dialogs/dialogSaga';
import { messagesSaga } from 'store/sagas/messages/messagesSaga';

export function* rootSaga(): any {
   const sagas = [authSaga, dialogSaga, messagesSaga];
   const retrySagas = yield sagas.map((saga) => {
      return spawn(function* () {
         while (true) {
            try {
               yield call(saga);
               break;
            } catch (e) {
               console.log(e);
            }
         }
      });
   });
   yield all(retrySagas);
}

//yield all([spawn(watchAuth), spawn(saga2), spawn(saga3) ]); можно саги в корневу собрать так, здесб all работает как промисолл, те если ляжет, то все не. из плюсов корневая сага запуститься сразу
/* function* rootSag() {
	yield all([spawn(watchAuth), spawn(saga2), spawn(saga3) ])
} */

//yield all([fork(watchAuth), fork(saga2), fork(saga3) ]); можно саги в корневу собрать так, здесб all работает как промисолл, те если ляжет, то все не. из плюсов корневая сага запуститься сразу
/* function* rootSag() {
	yield all([fork(watchAuth), fork(saga2), fork(saga3) ])
} */
// Напротив каждой саги yield, принцип как и в верху
/* function* rootSag() {
	yield fork(watchAuth);
	yield fork(saga2);
	yield fork(saga3);
} */

//Практически хорошо делать spawn, саги разделены, код не блокируется, все ок, но может понадобиться перезапустить упавшую сагу, поэтому лучше всего пятый способ
/* function* rootSag() {
   yield spawn(watchAuth);
   yield spawn(saga2);
   yield spawn(saga3);
} */

//Пятый способ
/* export function* rootSaga(): any {
   const sagas = [watchAuth];
   const retrySagas = yield sagas.map((saga) => {
      return spawn(function* () {
         while (true) {
            try {
               yield call(saga);
               break;
            } catch (e) {
               console.log(e);
            }
         }
      });
   });
   yield all(retrySagas);
} */
