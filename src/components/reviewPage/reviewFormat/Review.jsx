import React from 'react';
import ReviewTop from './ReviewTop.jsx'
import ReviewMiddle from './ReviewMiddle.jsx';
import './Review.css';


function Review(props) {
    var color = "";
    if (parseInt(props.overallRating) > 3.9)
    {
        color = "green";
    }
    else if (parseInt(props.overallRating) < 2.5)
    {
        color = "yellow";
    }
    else
    {
        color = "red";
    }
    return (
    <div>
    <ReviewTop 
        overallRating={props.overallRating}
        taken={props.taken}
        submitted={props.submitted}
        grade={props.grade}
        takeAgain={props.takeAgain}
        materials={props.materials}
        time={props.time}
    />
    <ReviewMiddle 
        paragraph={props.paragraph}
    />
    </div>);
}

export default Review;


