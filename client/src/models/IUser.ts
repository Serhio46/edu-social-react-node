export interface IUser {
   _id: string;
   email: string;
   userName: string;
   roles: string[];
   avatar?: string;
   courses: string[];
   followers: string[];
   followings: string[];
   city: string;
}
