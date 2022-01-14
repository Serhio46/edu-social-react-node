import { IUser } from 'models/IUser';
import { ISignUp } from 'models/ISignUp';
import { ILogin } from 'models/ILogin';

export interface AuthReducerState {
   user: IUser;
   isAuth: boolean;
   isLoading: boolean;
}

export enum AuthActionTypes {
   SET_IS_AUTH = 'SET_IS_AUTH',
   SET_USER = 'SET_USER',
   SET_IS_LOADING = 'SET_IS_LOADING',
   CREATE_USER = 'CREATE_USER',
   LOGIN_USER = 'LOGIN_USER',
   LOGOUT_USER = 'LOGOUT_USER',
   AUTH_USER = 'AUTH_USER',
}
export interface SetUserAction {
   type: AuthActionTypes.SET_USER;
   payload: IUser;
}
export interface SetIsAuthAction {
   type: AuthActionTypes.SET_IS_AUTH;
   payload: boolean;
}
export interface SetIsLoadingAction {
   type: AuthActionTypes.SET_IS_LOADING;
   payload: boolean;
}
export interface CreateUserAction {
   type: AuthActionTypes.CREATE_USER;
   payload: ISignUp;
}
export interface SignInAction {
   type: AuthActionTypes.LOGIN_USER;
   payload: ILogin;
}
export interface MakeSessionAction {
   type: AuthActionTypes.AUTH_USER;
}

export interface LogOutAction {
   type: AuthActionTypes.LOGOUT_USER;
}

export type AuthActions = SetUserAction | SetIsAuthAction | SetIsLoadingAction | CreateUserAction;
