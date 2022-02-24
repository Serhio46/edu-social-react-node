import React, { FC, useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Paper, Divider, Button, IconButton, Typography, Avatar } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import socketIOClient, { Socket } from 'socket.io-client';

import classes from './DialogMain.module.scss';
import DialogMessage from './DialogMessage';
import { useTypedSelector } from 'components/hooks/useTypedSelector';
import { IUser } from 'models/IUser';
import { IMessage } from 'models/IMessage';

import { messageActionCreators } from 'store/reducers/messages/messagesAction';

type Params = {
   dialogid: string;
};

const DialogMain: FC = () => {
   const [message, setMessage] = useState('');
   const [currentMessges, setCurrentMessages] = useState<IMessage[]>([]);
   const [companion, setCompanion] = useState<IUser>();
   const socket = useRef<Socket>();
   const scrollRef = useRef<HTMLElement>();

   console.log(currentMessges);

   const { dialogid } = useParams<Params>();
   const dialogs = useTypedSelector(({ dialogReducer }) => dialogReducer.dialogs);
   const { messages } = useTypedSelector(({ messageReducer }) => messageReducer);
   const { _id } = useTypedSelector(({ authReducer }) => authReducer.user);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(messageActionCreators.loadMessages(dialogid!));
      console.log('useEffect');

      /*      socket.current = new WebSocket('ws://localhost:5000/');
      socket.current.onopen = () => {
         console.log('Connection is OK');
      };
      socket.current.onmessage = (event: MessageEvent) => {
         console.log('Get message from server', event.data);
      }; */

      socket.current = socketIOClient('ws://localhost:5000/');

      socket.current.on('connect', () => {
         socket.current!.send('Hello!');
         socket.current!.on('welcome', (msg) => {
            console.log(msg);
         });
      });

      dialogs.filter(({ dialogItem, companion }) => {
         if (dialogItem === dialogid) {
            setCompanion(companion);
         }
      });

      return () => {
         dispatch(messageActionCreators.removeMessages());
      };
   }, []);

   useEffect(() => {
      socket.current!.on('sendMessage', (msg: string) => {
         console.log(msg);
         setCurrentMessages((prev) => [...prev, JSON.parse(msg)]);
      });
   }, []);

   useLayoutEffect(() => {
      console.log('layout');
      scrollRef.current?.scrollIntoView();
   }, [currentMessges]);

   const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value);
   };

   /*   const onSendMessage = (): void => {
      dispatch(
         messageActionCreators.createMessage({
            text: message,
            sander: _id,
            dialog: dialogid!,
         })
      );
      setMessage('');
   }; */

   const onSendMessage = () => {
      console.log('onSen');
      socket.current!.emit(
         'userMessage',
         JSON.stringify({
            text: message,
            sander: _id,
            dialog: dialogid!,
         })
      );
   };

   return (
      <div className={classes.wrapperContent}>
         <Paper elevation={5} className={classes.paper}>
            <div className={classes.header}>
               <Link to="/dialogs" className={classes.headerback}>
                  <IconButton>
                     <ArrowBackIosIcon />
                  </IconButton>
                  <Typography>back</Typography>
               </Link>
               <div className={classes.headerTitle}>
                  <Typography>
                     <b>{companion && companion!.userName}</b>
                  </Typography>
                  <Typography>last seen 30 min ago</Typography>
               </div>
               <Avatar></Avatar>
            </div>
            <Divider />
            <div className={classes.messages}>
               {currentMessges.map(({ _id, text, sander, updatedAt }, index) => {
                  return (
                     <DialogMessage
                        text={text}
                        sender={sander}
                        key={index}
                        updatedAt={updatedAt}
                        companion={companion}
                     />
                  );
               })}
               <span ref={scrollRef as React.RefObject<HTMLElement>}></span>
            </div>
            <Divider />
            <div className={classes.chat}>
               <textarea
                  value={message}
                  onChange={onChangeMessage}
                  className={classes.chatInput}
                  placeholder="write something"
               ></textarea>
               <Button variant="contained" onClick={onSendMessage}>
                  Send
               </Button>
            </div>
         </Paper>
      </div>
   );
};

export default DialogMain;
