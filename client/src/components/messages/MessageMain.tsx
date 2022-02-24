import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import classes from './MessagesMain.module.scss';
import Conversation from './Conversation';
import SearchDialog from './SearchDialog';
import { Paper } from '@material-ui/core';
import { useTypedSelector } from 'components/hooks/useTypedSelector';

const MessageMain: FC = () => {
   const { dialogs } = useTypedSelector(({ dialogReducer }) => dialogReducer);

   return (
      <div className={classes.wrapper}>
         <SearchDialog />
         <Paper elevation={5} className={classes.paper}>
            {dialogs &&
               dialogs.map(({ dialogItem, companion, lastMessage }) => {
                  return (
                     <Conversation
                        id={dialogItem}
                        userName={companion.userName}
                        lastMessage={lastMessage!.text}
                        time={lastMessage!.updatedAt}
                        key={companion._id}
                     />
                  );
               })}
         </Paper>
      </div>
   );
};

export default MessageMain;
