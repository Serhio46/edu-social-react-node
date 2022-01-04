import React, { FC } from 'react';
import classes from 'components/feed/feed.module.scss';
import CreatePost from 'components/createPost/CreatePost';

const Feed: FC = () => {
   return (
      <div className={classes.wrapper}>
         <CreatePost />
      </div>
   );
};

export default Feed;
