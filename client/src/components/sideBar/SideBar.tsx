import React, { FC } from 'react';
import { Toolbar, List } from '@material-ui/core';
import SideBarItem from 'components/sideBarItem/SideBarItem';
import { RssFeed, Group, Message, Groups, School, Person } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   myComponent: {
      padding: 0,
      width: '200px',
   },
});

const SideBar: FC = () => {
   const classes = useStyles();
   return (
      <aside>
         <List className={classes.myComponent}>
            <SideBarItem image={<RssFeed />} title={'News'} />
            <SideBarItem image={<Person />} title={'MyProfile'} />
            <SideBarItem image={<Group />} title={'Friends'} />
         </List>
      </aside>
   );
};

export default SideBar;
