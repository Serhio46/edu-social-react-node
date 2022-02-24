import { IDialog } from 'models/IDialog';

export interface DialogsReducerState {
   dialogs: IDialog[];
   isLoading: boolean;
}

export enum DialogActionTypes {
   SET_IS_LOADING = 'SET_IS_LOADING_DIALOGS',
   LOAD_DIALOGS = 'LOAD_DIALOGS',
   SET_DIALOGS = 'SET_DIALOGS',
   REMOVE_DIALOGS = 'REMOVE_DIALOGS',
   SET_DIALOG = 'SET_DIALOG',
   CREATE_DIALOG = 'CREATE_DIALOG',
}

export interface SetDialogsAction {
   type: DialogActionTypes.SET_DIALOGS;
   payload: IDialog[];
}

export interface loadDialogsAction {
   type: DialogActionTypes.LOAD_DIALOGS;
   payload: string;
}

export interface RemoveDialogAction {
   type: DialogActionTypes.REMOVE_DIALOGS;
}

export interface SetDialogAction {
   type: DialogActionTypes.SET_DIALOG;
   payload: IDialog;
}

export interface SetIsDialogLoading {
   type: DialogActionTypes.SET_IS_LOADING;
   payload: boolean;
}

export interface CreateDialogAction {
   type: DialogActionTypes.CREATE_DIALOG;
   payload: string;
}

export type dialogsActions =
   | SetDialogsAction
   | RemoveDialogAction
   | SetDialogAction
   | SetIsDialogLoading
   | CreateDialogAction;
