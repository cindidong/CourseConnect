import React from 'react';
import Media from 'react-bootstrap/Media'
import ListGroup from 'react-bootstrap/ListGroup'
import Typography from '@material-ui/core/Typography';
  


function ProfInfo(props){
    return(
        <div>
        <ListGroup.Item action onClick={() => {props.changeProfName(props.name)}}>
            <Media>
            <Media.Body>
            <Typography variant="h4">
                {props.name}
            </Typography>
            <Typography variant="h5">
                {props.class}
            </Typography>
            </Media.Body>
            <Typography style={{color: props.color, fontSize: '20px' }}>{props.rating}</Typography>
            </Media>
        </ListGroup.Item>
        </div>);
  }


  export default ProfInfo;