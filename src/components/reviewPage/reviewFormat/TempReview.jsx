import React from 'react';
import Media from 'react-bootstrap/Media'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from 'react-bootstrap/Card'


function TempReview(props) {
    return (
    <div>
    <Card>
        <Card.Body>
            <div className="title">
            <Card.Title>3.8</Card.Title>
            </div>
            <Card.Subtitle className="mb-2 text-muted">
                Quarter Taken: Fall 2018
            </Card.Subtitle>
            <div className = "review-topRight">
            <Card.Subtitle className="mb-2 text-muted">
                Date Submitted: January 7th, 2019
                
            </Card.Subtitle>
            </div>
            
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. HOWARD STAHL SMELLS LIKE EGGS Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>
    </div>);
}

export default TempReview;

