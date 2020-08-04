import React from 'react';
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function TitleOfProf(){
    return(
    <div>
    <Media>
        <Media.Body>
            <h2>Professor Name</h2>
            <h5>Class</h5>
        </Media.Body>
    </Media>
    </div>);
  }
  
  export default TitleOfProf;