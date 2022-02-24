import React, { FC, useEffect, useState } from 'react';
import classes from 'components/CreatePost/CreatePost.module.scss';
import axios from 'axios';

import { Paper, Box, Divider, Avatar, Typography, TextField, Button } from '@material-ui/core';
import PersonIcon from '@mui/icons-material/Person';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TagIcon from '@mui/icons-material/Tag';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   myComponent: {
      fontSize: '10px',
   },
});

type IPost = {
   userId: string;
   id: string;
   title: string;
   body: string;
};

type IUSer = {
   id: number;
   name: string;
};
const getUser = (): Promise<IUSer> =>
   new Promise((res, rej) => {
      res({ id: 1, name: 'Semen' });
      rej(new Error('something went wrong'));
   });

const URL = 'https://jsonplaceholder.typicode.com/posts?limit=10';

const CreatePost: FC = () => {
   const castomClasses = useStyles();

   const [user, setUser] = useState<IUSer>();
   const [posts, setPosts] = useState<IPost[]>([]);

   useEffect(() => {
      const loadUser = async () => {
         const user = await getUser();
         setUser(user);
      };
      loadUser();
   }, []);

   const handleFetch = async () => {
      try {
         const posts = await axios.get<IPost[]>(URL);
         setPosts(posts.data);
      } catch (error) {}
   };

   const onCreatePost = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      setUser({ id: 1, name: 'Serhio' });
   };

   return (
      <Paper elevation={5} className={classes.paper}>
         <img src="" alt="avatar" />
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
            }}
         >
            <Avatar className={classes.avatar}>
               {user && <div>Logged in {user.name}</div>}
               <PersonIcon />
            </Avatar>
            <TextField
               InputProps={{ disableUnderline: true }}
               placeholder="Whats in your mind?"
               variant="standard"
            />
         </Box>
         <Divider variant="middle" />
         <form className={classes.form} onSubmit={onCreatePost}>
            <label className={classes.label} htmlFor="file">
               <AddAPhotoIcon htmlColor="tomato" />
               <Typography className={castomClasses.myComponent}>Add photo</Typography>
               <input
                  style={{ display: 'none' }}
                  type="file"
                  id="file"
                  accept=".png, .jpeg, .jpg"
                  //onChange={handleChangeFile}
               />
            </label>
            <div className={classes.label}>
               <TagIcon htmlColor="blue" />
               <Typography className={castomClasses.myComponent}>Tag</Typography>
            </div>
            <div className={classes.label}>
               <AddLocationAltIcon htmlColor="green" />
               <Typography className={castomClasses.myComponent}>Location</Typography>
            </div>
            <div className={classes.label}>
               <SentimentSatisfiedAltIcon htmlColor="goldenrod" />
               <Typography className={castomClasses.myComponent}>Feelings</Typography>
            </div>
            <Button type="submit" variant="outlined">
               Share
            </Button>
         </form>
         <ul>
            {posts.map(({ title, id, body }) => {
               return (
                  <li key={id}>
                     <h2>{title}</h2>
                     <p>{body}</p>
                  </li>
               );
            })}
         </ul>

         <button onClick={handleFetch}>Get posts</button>
      </Paper>
   );
};

export default CreatePost;
