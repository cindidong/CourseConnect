import React from 'react';
import ReviewFinal from './reviewPage/ReviewFinal'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import ClassesSideBar from './reviewPage/ClassesSideBar.jsx'
import TempReview from './reviewPage/reviewFormat/TempReview.jsx'
import SummaryReview from './reviewPage/summaryReview/SummaryReview.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';

var isLoggedIn = false;

function App(){
    return(<div>{isLoggedIn ? <ReviewFinal /> : <ReviewFinal />}</div>);
}

export default App;
