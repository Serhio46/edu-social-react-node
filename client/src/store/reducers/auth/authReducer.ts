import { AuthReducerState, AuthActions, AuthActionTypes } from 'store/reducers/auth/types';
import { IUser } from 'models/IUser';

const initialState: AuthReducerState = {
   user: {} as IUser,
   isLoading: false,
   isAuth: false,
};

const authReducer = (state = initialState, action: AuthActions): AuthReducerState => {
   switch (action.type) {
      case AuthActionTypes.SET_USER:
         return {
            ...state,
            user: action.payload,
         };
      case AuthActionTypes.SET_IS_AUTH:
         return {
            ...state,
            isAuth: action.payload,
         };
      case AuthActionTypes.SET_IS_LOADING:
         return {
            ...state,
            isLoading: action.payload,
         };
      default:
         return state;
   }
};

export default authReducer;
