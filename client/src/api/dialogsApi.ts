import axios, { AxiosResponse } from 'axios';
import { IDialog } from 'models/IDialog';

export const loadDialogs = async (userId: string): Promise<IDialog[]> => {
   try {
      const dialogs = await axios.get(`http://localhost:5000/api/dialogs/${userId}`);
      return dialogs.data;
   } catch (error) {
      throw error;
   }
};
