import axios, { AxiosResponse } from 'axios';
import { IMessage } from 'models/IMessage';
import { IMessageCreate } from 'models/IMessageCreate';

export const loadMessages = async (dialogItem: string): Promise<IMessage[]> => {
   try {
      const response = await axios.get(`http://localhost:5000/api/messages/${dialogItem}`);
      return response.data;
   } catch (error) {
      throw error;
   }
};

export const createMessage = async (message: IMessageCreate) => {
   const response = await axios.post('http://localhost:5000/api/messages/', message);
   return response.data;
};
