import React from 'react';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';

function TagsBar(){
    return(
        <div style={{alignContent: "right"}}>
        <Box display="flex" flexWrap="wrap" justifyContent="flex-end" p={1}>
            <Chip label="Hard Class Easy Teacher" variant="outlined" />
            <Chip label="Textbook" variant="outlined" />
            <Chip label="Take Again" variant="outlined" />
            <Chip label="Lots of Time" variant="outlined" />
            <Chip label="Hard Class Easy Teacher" variant="outlined" />
            <Chip label="Hard Class Easy Teacher" variant="outlined" />
            <Chip label="Hard Class Easy Teacher" variant="outlined" />
            <Chip label="Hard Class Easy Teacher" variant="outlined" />
            <Chip label="Hard Class Easy Teacher" variant="outlined" />
            <Chip label="Hard Class Easy Teacher" variant="outlined" />
            <Chip label="Hard Class Easy Teacher" variant="outlined" />
            <Chip label="Hard Class Easy Teacher" variant="outlined" />
        </Box>
        </div>
        );
  }
  
  export default TagsBar;