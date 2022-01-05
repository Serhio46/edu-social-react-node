import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import Badge from '@mui/material/Badge';
import { Person, Message, Notifications } from '@mui/icons-material';

interface Props {
   newFriends?: number;
   newMessage?: number;
   newNotif?: number;
}

const Notification: FC<Props> = ({ newFriends, newMessage, newNotif }) => {
   return (
      <div>
         <IconButton color="inherit">
            <Badge badgeContent={newFriends} color="error">
               <Person />
            </Badge>
         </IconButton>
         <IconButton color="inherit">
            <Badge badgeContent={newMessage} color="error">
               <Message />
            </Badge>
         </IconButton>
         <IconButton color="inherit">
            <Badge badgeContent={newNotif} color="error">
               <Notifications />
            </Badge>
         </IconButton>
      </div>
   );
};

export default Notification;
