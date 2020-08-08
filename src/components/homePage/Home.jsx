import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../NavBar.jsx'
import HomeCards from './HomeCards.jsx'
import HomeSchool from './HomeSchool.jsx'
import SchoolName from './SchoolName.jsx'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import '../NavBar.css'

function Home(){
    return(
      <div>
        <NavBar/>
        <Divider />
        <HomeSchool/>
        <HomeCards/>
      </div>);
  }
  export default Home;