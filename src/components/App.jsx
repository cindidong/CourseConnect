import React from 'react';
import ReviewFinal from './reviewPage/ReviewFinal'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import ClassesSideBar from './reviewPage/classesSide/ClassesSideBar.jsx'
import SingleReview from './reviewPage/reviewFormat/SingleReview.jsx'
import SummaryReview from './reviewPage/summaryReview/SummaryReview.jsx'
import HomeCards from './homePage/HomeCards.jsx'
import Home from './homePage/Home.jsx'
import Forum from './forumPage/Forum.jsx'
import SubmitReviewForm from './reviewSubmission/SubmitReviewForm.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';

var isLoggedIn = false;

function App(){
    return(<div>{isLoggedIn ? <Home /> : <ReviewFinal />}</div>);
}

export default App;
