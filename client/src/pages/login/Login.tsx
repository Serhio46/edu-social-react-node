import React, { FC } from 'react';
import MyButton from 'components/button/MyButton';
import classes from 'pages/login/login.module.scss';
import { Divider } from '@material-ui/core';

const Login: FC = () => {
   return (
      <div className={classes.wrapper}>
         <div className={classes.regForm}>
            <div className={classes.title}>
               <h3>Log In to EDUAll Account!</h3>
            </div>
            <Divider variant="fullWidth" />
            <form className={classes.form}>
               <input className={classes.input} type="text" placeholder="email" />
               <input className={classes.input} type="password" placeholder="password" />
               <MyButton title="Log In" />
               <span className={classes.forgot}>Forgot Password?</span>
            </form>
            <div className={classes.signIn}>
               Don't have an account? <a>Sign up</a>
            </div>
         </div>
      </div>
   );
};

export default Login;
