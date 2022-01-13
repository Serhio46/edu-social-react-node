import Main from 'pages/main/Main';
import Registration from 'pages/registration/Registration';
import Login from 'pages/login/Login';

export interface IRoute {
   path: string;
   component: React.ComponentType;
}

export enum RoutesName {
   MAIN = '/',
   REGISTER = '/register',
   LOGIN = '/login',
   STUDENT_MAIN = '/student',
   TEACHER_MAIN = '/teacher',
   PROFILE = '/profile/:username',
   FRIENDS = '/friends',
   MESSAGES = '/messages',
   MESSAGE = '/messages/?userid',
}

export const publicRoutes: IRoute[] = [
   { path: RoutesName.MAIN, component: Main },
   { path: RoutesName.REGISTER, component: Registration },
   { path: RoutesName.LOGIN, component: Login },
];
