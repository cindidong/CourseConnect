import React from 'react';
import RatingsBar from './RatingsBar.jsx'
import TagsBar from './TagsBar.jsx'
import TitleOfProf from './TitleOfProf.jsx'
import ReviewButtons from './ReviewButtons.jsx'
import Box from '@material-ui/core/Box';


function SummaryReview(){
    return(
        <div>
        <Box display="flex" p={1} width="100%">
            <div style={{ width: '60%' }}>
                <Box display="flex" p={1} flexWrap="wrap" width="100%">
                        <Box p={1}>
                            <TitleOfProf/>
                        </Box>
                        <Box p={1} flexGrow={1}>
                            <ReviewButtons/>
                        </Box>
                        <div style={{ width: '60%' }}>
                        <Box p={1}>
                            <RatingsBar/>
                        </Box>
                        </div>
                </Box>
            </div>
            <div style={{ width: '40%' }}>
                    <TagsBar/>
            </div>
        </Box>
        </div>
        );
  }
  
  export default SummaryReview;