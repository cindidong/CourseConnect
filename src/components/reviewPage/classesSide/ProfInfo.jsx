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

function ProfInfo(props){
    return(
        <div>
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action onClick={() => {props.changeProfName("Nachenberg")}}>
                <Media>
                <Media.Body>
                <Typography variant="h5" component="h2">
                    Nachenberg
                </Typography>
                <Typography variant="h6" component="h2">
                    CS 32
                </Typography>
                </Media.Body>
                <p>4.5</p>
                </Media>
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => {props.changeProfName("Stahl")}}>
                <Media>
                <Media.Body>
                <Typography variant="h5" component="h2">
                    Stahl
                </Typography>
                <Typography variant="h6" component="h2">
                    CS 32
                </Typography>
                </Media.Body>
                <p>3.5</p>
                </Media>
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => {props.changeProfName("Eggert")}}>
                <Media>
                <Media.Body>
                <Typography variant="h5" component="h2">
                    Eggert
                </Typography>
                <Typography variant="h6" component="h2">
                    CS 32
                </Typography>
                </Media.Body>
                <p>3.5</p>
                </Media>
            </ListGroup.Item>
        </ListGroup>
    </div>);
  }


  export default ProfInfo;