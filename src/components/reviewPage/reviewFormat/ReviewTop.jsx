import React from 'react';
import './Review.css';

function ReviewTop(props) {
    return (
        <div className="review-top-container">
            <table cellSpacing = "20">
                <tr>
                    <td>
                        <div className="review-rating-icon" style={{backgroundColor: props.color}}>
                        <h1>{props.overallRating}</h1>
                        </div>
                    </td>
                    <td>
                        <p>Semester Taken: {props.taken}, Date Submitted: {props.submitted}, Grade: {props.grade}, Would Take Again: {props.takeAgain}, Materials: {props.materials}, Time Commitment: {props.time}</p>
                    </td>
                </tr>
            </table>
        </div>);
    }
    
    export default ReviewTop;