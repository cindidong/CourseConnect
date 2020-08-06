import React, { useState } from 'react';
import { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import TempComment from './postComment/TempComment.jsx'
import ForumQuestion from './postQuestion/ForumQuestion.jsx'
import Divider from '@material-ui/core/Divider';

function ForumPost(){
    return(
      <div>
        <ForumQuestion/>
        <TempComment/>
      </div>);
  }
  export default ForumPost;