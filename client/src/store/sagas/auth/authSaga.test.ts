import { signUp, signIn, logOut, makeSession, authSaga } from './authSaga';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
   CreateUserAction,
   AuthActionTypes,
   SignInAction,
   LogOutAction,
} from '../../reducers/auth/types';
import { AuthActionCreators } from 'store/reducers/auth/authAction';
import * as authAPI from 'api/authApi';
import { IUser } from 'models/IUser';
import { IUserResponse } from 'models/IUserResponse';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { runSaga } from 'redux-saga';

jest.mock('api/authApi');

describe('authSaga branching', () => {
   const action: CreateUserAction = {
      type: AuthActionTypes.CREATE_USER,
      payload: {
         email: 'asd',
         password: '123456',
         userName: 'string',
         roles: 'student',
      },
   };
   const g = cloneableGenerator(signUp)(action);

   /*   it('put user to store if no errors', () => {
      const gClone = g.clone();

      expect(gClone.next().value).toEqual(put(AuthActionCreators.setIsLoading(true)));
      expect(gClone.next().value).toEqual(call(createUser, action.payload));

      const user: IUser = {
         _id: '1',
         email: 'asd',
         userName: 'string',
         roles: ['student'],
         avatar: 'string',
         courses: [],
         followers: [],
         followings: [],
         city: 'Minsk',
      };

      const userData: IUserResponse = {
         user,
         accessToken: 'asd',
         refreshToken: 'asd',
      };

      expect(gClone.next(userData).value).toEqual(put(AuthActionCreators.setUser(userData.user)));
      expect(gClone.next().value).toEqual(put(AuthActionCreators.setAuth(true)));
      expect(gClone.next().value).toEqual(put(AuthActionCreators.setIsLoading(false)));
      expect(gClone.next().done).toEqual(true);
   });

   it('inform user about errors', () => {
      const gClone = g.clone();
      gClone.next();
      //expect(gClone.throw({ message: 'asdas' }).value).toEqual(put(AuthActionCreators.setError));
   }); */

   it('authSagaSignUp', () => {
      const action: CreateUserAction = {
         type: AuthActionTypes.CREATE_USER,
         payload: {
            email: 'asd',
            password: '123456',
            userName: 'string',
            roles: 'student',
         },
      };
      const g = signUp(action);
      expect(g.next().value).toEqual(put(AuthActionCreators.setIsLoading(true)));
      expect(g.next().value).toEqual(call(authAPI.createUser, action.payload));

      const user: IUser = {
         _id: '1',
         email: 'asd',
         userName: 'string',
         roles: ['student'],
         avatar: 'string',
         courses: [],
         followers: [],
         followings: [],
         city: 'Minsk',
      };

      const userData: IUserResponse = {
         user,
         accessToken: 'asd',
         refreshToken: 'asd',
      };

      expect(g.next(userData).value).toEqual(put(AuthActionCreators.setUser(userData.user)));
      expect(g.next().value).toEqual(put(AuthActionCreators.setAuth(true)));
      expect(g.next().value).toEqual(put(AuthActionCreators.setIsLoading(false)));
      expect(g.next().done).toEqual(true);
   });
});

describe('full saga test signIn', () => {
   it('put user data to store', async () => {
      const user = { id: '123456' };
      const authAPIMock = authAPI as jest.Mocked<typeof authAPI>;

      authAPIMock.signInUser.mockResolvedValue(user);

      const action: SignInAction = {
         type: AuthActionTypes.LOGIN_USER,
         payload: {
            email: 'asd',
            password: '123456',
         },
      };
      const dispatched = [];
      await runSaga(
         {
            dispatch: (action) => dispatched.push(action),
            getState: () => ({ state: 'test' }),
         },
         signIn,
         action
      ).toPromise();

      expect(authAPIMock.signInUser).toHaveBeenCalledWith(action.payload);
   });
});

describe('full saga logOut', () => {
   it('log out', async () => {
      const action: LogOutAction = {
         type: AuthActionTypes.LOGOUT_USER,
      };
      const authAPIMock = authAPI as jest.Mocked<typeof authAPI>;
      await runSaga(
         {
            dispatch: (action) => action,
            getState: () => ({ state: 'test' }),
         },
         logOut
      ).toPromise();
      expect(authAPIMock.logOutUser).toHaveBeenCalledTimes(1);
   });
});

describe('full saga MakeSession', () => {
   const authAPIMock = authAPI as jest.Mocked<typeof authAPI>;
   it('make session', async () => {
      await runSaga(
         {
            dispatch: (action) => action,
            getState: () => ({ state: 'test' }),
         },
         makeSession
      ).toPromise();
      expect(authAPIMock.makeUserSession).toHaveBeenCalledTimes(1);
   });
});
describe('test saga calls', () => {
   it('call sagas', async () => {
      const g = authSaga();
      expect(g.next().value).toEqual(takeEvery(AuthActionTypes.CREATE_USER, signUp));
      expect(g.next().value).toEqual(takeEvery(AuthActionTypes.LOGIN_USER, signIn));
      expect(g.next().value).toEqual(takeEvery(AuthActionTypes.AUTH_USER, makeSession));
      expect(g.next().value).toEqual(takeEvery(AuthActionTypes.LOGOUT_USER, logOut));
   });
});
