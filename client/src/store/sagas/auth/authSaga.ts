import axios from 'axios';
import { IUser } from 'models/IUser';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AuthActionTypes } from 'store/reducers/auth/types';
import { AuthActionCreators } from 'store/reducers/auth/authAction';

const getUser = async () => {
   const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
   return response.data;
};

const createUser = (user: IUser): Promise<IUser> => {
   return axios.post('http://localhost:5000/api/auth/login', user);
};

export function* setUser(): any {
   const user = yield call(getUser);
   console.log(user);
   yield put(AuthActionCreators.setUser(user));
}

export function* watchAuth() {
   console.log('watcher');
   yield takeLatest('LOAD_USER', setUser);
}

//put аналог диспатча, как и в thunk и redux, в неи вызываем эктион криэйтор
//take указывает вотчеру action.type при котором он должден запустить нужный warker
//call вызывает выполнение асинхронной функции, запроса например
//takeEvery на каждое нажатие запуститься функция в  вотчере, если хотим сделать debouns нужно юзать takeLatest, takeLeading ...
//эффекты take & call блокирующие, те код останавливаентся и ждет, take отстанавливает выполнеине саги, пока не произойдет диспатч этой саги в приложении
//call отсанавливает выполнение саги, пока не зарезолвится промис, который мы ему передали. Что бы этого избежать есть fork/, что позваляет делать несколько запросов параллельно
//если произойдет ошибка при форке в одлной из задач, ошибка вылетит в родитель и ляжет все, если нам важно что бы сработало хоть что-то , то есть такая штука как spawn
//spawn не привязывается к родителю, каждая задача живет сама по себе!, так же не блокирующий
//join может заблокиороватиь не блокирующую задачу и получить ее результат const people = yield join(task)
//select позволяет получить досчтуп к store как useSelect, эффект не блокирующий
