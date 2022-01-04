import React, { FC } from 'react';
import { Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   myComponent: {
      margin: '10px 0',
   },
   wrapper: {
      width: '300px',
   },
});

const RightBar: FC = () => {
   const classes = useStyles();
   return (
      <div className={classes.wrapper}>
         <Typography>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
         </Typography>
         <Divider />
         <div>
            <Typography className={classes.myComponent}>Online Friends</Typography>
            {/*  <UserInfoShort /> */}
         </div>
      </div>
   );
};

export default RightBar;
