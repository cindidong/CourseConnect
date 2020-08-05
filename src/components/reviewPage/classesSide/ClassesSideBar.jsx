import React, { useState } from 'react';
import ProfInfo from './ProfInfo.jsx'
import ClassSearch from './ClassSearch.jsx'


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