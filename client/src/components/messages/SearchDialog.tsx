import React from 'react';
import { Paper, Divider } from '@material-ui/core';
import { Search } from '@mui/icons-material';

import classes from './Search.module.scss';
import UserInfoShort from 'components/userInfoShort/UserInfoShort';

const friends = [
   { userName: 'Slava', img: 'string', id: 1 },
   { userName: 'Semen', img: 'string', id: 2 },
   { userName: 'Ihar', img: 'string', id: 3 },
   { userName: 'Vadim', img: 'string', id: 4 },
   { userName: 'Leila', img: 'string', id: 5 },
   { userName: 'Olga', img: 'string', id: 6 },
];

const SearchDialog = () => {
   return (
      <Paper elevation={5} className={classes.paper}>
         <div className={classes.searchContainer}>
            <Search color="primary" fontSize="small" />
            <div>
               <input
                  className={classes.search}
                  placeholder="Here you can find different courses..."
                  type="text"
               />
            </div>
         </div>
         <Divider />
         <div className={classes.friends}>
            {friends.map(({ userName, img, id }) => {
               return <UserInfoShort userName={userName} key={id} />;
            })}
         </div>
      </Paper>
   );
};

export default SearchDialog;
