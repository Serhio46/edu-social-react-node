import axios from 'axios';
import * as APIauth from 'api/authApi';

describe('authApi', () => {
   jest.mock('axios');
   it('create user', async () => {
      const fakeUser = {
         email: 'serg@mail.ru',
         password: '123456',
         userName: 'Serg',
         roles: 'admin',
      };
      axios.post = jest.fn();
      const res = await APIauth.createUser(fakeUser);
      expect(axios.post).toHaveBeenCalled();
      expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/user', fakeUser);
   });

   it('logIn user', async () => {
      const userLogin = {
         email: 'serg',
         password: 'asdasd',
      };
      axios.post = jest.fn();
      const res = await APIauth.signInUser(userLogin);
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/auth/login', userLogin);
   });

   it('make session', async () => {
      axios.get = jest.fn().mockResolvedValue('asd');

      const res = await APIauth.makeUserSession();
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith('http://localhost:5000/api/auth', {
         headers: { Authorization: 'Bearer null' },
      });
   });

   it('log out', async () => {
      axios.post = jest.fn();
      const res = await APIauth.logOutUser();
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/auth/logout');
   });
});
