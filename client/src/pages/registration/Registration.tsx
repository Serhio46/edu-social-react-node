import React, { FC } from 'react';
import MyButton from 'components/button/MyButton';
import classes from 'pages/registration/registration.module.scss';
import { Divider } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
   userName: Yup.string().required('Required'),
   email: Yup.string().email('Invalid email format').required('Required'),
   password: Yup.string().required('Required').min(3).max(12),
   confirmPassword: Yup.string()
      .required('Require')
      .oneOf([Yup.ref('password'), null]),
});

const Registration: FC = () => {
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
         confirmPassword: '',
         userName: '',
         roles: '',
      },
      onSubmit: (values) => {
         const user = {
            email: values.email,
            userName: values.userName,
            password: values.password,
            roles: values.roles,
         };
         console.log(user);
      },
      validationSchema,
   });

   return (
      <div className={classes.wrapper}>
         <div className={classes.regForm}>
            <div className={classes.title}>
               <h3>Sign Up and Start Learning!</h3>
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
               <div className={classes.formControl}>
                  <input
                     className={classes.input}
                     type="password"
                     placeholder="confirm password"
                     id="confirmPassword"
                     name="confirmPassword"
                     onBlur={formik.handleBlur}
                     onChange={formik.handleChange}
                     value={formik.values.confirmPassword}
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                     <div className={classes.error}>Password should match</div>
                  )}
               </div>
               <div className={classes.formControl}>
                  <input
                     className={classes.input}
                     type="text"
                     placeholder="user name"
                     id="userName"
                     name="userName"
                     onBlur={formik.handleBlur}
                     onChange={formik.handleChange}
                     value={formik.values.userName}
                  />
                  {formik.touched.userName && (
                     <div className={classes.error}>{formik.errors.userName}</div>
                  )}
               </div>
               <div className={classes.radio}>
                  <div>
                     <input
                        type="radio"
                        id="student"
                        value="student"
                        name="roles"
                        onChange={formik.handleChange}
                     />
                     <label htmlFor="student">Student</label>
                  </div>
                  <div>
                     <input
                        type="radio"
                        id="teacher"
                        value="teacher"
                        name="roles"
                        onChange={formik.handleChange}
                     />
                     <label htmlFor="teacher">Teacher</label>
                  </div>
               </div>
               <MyButton type="submit" title="Sign In" />
            </form>
            <div className={classes.signIn}>
               Elready have an account? <a>LogIn</a>
            </div>
         </div>
      </div>
   );
};

export default Registration;
