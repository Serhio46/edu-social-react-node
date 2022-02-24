import { IDialog } from 'models/IDialog';
import {
   DialogActionTypes,
   SetIsDialogLoading,
   SetDialogsAction,
   loadDialogsAction,
   SetDialogAction,
   RemoveDialogAction,
   CreateDialogAction,
} from 'store/reducers/dialogs/types';

export const DialogActionCreators = {
   setDialogs: (dialogs: IDialog[]): SetDialogsAction => ({
      type: DialogActionTypes.SET_DIALOGS,
      payload: dialogs,
   }),

   loadDialogs: (id: string): loadDialogsAction => ({
      type: DialogActionTypes.LOAD_DIALOGS,
      payload: id,
   }),

   setDialog: (dialog: IDialog): SetDialogAction => ({
      type: DialogActionTypes.SET_DIALOG,
      payload: dialog,
   }),

   setIsLoading: (isLoading: boolean): SetIsDialogLoading => ({
      type: DialogActionTypes.SET_IS_LOADING,
      payload: isLoading,
   }),

   removeDialogs: (): RemoveDialogAction => ({
      type: DialogActionTypes.REMOVE_DIALOGS,
   }),

   createDialog: (dialog: string): CreateDialogAction => ({
      type: DialogActionTypes.CREATE_DIALOG,
      payload: dialog,
   }),
};
