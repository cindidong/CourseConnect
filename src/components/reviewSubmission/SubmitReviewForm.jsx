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
import SubmitReviewText from './SubmitReviewText';
import textFieldData from './textFieldData.js'


function SubmitReviewForm(){
    const [isClicked, setIsClicked] = React.useState(false);
    var buttonType = "outlined";
    const handleClick = (event) => {
      console.log(event.target);
      setIsClicked(!isClicked);
      if (isClicked)
      {
        buttonType = "default";
      }
      else
      {
        buttonType = "outlined";
      }
    };
    return(
      <div>
      {reivewSubmissionData.map( x => 
        (<SubmitReviewInfo
            key={x.id}
            title={x.title}
            data={x.data}
            optional={x.optional}
          />))
        }
        <div style={{ marginBottom: "1%"}}>
        <Box display="flex" justifyContent='center' flexWrap="wrap" p={1}>
          {tagNames.map( x => 
          (<Chip label={x.name} onClick={handleClick} variant={buttonType} />))
          }
        </Box>
        </div>
        <SubmitReviewRating/>
        {textFieldData.map( x => 
        (<SubmitReviewText
            key={x.id}
            title={x.title}
            description={x.description}
          />))
        }
      </div>);
  }
  export default SubmitReviewForm;
  