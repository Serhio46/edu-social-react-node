import jwt from 'jsonwebtoken';
import tokenModel from '../model/token/token.model';

class TokenService {
   generateToken(payload: Object) {
      const accessKey = process.env.JWT_ACCESS_SECRET as string;
      const refreshKey = process.env.JWT_ACCESS_SECRET as string;

      const accessToken: string = jwt.sign(payload, accessKey, {
         expiresIn: '1h',
      });
      const refreshToken: string = jwt.sign(payload, refreshKey, {
         expiresIn: '30d',
      });
      return {
         accessToken,
         refreshToken,
      };
   }

   async saveToken(userId: string, refreshToken: string) {
      const tokenData = await tokenModel.findOne({ user: userId });
      if (tokenData) {
         tokenData.refreshToken = refreshToken;
         return tokenData.save();
      }
      const token = await tokenModel.create({ user: userId, refreshToken });
      return token;
   }
}

export default new TokenService();
