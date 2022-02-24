import { DialogsReducerState } from './types';
import { IDialog } from 'models/IDialog';
import { dialogsActions, DialogActionTypes } from './types';

const initialState: DialogsReducerState = {
   dialogs: [] as IDialog[],
   isLoading: false,
};

const dialogReducer = (state = initialState, action: dialogsActions): DialogsReducerState => {
   switch (action.type) {
      case DialogActionTypes.SET_IS_LOADING:
         return {
            ...state,
            isLoading: action.payload,
         };
      case DialogActionTypes.SET_DIALOGS:
         return {
            ...state,
            dialogs: action.payload,
         };
      case DialogActionTypes.SET_DIALOG:
         return {
            ...state,
         };
      default:
         return state;
   }
};

export default dialogReducer;
