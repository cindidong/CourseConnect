import React from 'react';
import ProfInfo from './classesSide/ProfInfo.jsx'
import ClassSearch from './classesSide/ClassSearch.jsx'

function alertClicked() {
    alert('You clicked the ListGroupItem');
  }

function ClassesSideBar(props){
    return(
        <div>
            <ClassSearch/>
            <ProfInfo 

            />
        </div>
        );
  }
  
  export default ClassesSideBar;