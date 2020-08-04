import React from 'react';
import ProfInfo from './classesSide/ProfInfo.jsx'
import ClassSearch from './classesSide/ClassSearch.jsx'



function ClassesSideBar(){
    return(
        <div>
            <ClassSearch/>
            <ProfInfo/>
        </div>
        );
  }
  
  export default ClassesSideBar;