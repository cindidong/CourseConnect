import React, { useState } from 'react';
import ForumSeach from './ForumSeach.jsx'
import ForumSearchQuestions from './ForumSearchQuestions'
import forumData from '../forumData.js'

function ForumSidebar(){
    const [newName, setNewName] = useState("nachenberg");
  function changeProfName(profName) {
    setNewName(profName);
  }
    return(
        <div>
        <ForumSeach/>
        <ForumSearchQuestions 
            changeProfName={changeProfName}
        />
        </div>
    );
}


export default ForumSidebar;