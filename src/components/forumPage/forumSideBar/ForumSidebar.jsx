import React, { useState } from 'react';
import ForumSeach from './ForumSeach.jsx'
import ForumSearchQuestions from './ForumSearchQuestions'
import ForumSelectMajor from './ForumSelectMajor.jsx'
import forumQuestions from '../forumQuestions.js'
import ListGroup from 'react-bootstrap/ListGroup'

function ForumSidebar(props){
    const [newName, setNewName] = useState("nachenberg");
  function changeProfName(profName) {
    setNewName(profName);
  }
  var result = forumQuestions;
  if (props.tabName !== 'home')
  {
    result = forumQuestions.filter((data) => {
    return data.questionType === props.tabName;
  });
  }
    return(
        <div>
        {props.changeMajor && <ForumSelectMajor/>}
        <ForumSeach/>
        <ListGroup defaultActiveKey="#link1">
        {result.map( x => 
        (<ForumSearchQuestions
            key={x.id}
            questionType={x.questionType}
            questionID={x.questionID}
            username={x.username}
            date={x.date}
            question={x.question}
            description={x.description}
            changeProfName={changeProfName}
          />))
        }
        </ListGroup>
        </div>
    );
}

export default ForumSidebar;