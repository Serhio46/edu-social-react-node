import { IUserResponse } from 'models/IUserResponse';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createUser, signInUser, makeUserSession, logOutUser } from 'api/authApi';
import { AuthActionTypes, CreateUserAction, SignInAction } from 'store/reducers/auth/types';
import { AuthActionCreators } from 'store/reducers/auth/authAction';
import { IUser } from 'models/IUser';

//Sagas
function* signUp(action: CreateUserAction) {
   try {
      yield put(AuthActionCreators.setIsLoading(true));
      const userData: IUserResponse = yield call(createUser, action.payload);
      localStorage.setItem('token', userData.accessToken);
      yield put(AuthActionCreators.setUser(userData.user));
      yield put(AuthActionCreators.setAuth(true));
      yield put(AuthActionCreators.setIsLoading(false));
   } catch (error: any) {
      console.log(error.response.data);
   }
}

function* signIn(action: SignInAction) {
   try {
      yield put(AuthActionCreators.setIsLoading(true));
      const userData: IUserResponse = yield call(signInUser, action.payload);
      localStorage.setItem('token', userData.accessToken);
      yield put(AuthActionCreators.setUser(userData.user));
      yield put(AuthActionCreators.setAuth(true));
      yield put(AuthActionCreators.setIsLoading(false));
   } catch (error: any) {
      console.log(error.response.data);
   }
}

function* logOut() {
   console.log('saga logout');
   try {
      yield put(AuthActionCreators.setIsLoading(true));
      yield call(logOutUser);
      yield put(AuthActionCreators.setUser({} as IUser));
      yield put(AuthActionCreators.setAuth(false));
      yield put(AuthActionCreators.setIsLoading(false));
   } catch (error: any) {
      console.log(error.response.data);
   }
}

function* makeSession() {
   try {
      yield put(AuthActionCreators.setIsLoading(true));
      const userData: IUserResponse = yield call(makeUserSession);
      localStorage.setItem('token', userData.accessToken);
      yield put(AuthActionCreators.setUser(userData.user));
      yield put(AuthActionCreators.setAuth(true));
      yield put(AuthActionCreators.setIsLoading(false));
   } catch (error: any) {
      console.log(error.response.data);
   }
}

//Watcher

export function* authSaga() {
   yield takeEvery(AuthActionTypes.CREATE_USER, signUp);
   yield takeEvery(AuthActionTypes.LOGIN_USER, signIn);
   yield takeEvery(AuthActionTypes.AUTH_USER, makeSession);
   yield takeEvery(AuthActionTypes.LOGOUT_USER, logOut);
}

//put аналог диспатча, как и в thunk и redux, в неи вызываем эктион криэйтор
//take указывает вотчеру action.type при котором он должден запустить нужный warker
//call вызывает выполнение асинхронной функции, запроса например
//takeEvery на каждое нажатие запуститься функция в  вотчере, если хотим сделать debouns нужно юзать takeLatest, takeLeading ..., но немного допилить, тк запросы на сервер посылаются, тормозится только их обработка в саге
//эффекты take & call блокирующие, те код останавливаентся и ждет, take отстанавливает выполнеине саги, пока не произойдет диспатч этой саги в приложении
//call отсанавливает выполнение саги, пока не зарезолвится промис, который мы ему передали. Что бы этого избежать есть fork/, что позваляет делать несколько запросов параллельно
//если произойдет ошибка при форке в одлной из задач, ошибка вылетит в родитель и ляжет все, если нам важно что бы сработало хоть что-то , то есть такая штука как spawn
//spawn не привязывается к родителю, каждая задача живет сама по себе!, так же не блокирующий
//join может заблокиороватиь не блокирующую задачу и получить ее результат const people = yield join(task)
//select позволяет получить досчтуп к store как useSelect, эффект не блокирующий
