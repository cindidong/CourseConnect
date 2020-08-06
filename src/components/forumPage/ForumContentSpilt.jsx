import React, { useState } from 'react';
import { useEffect } from 'react';
import TabsForum from './TabsForum.jsx'
import SplitPane, { Pane } from 'react-split-pane';
import ForumSidebar from './forumSideBar/ForumSidebar.jsx'
import ForumPost from './postFormat/ForumPost'
import Divider from '@material-ui/core/Divider';


function ForumContentSpilt()
{
    return(
        <SplitPane split="vertical" defaultSize={1000} primary="second" paneStyle={{overflow: "auto"}}>
        <div className="Pane1">
            <ForumSidebar/>
        </div>
        <div className="Pane2">
          <ForumPost/>
        </div>
      </SplitPane>
    );
}

export default ForumContentSpilt;