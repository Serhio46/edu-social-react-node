import React, { FC } from 'react';
import MyButton from 'components/button/MyButton';
import classes from 'pages/login/login.module.scss';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
   email: Yup.string().email('Invalid email format').required('Required'),
   password: Yup.string().required('Required').min(3).max(12),
});

const Login: FC = () => {
   console.log('headre');
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      onSubmit: (values) => {
         console.log(values);
         const user = {
            email: values.email,
            password: values.password,
         };
      },
      validationSchema,
   });

   return (
      <div className={classes.wrapper}>
         <div className={classes.regForm}>
            <div className={classes.title}>
               <h3>Log In to EDUAll Account!</h3>
            </div>
            <Divider variant="fullWidth" />
            <form className={classes.form} onSubmit={formik.handleSubmit}>
               <div className={classes.formControl}>
                  <input
                     className={classes.input}
                     type="text"
                     placeholder="email"
                     id="email"
                     name="email"
                     onBlur={formik.handleBlur}
                     onChange={formik.handleChange}
                     value={formik.values.email}
                  />
                  {formik.touched.email && (
                     <div className={classes.error}>{formik.errors.email}</div>
                  )}
               </div>
               <div className={classes.formControl}>
                  <input
                     className={classes.input}
                     type="password"
                     placeholder="password"
                     id="password"
                     name="password"
                     onBlur={formik.handleBlur}
                     onChange={formik.handleChange}
                     value={formik.values.password}
                  />
                  {formik.touched.password && (
                     <div className={classes.error}>{formik.errors.password}</div>
                  )}
               </div>
               <MyButton type="submit" title="Log In" />
               <span className={classes.forgot}>Forgot Password?</span>
            </form>
            <div className={classes.signIn}>
               Don't have an account?
               <Link to="/register">
                  <span className={classes.signUp}>Sign up</span>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Login;
