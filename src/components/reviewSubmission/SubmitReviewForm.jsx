import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../NavBar.jsx'
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import SubmitReviewInfo from './SubmitReviewInfo.jsx'
import SubmitReviewRating from './SubmitReviewRating.jsx'
import SubmitReviewTags from './SubmitReviewTags.jsx'
import reivewSubmissionData from './reivewSubmissionData.js'
import tagNames from './tagNames.js'

const handleClick = () => {
  console.info('You clicked the Chip.');
};

function SubmitReviewForm(){
    return(
      <div>
      <p>{reivewSubmissionData.map( x => 
        (<SubmitReviewInfo
            key={x.id}
            title={x.title}
            data={x.data}
            optional={x.optional}
          />))
        }</p>
        <Box display="flex" justifyContent='center' flexWrap="wrap" p={1}>
          {tagNames.map( x => 
          (<Chip label={x.name} onClick={handleClick} variant="outlined" />))
          }
        </Box>
        <SubmitReviewRating/>
      </div>);
  }
  export default SubmitReviewForm;
  