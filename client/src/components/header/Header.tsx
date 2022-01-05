import React, { FC } from 'react';
import Notification from 'components/header-notification/Notification';
import classes from './Header.module.scss';
import { Search, Login, Logout } from '@mui/icons-material';
import { IconButton } from '@material-ui/core';

const Header: FC = () => {
   const isAuth: boolean = true;

   return (
      <div className={classes.header}>
         <div className={classes.wrapper}>
            <div className={classes.headerLogo}>EDUAll</div>
            <div className={classes.headerSearch}>
               <div className={classes.containerSearch}>
                  <Search color="primary" fontSize="small" />
                  <input className={classes.search} placeholder="Here you can find different courses..." type="text" />
               </div>
            </div>
            <div className={classes.notification}>
               {isAuth ? (
                  <div className={classes.auth}>
                     <Notification newMessage={2} />
                     <IconButton color="inherit">
                        <Logout />
                     </IconButton>
                  </div>
               ) : (
                  <div className={classes.noAuth}>
                     <IconButton color="inherit">
                        <Login />
                     </IconButton>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Header;
