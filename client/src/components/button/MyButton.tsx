import React, { FC } from 'react';
import { Button, ButtonTypeMap } from '@material-ui/core';

interface PropButton {
   title: string;
   type: any;
}

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   myComponent: {
      color: '#ffff',
      background: 'royalblue',
      padding: '5px 50px',
   },
});

const MyButton: FC<PropButton> = ({ title, type }) => {
   const clas = useStyles();
   return (
      <Button type={type} variant="contained" className={clas.myComponent}>
         {title}
      </Button>
   );
};

export default MyButton;
