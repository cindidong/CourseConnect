import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../NavBar.jsx'
import Box from '@material-ui/core/Box';
import TabsForum from './TabsForum.jsx'


function Forum(){
    return(
      <div>
        <NavBar/>
        <TabsForum/>
      </div>);
  }
  export default Forum;