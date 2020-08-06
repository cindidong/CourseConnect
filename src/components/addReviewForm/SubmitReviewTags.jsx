import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../NavBar.jsx'
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

const handleClick = () => {
    console.info('You clicked the Chip.');
  };

function SubmitReviewTags(){
    return(
        <div style={{alignContent: "left"}}>
        <Box display="flex" justifyContent='center' flexWrap="wrap" p={1}>
            <Chip label="Hard Class Good Teacher" onClick={handleClick} variant="outlined" />
            <Chip label="Hard Class Bad Teacher" onClick={handleClick} variant="outlined" />
            <Chip label="Easy Class Good Teacher" onClick={handleClick} variant="outlined" />
            <Chip label="Easy Class Bad Teacher" onClick={handleClick} variant="outlined" />
            <Chip label="Would Take Again" onClick={handleClick} variant="outlined" />
            <Chip label="Easy A" onClick={handleClick} variant="outlined" />
            <Chip label="Curved" onClick={handleClick} variant="outlined" />
            <Chip label="Needs Textbook" onClick={handleClick} variant="outlined" />
            <Chip label="Materials Required" onClick={handleClick} variant="outlined" />
            <Chip label="No Materials Required" onClick={handleClick} variant="outlined" />
            <Chip label="Mandatory Attendance" onClick={handleClick} variant="outlined" />
            <Chip label="Participation Required" onClick={handleClick} variant="outlined" />
            <Chip label="Lots of Time" onClick={handleClick} variant="outlined" />
            <Chip label="Hard Exams" onClick={handleClick} variant="outlined" />
            <Chip label="Easy Exams" onClick={handleClick} variant="outlined" />
            <Chip label="Records lectures" onClick={handleClick} variant="outlined" />
            <Chip label="Good lecturer" onClick={handleClick} variant="outlined" />
            <Chip label="Bad lecturer" onClick={handleClick} variant="outlined" />
            <Chip label="Many Office Hours" onClick={handleClick} variant="outlined" />
            <Chip label="Few Office Hours" onClick={handleClick} variant="outlined" />
            <Chip label="Extra Credit" onClick={handleClick} variant="outlined" />
            <Chip label="Group Projects" onClick={handleClick} variant="outlined" />
            <Chip label="Uses Slides" onClick={handleClick} variant="outlined" />
            <Chip label="Textbook Thumper" onClick={handleClick} variant="outlined" />
        </Box>
        </div>);
  }
  export default SubmitReviewTags;