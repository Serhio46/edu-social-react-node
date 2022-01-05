import React from 'react';
import './app.scss';
import Header from 'components/header/Header';
import SideBar from 'components/sideBar/SideBar';
import Feed from 'components/feed/Feed';
import RightBar from 'components/rightBar/RightBar';
import Registration from 'pages/registration/Registration';
import Login from 'pages/login/Login';

function App() {
   return (
      <div className="wrapper">
         <Header />
         <div className="container">
            <Registration />
         </div>
      </div>
   );
}

export default App;

{
   /* <SideBar />
<Feed />
<RightBar /> */
}
