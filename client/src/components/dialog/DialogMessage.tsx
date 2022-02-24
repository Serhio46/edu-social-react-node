import { Avatar, Typography } from '@material-ui/core';
import moment from 'moment';
import React, { FC } from 'react';
import classNames from 'classnames';
import UserInfoShort from 'components/userInfoShort/UserInfoShort';
import classes from './DialogMessage.module.scss';
import { useTypedSelector } from 'components/hooks/useTypedSelector';
import { IUser } from 'models/IUser';

interface PropMessage {
   sender: string;
   text: string;
   updatedAt?: string;
   companion?: IUser;
}

const DialogMessage: FC<PropMessage> = ({ sender, text, updatedAt, companion }) => {
   const { _id, userName } = useTypedSelector(({ authReducer }) => authReducer.user);

   const owner = _id === sender;
   const sendTime = moment(updatedAt).fromNow();
   const messageSender = _id === sender ? userName : companion?.userName;

   const mainClass = classNames(classes.message, { [classes.own]: owner });
   return (
      <div className={mainClass}>
         <div className={classes.messageTop}>
            <UserInfoShort userName={messageSender} />
            <div className={classes.messageText}>
               <p>{text}</p>
               <div className={classes.messageBottom}>{sendTime}</div>
            </div>
         </div>
      </div>
   );
};

export default DialogMessage;
