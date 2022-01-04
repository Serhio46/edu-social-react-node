import UserModel from '../model/user/user.model';
import tokenService from './token.service';
import bcrypt from 'bcryptjs';
import ApiError from '../exceptions/api-error';

class AuthService {
   async logIn(email: string, password: string) {
      const user = await UserModel.findOne({ email });
      if (!user) {
         throw ApiError.BadRequest(`User with email ${email} not found`);
      }
      const isPassValid = bcrypt.compareSync(password, user.password);
      if (!isPassValid) {
         throw ApiError.BadRequest(`Wrong email or password`);
      }
      const tokens = tokenService.generateToken({ id: user._id });
      await tokenService.saveToken(user._id, tokens.refreshToken);
      const { password: pass, __v, ...other } = user.toJSON();
      return {
         ...tokens,
         user: other,
      };
   }

   async logOut(refreshToken: string) {
      const token = await tokenService.removeToken(refreshToken);
      return token;
   }

   async refreshToken(refreshToken: string) {
      if (!refreshToken) {
         throw ApiError.UnauthorizedError();
      }
      const userData = tokenService.validateRefreshToken(refreshToken);
      const tokenFromDB = tokenService.findToken(refreshToken);
      const user = await UserModel.findById(userData);
      if (!userData || !tokenFromDB || !user) {
         throw ApiError.UnauthorizedError();
      }
      const tokens = tokenService.generateToken({ id: user._id });
      await tokenService.saveToken(user._id, tokens.refreshToken);
      const { password: pass, __v, ...other } = user.toJSON();
      return {
         ...tokens,
         user: other,
      };
   }

   async makeSession(userId: string) {
      const user = await UserModel.findById(userId);
      if (!user) {
         throw ApiError.UnauthorizedError();
      }
      const tokens = tokenService.generateToken({ id: user._id });
      await tokenService.saveToken(user._id, tokens.refreshToken);
      const { password: pass, __v, ...other } = user.toJSON();
      return {
         ...tokens,
         user: other,
      };
   }
}

export default new AuthService();
