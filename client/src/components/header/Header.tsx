import React, { FC } from 'react';
import Notification from 'components/header-notification/Notification';
import classes from './Header.module.scss';
import { Search, Login, Logout } from '@mui/icons-material';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTypedSelector } from 'components/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { AuthActionTypes } from 'store/reducers/auth/types';

const Header: FC = () => {
   const dispatch = useDispatch();
   const isAuth = useTypedSelector(({ authReducer }) => authReducer.isAuth);

   const logOut = (): void => {
      dispatch({ type: AuthActionTypes.LOGOUT_USER });
   };

   return (
      <div className={classes.header}>
         <div className={classes.wrapper}>
            <div className={classes.headerLogo}>
               <Link to="/">EDUAll</Link>
            </div>
            <div className={classes.headerSearch}>
               <div className={classes.containerSearch}>
                  <Search color="primary" fontSize="small" />
                  <input
                     className={classes.search}
                     placeholder="Here you can find different courses..."
                     type="text"
                  />
               </div>
            </div>
            <div className={classes.notification}>
               {isAuth ? (
                  <div className={classes.auth}>
                     <Notification newMessage={2} />
                     <IconButton onClick={logOut} color="inherit">
                        <Logout />
                     </IconButton>
                  </div>
               ) : (
                  <div className={classes.noAuth}>
                     <IconButton color="inherit">
                        <Link className={classes.link} to="/login">
                           <Login />
                        </Link>
                     </IconButton>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Header;
