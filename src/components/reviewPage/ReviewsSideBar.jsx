import React from 'react';
import Review from './reviewFormat/Review'
import reviewData from './reviewData.js'

function colorSelector(rating){
  if (parseInt(rating) > 3.9)
  {
      return "green";
  }
  else if (parseInt(rating) < 2.5)
  {
    return "red";
  }
  else
  {
      return "yellow";
  }
}


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
        color={colorSelector(x.overallRating)}
      />))
    }</p>
  </div>);
}

export default ReviewsSideBar;