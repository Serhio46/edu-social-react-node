import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'components/hooks/useTypedSelector';
import { DialogActionCreators } from 'store/reducers/dialogs/dialogsAction';
import SideBar from 'components/sideBar/SideBar';
import Feed from 'components/feed/Feed';
import RightBar from 'components/rightBar/RightBar';
import SideBarItem from 'components/sideBarItem/SideBarItem';
import { RssFeed, Group, Message, Groups, School, Person } from '@mui/icons-material';
import { RoutesName } from 'routes';

const StudentMain: FC = () => {
   const { _id } = useTypedSelector(({ authReducer }) => authReducer.user);
   const dispatch = useDispatch();

   const loadDialogs = () => {
      dispatch(DialogActionCreators.loadDialogs(_id));
   };

   return (
      <div className="container">
         <SideBar>
            <SideBarItem image={<RssFeed />} title={'News'} link={RoutesName.STUDENT_MAIN} />
            <SideBarItem image={<Person />} title={'My Profile'} link={RoutesName.PROFILE} />
            <SideBarItem image={<Group />} title={'Friends'} link={RoutesName.FRIENDS} />
            <SideBarItem
               onClick={loadDialogs}
               image={<Message />}
               title={'Messgaes'}
               link={RoutesName.DIALOGS}
            />
            <SideBarItem image={<Groups />} title={'Groups'} link={RoutesName.GROUPS} />
            <SideBarItem image={<School />} title={'My courses'} link={RoutesName.COURSES} />
         </SideBar>
         <Feed />
         <RightBar />
      </div>
   );
};

export default StudentMain;
