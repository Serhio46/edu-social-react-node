import React, { FC } from 'react';
import classes from './Header.module.scss';

const Header: FC = () => {
   return (
      <div className={classes.header}>
         <div className={classes.wrapper}>
            <div className={classes.headerLogo}>EDUAll</div>
            <div className={classes.container}>Here will be search</div>
            <div className={classes.notification}>Here will be notifications</div>
         </div>
      </div>
   );
};

export default Header;
