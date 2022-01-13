import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Main: FC = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      console.log('try');
      dispatch({ type: 'LOAD_USER' });
   }, []);

   return <div>Main</div>;
};

export default Main;
