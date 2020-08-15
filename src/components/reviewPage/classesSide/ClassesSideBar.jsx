import React, { useState } from 'react';
import ProfInfo from './ProfInfo.jsx'
import ClassSearch from './ClassSearch.jsx'
import ListGroup from 'react-bootstrap/ListGroup'
import profData from './profData.js'

function colorSelector(rating){
    if (parseInt(rating) > 3.9)
    {
        return "#009c44";
    }
    else if (parseInt(rating) < 2.5)
    {
      return "#ff4747";
    }
    else
    {
        return "#fab900";
    }
  }


function ClassesSideBar(props){
    return(
        <div>
            <ClassSearch/>
            <ListGroup defaultActiveKey="#link1">
            {profData.map( x => 
                (<ProfInfo
                    key={x.id}
                    name={x.name}
                    rating={x.rating}
                    class={x.class}
                    color={colorSelector(x.overallRating)}
                    changeProfName={props.changeProfName}
                />))
            }
            </ListGroup>
        </div>
        );
  }
  
  export default ClassesSideBar;