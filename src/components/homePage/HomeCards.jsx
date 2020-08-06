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
import Forum from '../forumPage/Forum.jsx'

const useStyles = makeStyles({
  root: {
    width: 345,
  },
});

export default function HomeCards() {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "8%"}}>
    <Box display="flex" justifyContent="space-evenly">
    <Card className={classes.root} onClick={() => { return(ReactDOM.render(<ReviewFinal />, document.getElementById('root'))) }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Classes"
          height="150"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
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
          height="150"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Forum
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </div>
  );
}