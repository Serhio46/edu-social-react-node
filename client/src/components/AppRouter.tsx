import React, { FC } from 'react';
import { RoutesName, publicRoutes } from 'routes/index';
import { Route, Routes, Navigate } from 'react-router-dom';

const AppRouter: FC = () => {
   return (
      <>
         {
            <Routes>
               {publicRoutes.map((route) => {
                  return <Route path={route.path} element={<route.component />} key={route.path} />;
               })}
               <Route path="*" element={<Navigate to={RoutesName.MAIN} replace />} />
            </Routes>
         }
      </>
   );
};

export default AppRouter;
