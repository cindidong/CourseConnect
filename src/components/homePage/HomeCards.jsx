import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactDOM from 'react-dom';
import ReviewFinal from '../reviewPage/ReviewFinal'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Forum from '../forumPage/Forum.jsx';
import ForumIcon from './forumIcon.png';
import ReviewIcon from './reviewIcon.png';
import '../NavBar.css';

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  cardBottom: {
    backgroundColor: '#c3e5ff',
  },
});

export default function HomeCards() {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "3%"}}>
    <Box display="flex" justifyContent="space-evenly">
    <Card className={classes.root} onClick={() => { return(ReactDOM.render(<ReviewFinal />, document.getElementById('root'))) }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Reviews"
          height="250"
          image={ReviewIcon}
          title="Reviews"
        />
        <CardContent className={classes.cardBottom} >
          <Typography align="center" gutterBottom variant="h4">
            Professor Reviews
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root} onClick={() => { return(ReactDOM.render(<Forum />, document.getElementById('root'))) }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Forum"
          height="250"
          image={ForumIcon}
          title="Forum"
        />
        <CardContent className={classes.cardBottom} >
          <Typography align="center" gutterBottom variant="h4">
            Forum
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </div>
  );
}