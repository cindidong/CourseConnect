import React from 'react';
import Review from './Review'
import reviewData from './reviewData.js'

function createReview(revi) {
    return (
      <Review
        key={revi.id}
        name={revi.name}
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