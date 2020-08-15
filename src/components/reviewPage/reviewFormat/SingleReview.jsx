import React from 'react';
import Media from 'react-bootstrap/Media'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from 'react-bootstrap/Card'
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';


function SingleReview(props) {
    var tag = 'Hard Class Hard Teacher';
    if (props.prof === 'Eggert')
    {
        tag = 'Hard Class Hard Teacher';
    }
    else if (props.prof === 'Stahl')
    {
        tag = 'Hard Class Easy Teacher';
    }
    return (
    <div>
    <Card>
        <Card.Body>
        <Box display="flex" width="100%">
            <Box p={1} flexGrow={1}>
            <div className="title" style={{color: props.color, size: "70px"}}>
            <Typography>
                <Card.Title>{props.overallRating}</Card.Title>
            </Typography>
            </div>
            </Box>
            <Box p={1}>
                <div className = "review-topRight" style={{textAlign: "right"}}>
                <Card.Subtitle className="mb-2 text-muted">
                <Typography color="textSecondary" variant="body2">
                    Quarter Taken: {props.taken}
                </Typography>
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                <Typography color="textSecondary" variant="body2">
                    Date Submitted: {props.submitted}
                </Typography>
                </Card.Subtitle>
                </div>
            </Box>
        </Box>
            <Card.Text>
            <Typography variant="body1">
            {props.paragraph}
            </Typography>
            </Card.Text>
            <div>
                <Box display="flex" flexWrap="wrap">
                    <Chip label={props.grade} variant="outlined" />
                    <Chip label={props.takeAgain} variant="outlined" />
                    <Chip label={props.materials} variant="outlined" />
                    <Chip label={props.time} variant="outlined" />
                    <Chip label={tag} variant="outlined" />
                </Box>
            </div>
        </Card.Body>
    </Card>
    </div>);
}

export default SingleReview;

