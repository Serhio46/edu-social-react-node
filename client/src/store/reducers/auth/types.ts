import { IUser } from 'models/IUser';

export interface AuthReducerState {
   user: IUser;
   isAuth: boolean;
   isLoading: boolean;
}

export enum AuthActionTypes {
   SET_IS_AUTH = 'SET_IS_AUTH',
   SET_USER = 'SET_USER',
   SET_IS_LOADING = 'SET_IS_LOADING',
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

export type AuthActions = SetUserAction | SetIsAuthAction | SetIsLoadingAction;
