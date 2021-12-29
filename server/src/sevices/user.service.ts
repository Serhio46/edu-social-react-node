import UserModel from '../model/user/user.model';
import Role from '../model/role/role.model';
import bcrypt from 'bcryptjs';
import tokenService from '../sevices/token.service';

class UserService {
   async registartion(
      email: string,
      password: string,
      roles: string,
      userName: string
   ) {
      const candidate = await UserModel.findOne({ email });
      if (candidate) {
         throw new Error(`User with email ${email} already exist`);
      }
      const hashPassword = await bcrypt.hash(password, 8);
      //const userRole = await Role.findOne({ value: roles });
      if (!userName) userName = email;
      const user = await UserModel.create({
         email,
         password: hashPassword,
         roles,
         userName,
      });
      await user.save();
      const { password: pass, __v, ...other } = user;
      const tokens = tokenService.generateToken(user._id);
      //await tokenService.saveToken(user._id, tokens.refreshToken);

      return {
         ...tokens,
         user: other,
      };
   }
}

export default new UserService();
