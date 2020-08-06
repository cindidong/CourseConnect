//material ui
import React from 'react';
import Media from 'react-bootstrap/Media'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function ForumQuestion(props) {
    return (
    <div>
    <Card>
      <CardContent>
        <Box display="flex">
            <Box>
                <img
                width={64}
                height={64}
                className="mr-3"
                src="holder.js/64x64"
                alt="pfp"
                />
            </Box>
            <Box alignSelf='flex-end' flexGrow={1}>
                <Typography color="textSecondary" gutterBottom>
                    username
                </Typography>
            </Box>
            <Box p={1}>
                <Typography color="textSecondary" gutterBottom>
                    date
                </Typography>
            </Box>
        </Box>
        <Typography variant="h2" component="h2">
            question
        </Typography>
        <Box display="flex" flexWrap="wrap" width="100%">
                <Chip label="Grade: {props.grade}" variant="outlined" />
                <Chip label="Grade: {props.grade}" variant="outlined" />
                <Chip label="Grade: {props.grade}" variant="outlined" />
        </Box>
        <Typography variant="body1" component="p">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Reply</Button>
      </CardActions>
    </Card>
    </div>);
}

export default ForumQuestion;