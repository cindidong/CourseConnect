import React from 'react';
import Media from 'react-bootstrap/Media'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


function TempReview(props) {
    return (
    <div>
        <Paper elevation={3}>
            <Media>
            {/*<p> pooppoop </p>*/}
            <div className = "review-rating-icon">
            </div>
            <Media.Body>
                <h5>Media Heading</h5>
                <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
                </p>
            </Media.Body>
            </Media>
        </Paper>
    </div>);
}

export default TempReview;

