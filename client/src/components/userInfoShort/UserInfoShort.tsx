import React, { FC } from 'react';
import { Box, Avatar, Typography } from '@material-ui/core';
import Badge from '@mui/material/Badge';

interface PropsUser {
   userName?: string;
}

const UserInfoShort: FC<PropsUser> = ({ userName }) => {
   const name = userName?.split(' ')[0];
   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '5px 15px',
         }}
      >
         <Badge variant="dot" color="success">
            <Avatar></Avatar>
         </Badge>
         <Typography variant="inherit" component="span">
            {userName ? name : ''}
         </Typography>
      </Box>
   );
};

export default UserInfoShort;
