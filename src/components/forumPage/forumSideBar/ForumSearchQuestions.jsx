import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';

function ProfInfo(props){
    var str = props.description;
    if (props.description.length > 100)
    {
        str = props.description.substring(0, 100);
        str = str + "...";
    }
    return(
        <div>
        <ListGroup.Item action onClick={() => {props.changeProfName("nachenberg")}}>
            <Media>
            <Media.Body>
                <h5>{props.question}</h5>
                <p>{str}</p>
            </Media.Body>
            </Media>
        </ListGroup.Item>
    </div>);
  }


  export default ProfInfo;