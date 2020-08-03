import React from 'react';
import Review from './Review'

function ReviewsSideBar(props){
    return(
    <div>
    <Review name={props.name}/>
    </div>);
}

export default ReviewsSideBar;