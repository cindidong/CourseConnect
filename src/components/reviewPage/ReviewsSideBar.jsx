import React from 'react';
import Review from './reviewFormat/Review'
import reviewData from './reviewData.js'

function createReview(revi) {
    return (
      <Review
        key={revi.id}
        overallRating={revi.overallRating}
        taken={revi.taken}
        submitted={revi.submitted}
        grade={revi.grade}
        takeAgain={revi.takeAgain}
        materials={revi.materials}
        time={revi.time}
        paragraph={revi.paragraph}
      />
    );
  }

function ReviewsSideBar(){
    return(
    <div>
    <p>{reviewData.map(createReview)}</p>
    </div>);
}

export default ReviewsSideBar;