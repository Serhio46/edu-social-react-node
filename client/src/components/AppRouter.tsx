import React, { FC } from 'react';
import { RoutesName, publicRoutes, studentRoutes } from 'routes/index';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useTypedSelector } from './hooks/useTypedSelector';

const AppRouter: FC = () => {
   const { isAuth } = useTypedSelector(({ authReducer }) => authReducer);
   const { roles } = useTypedSelector(({ authReducer }) => authReducer.user);

   return (
      <>
         {!isAuth && (
            <Routes>
               {publicRoutes.map((route) => (
                  <Route path={route.path} element={<route.component />} key={route.path} />
               ))}
               <Route path="*" element={<Navigate to={RoutesName.MAIN} replace />} />
            </Routes>
         )}

         {isAuth && roles && roles[0] === 'student' && (
            <Routes>
               {studentRoutes.map((route) => {
                  return <Route path={route.path} element={<route.component />} key={route.path} />;
               })}
               {<Route path="*" element={<Navigate to={RoutesName.STUDENT_MAIN} replace />} />}
            </Routes>
         )}

         {/*   {isAuth && roles[0] === 'teacher' && (
            <Routes>
               {teacherRoutes.map((route) => {
                  return <Route path={route.path} element={<route.component />} key={route.path} />;
               })}
               <Route path="*" element={<Navigate to={RoutesName.STUDENT_MAIN} replace />} />
            </Routes>
         )} */}
      </>
   );
};

export default AppRouter;
