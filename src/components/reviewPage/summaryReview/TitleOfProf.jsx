import React from 'react';
import Media from 'react-bootstrap/Media'
import Typography from '@material-ui/core/Typography';

function TitleOfProf(props){
    return(
    <div>
    <Media>
        <Media.Body>
            <Typography variant="h2">
                {props.prof}
            </Typography>
            <Typography variant="h3">
                CS 32
            </Typography>
        </Media.Body>
    </Media>
    </div>);
  }
  
  export default TitleOfProf;