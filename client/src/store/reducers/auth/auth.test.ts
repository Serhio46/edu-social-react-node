import { IUser } from 'models/IUser';
import { AuthActionCreators } from './authAction';
import authReducer from './authReducer';
import { AuthReducerState, AuthActionTypes, CreateUserAction } from './types';
import { signUp } from 'store/sagas/auth/authSaga';
import { ISignUp } from 'models/ISignUp';

let initialState: AuthReducerState;

describe('authReduser', () => {
   beforeEach(() => {
      initialState = {
         user: {} as IUser,
         isLoading: false,
         isAuth: false,
      };
   });

   it('setUser', () => {
      const userSession: IUser = {
         _id: '0',
         email: 'asd@Ads',
         userName: 'Vasil',
         roles: ['student'],
         avatar: 'string',
         courses: [],
         followers: [],
         followings: [],
         city: 'Minsk',
      };

      const newState = authReducer(initialState, AuthActionCreators.setUser(userSession));
      expect(newState.isAuth).toBeFalsy();
      expect(newState.isLoading).toBeFalsy();
      expect(newState.user.userName).toBe('Vasil');
   });

   it('setAuth', () => {
      const newState = authReducer(initialState, AuthActionCreators.setAuth(true));
      expect(newState.isAuth).toBeTruthy();
      expect(newState.user.userName).toBeFalsy();
   });

   it('setIsLoading', () => {
      const newState = authReducer(initialState, AuthActionCreators.setIsLoading(true));
      expect(newState.isLoading).toBeTruthy();
   });
});
