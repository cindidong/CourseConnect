import React, { useState } from 'react';
import { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import ForumSubComment from './postComment/ForumSubComment.jsx'
import ForumComment from './postComment/ForumComment.jsx'
import ForumQuestion from './postQuestion/ForumQuestion.jsx'
import Divider from '@material-ui/core/Divider';

function ForumPost(){
    return(
      <div>
        <ForumQuestion/>
        <ForumSubComment/>
      </div>);
  }
  export default ForumPost;