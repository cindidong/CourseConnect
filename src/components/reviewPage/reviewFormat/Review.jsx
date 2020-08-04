import React from 'react';
import ReviewTop from './ReviewTop.jsx'
import ReviewMiddle from './ReviewMiddle.jsx';
import ReviewBottom from './ReviewBottom.jsx';
import TempReview from './TempReview.jsx';
import './Review.css';


function Review(props) {
    return (
    <div>
    {/*
    <ReviewTop 
        overallRating={props.overallRating}
        prof={props.prof}
        taken={props.taken}
        submitted={props.submitted}
        grade={props.grade}
        takeAgain={props.takeAgain}
        materials={props.materials}
        time={props.time}
        color={props.color}
    />
    <ReviewMiddle 
        paragraph={props.paragraph}
    />*/}
    <TempReview/>
    </div>);
}

export default Review;


