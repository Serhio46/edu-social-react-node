import React from 'react';
import './app.scss';
import Header from 'components/header/Header';
import SideBar from 'components/sideBar/SideBar';
import Feed from 'components/feed/Feed';
import RightBar from 'components/rightBar/RightBar';
import Registration from 'pages/registration/Registration';
import Login from 'pages/login/Login';
import AppRouter from 'components/AppRouter';
import SideBarItem from 'components/sideBarItem/SideBarItem';

function App() {
   return (
      <div className="wrapper">
         <Header />
         <AppRouter />
      </div>
   );
}

export default App;

{
   /* <div className="container">
   <SideBar />
   <Feed />
   <RightBar />
</div>; */
}
