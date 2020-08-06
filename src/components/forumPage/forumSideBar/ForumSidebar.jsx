import React, { useState } from 'react';
import ForumSeach from './ForumSeach.jsx'
import ForumSearchQuestions from './ForumSearchQuestions'
import ForumSelectMajor from './ForumSelectMajor.jsx'

function ForumSidebar(props){
    const [newName, setNewName] = useState("nachenberg");
  function changeProfName(profName) {
    setNewName(profName);
  }
    return(
        <div>
        {props.changeMajor && <ForumSelectMajor/>}
        <ForumSeach/>
        <ForumSearchQuestions 
            changeProfName={changeProfName}
        />
        </div>
    );
}

export default ForumSidebar;