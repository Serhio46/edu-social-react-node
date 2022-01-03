import jwt from 'jsonwebtoken';
import tokenModel from '../model/token/token.model';

class TokenService {
   generateToken(payload: Object) {
      const accessKey = process.env.JWT_ACCESS_SECRET as string;
      const refreshKey = process.env.JWT_REFRESH_SECRET as string;

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

   validateAccessToken(token: string) {
      try {
         const accessKey = process.env.JWT_ACCESS_SECRET as string;
         const userData = jwt.verify(token, accessKey);
         console.log(userData);
         return (<any>userData).id;
      } catch (error) {
         return null;
      }
   }

   validateRefreshToken(token: string) {
      try {
         const refreshKey = process.env.JWT_REFRESH_SECRET as string;
         const userData = jwt.verify(token, refreshKey);
         return (<any>userData).id;
      } catch (error) {
         return null;
      }
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

   async removeToken(refreshToken: string) {
      const tokenData = tokenModel.deleteOne({ refreshToken });
      return tokenData;
   }

   async findToken(token: string) {
      const tokenData = await tokenModel.findOne({ token });
      return tokenData;
   }
}

export default new TokenService();
