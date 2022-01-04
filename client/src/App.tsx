import React from 'react';
import './app.scss';
import Header from 'components/header/Header';
import SideBar from 'components/sideBar/SideBar';
import Feed from 'components/feed/Feed';
import RightBar from 'components/rightBar/RightBar';

function App() {
   return (
      <div className="wrapper">
         <Header />
         <div className="container">
            <SideBar />
            <Feed />
            <RightBar />
         </div>
      </div>
   );
}

export default App;
