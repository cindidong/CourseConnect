import React from 'react';
import './Review.css';

function ReviewBottom(props) {
    return (
        <div class="review-bottom-container">
        <input type="checkbox" id="helpfulness" name="helpfulness">
        <label for="helpfulness"> Helpful?</label><br></br></input>
        </div>);
    }
    
    export default ReviewBottom;