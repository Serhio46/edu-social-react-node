import React, { FC } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

interface PropsItem {
   image: any;
   title: string;
   link: string;
   onClick?: () => void;
}

const useStyles = makeStyles({
   myComponent: {
      padding: 0,
   },
   myLink: {
      color: 'black',
   },
});

const SideBarItem: FC<PropsItem> = ({ image, title, link, onClick }) => {
   const classes = useStyles();
   return (
      <Link onClick={onClick} to={link} className={classes.myLink}>
         <ListItem button className={classes.myComponent}>
            <ListItemIcon>{image}</ListItemIcon>
            <ListItemText>{title}</ListItemText>
         </ListItem>
      </Link>
   );
};

export default SideBarItem;
