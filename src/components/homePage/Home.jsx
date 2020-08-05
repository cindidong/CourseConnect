import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../NavBar.jsx'
import HomeCards from './HomeCards.jsx'
import HomeSchool from './HomeSchool.jsx'
import SchoolName from './SchoolName.jsx'
import Box from '@material-ui/core/Box';


function Home(){
    return(
      <div>
        <HomeSchool/>
        <HomeCards/>
      </div>);
  }
  export default Home;