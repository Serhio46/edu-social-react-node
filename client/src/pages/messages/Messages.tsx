import { RssFeed, Person, Group, Message, Groups, School } from '@mui/icons-material';
import RightBar from 'components/rightBar/RightBar';
import SideBar from 'components/sideBar/SideBar';
import SideBarItem from 'components/sideBarItem/SideBarItem';
import React, { FC } from 'react';
import { RoutesName } from 'routes';
import MessageMain from 'components/messages/MessageMain';

const Messages: FC = () => {
   return (
      <div className="container">
         <SideBar>
            <SideBarItem image={<RssFeed />} title={'News'} link={RoutesName.STUDENT_MAIN} />
            <SideBarItem image={<Person />} title={'My Profile'} link={RoutesName.PROFILE} />
            <SideBarItem image={<Group />} title={'Friends'} link={RoutesName.FRIENDS} />
            <SideBarItem image={<Message />} title={'Messgaes'} link={RoutesName.DIALOGS} />
            <SideBarItem image={<Groups />} title={'Groups'} link={RoutesName.GROUPS} />
            <SideBarItem image={<School />} title={'My courses'} link={RoutesName.COURSES} />
         </SideBar>
         <MessageMain />
         <RightBar />
      </div>
   );
};

export default Messages;
