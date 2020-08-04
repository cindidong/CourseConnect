import React, { useState } from 'react';
import ProfInfo from './classesSide/ProfInfo.jsx'
import ClassSearch from './classesSide/ClassSearch.jsx'


function ClassesSideBar(props){
    return(
        <div>
            <ClassSearch/>
            <ProfInfo 
                changeProfName={props.changeProfName}
            />
        </div>
        );
  }
  
  export default ClassesSideBar;