import React from 'react';
import Media from 'react-bootstrap/Media'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from 'react-bootstrap/Card'
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';


function ForumQuestion(props) {
    return (
    <div>
        <Media>
            <img
            width={64}
            height={64}
            className="mr-3"
            src="holder.js/64x64"
            alt="pfp"
            />
            <Media.Body>
            <p>username</p>
            <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
            </p>
            </Media.Body>
        </Media>
    </div>);
}

export default ForumQuestion;