import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function QuestionReplyButton(props)
{
  return(
    <div>
      <Button onClick={props.handleVisibility} size="small">Reply</Button>
      <Button size="small">Follow</Button>
    </div>
  );
}

export default QuestionReplyButton;