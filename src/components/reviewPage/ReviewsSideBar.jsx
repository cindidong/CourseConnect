import React from 'react';
import Review from './reviewFormat/Review'
import reviewData from './reviewData.js'

function ReviewsSideBar(){
  return(
  <div>
  <p>{reviewData.map( x => 
    (<Review
        key={x.id}
        overallRating={x.overallRating}
        taken={x.taken}
        submitted={x.submitted}
        grade={x.grade}
        takeAgain={x.takeAgain}
        materials={x.materials}
        time={x.time}
        paragraph={x.paragraph}
      />))
    }</p>
  </div>);
}

export default ReviewsSideBar;