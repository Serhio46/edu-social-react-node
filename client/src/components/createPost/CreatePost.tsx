import React, { FC } from 'react';
import classes from 'components/CreatePost/CreatePost.module.scss';

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

const CreatePost: FC = () => {
   const castomClasses = useStyles();

   const onCreatePost = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      console.log('rabotaet');
   };

   return (
      <Paper elevation={5} className={classes.paper}>
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
            }}
         >
            <Avatar className={classes.avatar}>
               <PersonIcon />
            </Avatar>
            <TextField InputProps={{ disableUnderline: true }} placeholder="Whats in your mind?" variant="standard" />
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
      </Paper>
   );
};

export default CreatePost;
