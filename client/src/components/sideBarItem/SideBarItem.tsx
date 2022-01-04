import React, { FC } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface PropsItem {
   image: any;
   title: string;
}

const useStyles = makeStyles({
   myComponent: {
      padding: 0,
   },
});

const SideBarItem: FC<PropsItem> = ({ image, title }) => {
   const classes = useStyles();
   return (
      <ListItem button className={classes.myComponent}>
         <ListItemIcon>{image}</ListItemIcon>
         <ListItemText>{title}</ListItemText>
      </ListItem>
   );
};

export default SideBarItem;
