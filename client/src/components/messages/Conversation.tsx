import React, { FC } from 'react';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import moment from 'moment';

import UserInfoShort from 'components/userInfoShort/UserInfoShort';
import classes from './Conversation.module.scss';

interface PropsConv {
   id?: string;
   img?: string;
   userName: string;
   lastMessage?: string;
   time: string;
}

const Conversation: FC<PropsConv> = ({ id, userName, lastMessage, time }) => {
   const createTime = moment(time).fromNow();

   return (
      <Link to={`/dialogs/${id}`} style={{ color: 'black' }}>
         <div className={classes.wrapper}>
            <UserInfoShort userName={userName} />
            <p className={classes.lastMessage}>{lastMessage}</p>
            <div>{createTime}</div>
         </div>
         <Divider />
      </Link>
   );
};

export default Conversation;
