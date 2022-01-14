import { IUser } from 'models/IUser';
import {
   AuthActionTypes,
   SetUserAction,
   SetIsAuthAction,
   SetIsLoadingAction,
} from 'store/reducers/auth/types';

export const AuthActionCreators = {
   setUser: (user: IUser): SetUserAction => ({
      type: AuthActionTypes.SET_USER,
      payload: user,
   }),
   setAuth: (auth: boolean): SetIsAuthAction => ({
      type: AuthActionTypes.SET_IS_AUTH,
      payload: auth,
   }),
   setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
      type: AuthActionTypes.SET_IS_LOADING,
      payload: isLoading,
   }),
};
