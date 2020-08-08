import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../NavBar.jsx'
import Box from '@material-ui/core/Box';
import TabsForum from './TabsForum.jsx'
import ForumSidebar from './forumSideBar/ForumSidebar.jsx'
import Divider from '@material-ui/core/Divider';

function Forum(){
    return(
      <div>
        <NavBar/>
        <Divider/>
        <TabsForum/>
      </div>);
  }
  export default Forum;