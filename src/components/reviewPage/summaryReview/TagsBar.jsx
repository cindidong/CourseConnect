import React from 'react';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';

function TagsBar(){
    return(
        <div style={{alignContent: "left"}}>
        <Box display="flex" justifyContent='flex-end' flexWrap="wrap" p={1}>
            <Chip label="Hard Class Good Teacher" variant="outlined" />
            <Chip label="Needs Textbook" variant="outlined" />
            <Chip label="No Materials Required" variant="outlined" />
            <Chip label="Materials Required" variant="outlined" />
            <Chip label="Would Take Again" variant="outlined" />
            <Chip label="Lots of Time" variant="outlined" />
            <Chip label="Hard Exams" variant="outlined" />
            <Chip label="Easy Exams" variant="outlined" />
            <Chip label="Records lectures" variant="outlined" />
            <Chip label="Curved" variant="outlined" />
            <Chip label="Good lecturer" variant="outlined" />
            <Chip label="Bad lecturer" variant="outlined" />
            <Chip label="Many Office Hours" variant="outlined" />
            <Chip label="Few Office Hours" variant="outlined" />
            <Chip label="Mandatory Attendance" variant="outlined" />
            <Chip label="Participation Required" variant="outlined" />
            <Chip label="Extra Credit" variant="outlined" />
            <Chip label="Group Projects" variant="outlined" />
            <Chip label="Uses Slides" variant="outlined" />
            <Chip label="Textbook Thumper" variant="outlined" />
            <Chip label="Easy A" variant="outlined" />
            <Chip label="Hard Class Bad Teacher" variant="outlined" />
            <Chip label="Easy Class Bad Teacher" variant="outlined" />
            <Chip label="Easy Class Good Teacher" variant="outlined" />
        </Box>
        </div>
        );
  }
  
  export default TagsBar;