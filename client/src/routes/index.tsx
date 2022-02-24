import Main from 'pages/main/Main';
import StudentMain from 'pages/studentMain/StudentMain';
import Registration from 'pages/registration/Registration';
import Login from 'pages/login/Login';
import Messages from 'pages/messages/Messages';
import Dialog from 'pages/dialog/Dialog';

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
   DIALOGS = '/dialogs',
   DIALOG = '/dialogs/:dialogid',
   GROUPS = '/groups',
   COURSES = '/mycourses',
}

export const publicRoutes: IRoute[] = [
   { path: RoutesName.MAIN, component: Main },
   { path: RoutesName.REGISTER, component: Registration },
   { path: RoutesName.LOGIN, component: Login },
];

export const studentRoutes: IRoute[] = [
   { path: RoutesName.STUDENT_MAIN, component: StudentMain },
   { path: RoutesName.PROFILE, component: StudentMain },
   { path: RoutesName.FRIENDS, component: StudentMain },
   { path: RoutesName.DIALOGS, component: Messages },
   { path: RoutesName.DIALOG, component: Dialog },
];
