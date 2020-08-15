import React from 'react';
import SingleReview from './SingleReview.jsx'
import reviewData from './reviewData.js'

function colorSelector(rating){
  if (parseInt(rating) > 3.9)
  {
      return "#009c44";
  }
  else if (parseInt(rating) < 2.5)
  {
    return "#ff4747";
  }
  else
  {
      return "#fab900";
  }
}


function ReviewsSideBar(props){
  const result = reviewData.filter((data) => {
      return data.prof === props.prof;
  });
  return(
  <div>
  <p>{result.map( x => 
    (<SingleReview
        key={x.id}
        prof={x.prof}
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