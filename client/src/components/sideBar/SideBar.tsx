import React, { FC } from 'react';
import { Toolbar, List } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   myComponent: {
      padding: 0,
      width: '200px',
   },
});

const SideBar: FC = ({ children }) => {
   const classes = useStyles();
   return (
      <aside>
         <List className={classes.myComponent}>{children}</List>
      </aside>
   );
};

export default SideBar;
