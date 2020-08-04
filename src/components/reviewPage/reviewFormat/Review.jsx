import React from 'react';
import TempReview from './TempReview.jsx';


function Review(props) {
    return (
    <div>
    <TempReview 
        overallRating={props.overallRating}
        prof={props.prof}
        taken={props.taken}
        submitted={props.submitted}
        grade={props.grade}
        takeAgain={props.takeAgain}
        materials={props.materials}
        time={props.time}
        color={props.color}
        paragraph={props.paragraph}
    />
    </div>);
}

export default Review;


