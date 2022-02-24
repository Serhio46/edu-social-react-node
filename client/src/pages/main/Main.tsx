import React, { FC, useEffect } from 'react';
import styless from 'pages/main/main.module.scss';
import { useDispatch } from 'react-redux';
import { AuthActionTypes } from 'store/reducers/auth/types';

const Main: FC = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch({ type: AuthActionTypes.AUTH_USER });
   }, []);

   return (
      <>
         <div>Main</div>
         <button className={styless.btn}>Add post</button>
      </>
   );
};

export default Main;
