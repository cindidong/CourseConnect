import React from 'react';
import ReviewFinal from './reviewPage/ReviewFinal'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import Home from './homePage/Home.jsx'

var isLoggedIn = false;

function App(){
    return(<div>{isLoggedIn ? <ReviewFinal /> : <SignIn />}</div>);
}

export default App;
