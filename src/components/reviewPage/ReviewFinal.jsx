import React from 'react';
import ReviewsSideBar from './ReviewsSideBar.jsx';
import NavBar from '../NavBar.jsx'
import ClassesSideBar from './ClassesSideBar.jsx'
import SplitPane, { Pane } from 'react-split-pane';
import SummaryReview from './summaryReview/SummaryReview.jsx'

function ReviewFinal(){
    return(
      <div>
        <SplitPane split="horizontal" minSize={70}>
          <div>
            <NavBar />
          </div>
          <div>
            <SplitPane split="vertical" defaultSize={1000} primary="second">
              <div className="Pane1">
                  <ClassesSideBar/>
              </div>
              <div className="Pane2">
                <SummaryReview/>
                <ReviewsSideBar/>
              </div>
            </SplitPane>
          </div>
        </SplitPane>
      </div>);
  }
  export default ReviewFinal;