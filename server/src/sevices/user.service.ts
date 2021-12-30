import UserModel from '../model/user/user.model';
import Role from '../model/role/role.model';
import bcrypt from 'bcryptjs';
import tokenService from '../sevices/token.service';
import UpdateInterface from '../model/user/update.interface';

class UserService {
   async registartion(email: string, password: string, roles: string, userName: string) {
      const candidate = await UserModel.findOne({ email });
      if (candidate) {
         throw new Error(`User with email ${email} already exist`);
      }
      const hashPassword = await bcrypt.hash(password, 8);
      const userRole = await Role.findOne({ value: roles });
      if (!userRole) {
         throw new Error(`You can't register as ${roles}`);
      }
      if (!userName) userName = email;
      const user = new UserModel({
         email,
         password: hashPassword,
         roles: userRole.value,
         userName,
      });
      await user.save();
      const { password: pass, __v, ...other } = user.toJSON();
      const tokens = tokenService.generateToken({ id: user._id });
      await tokenService.saveToken(user._id, tokens.refreshToken);
      return {
         ...tokens,
         user: other,
      };
   }

   async deleteUser(currentUser: string, deletedUser: string) {
      if (currentUser !== deletedUser) {
         throw new Error('You cant delete this profile');
      }
      await UserModel.findByIdAndDelete(currentUser);
   }

   async updateUser(currentUser: string, deletedUser: string, body: UpdateInterface) {
      if (currentUser !== deletedUser) {
         throw new Error('You cant update this profile');
      }
      if (body.password) {
         const hashPassword = await bcrypt.hash(body.password, 8);
         body.password = hashPassword;
      }
      await UserModel.findByIdAndUpdate(currentUser, {
         $set: body,
      });
   }

   async getUser(targetUser: string) {
      const user = await UserModel.findById(targetUser);
      if (!user) {
         throw new Error('User not found');
      }
      const { password, __v, ...other } = user.toJSON();
      return other;
   }
}

export default new UserService();
