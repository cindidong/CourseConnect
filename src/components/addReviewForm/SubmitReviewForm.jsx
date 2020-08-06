import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../NavBar.jsx'
import SubmitReviewInfo from './SubmitReviewInfo.jsx'
import SubmitReviewRating from './SubmitReviewRating.jsx'
import SubmitReviewTags from './SubmitReviewTags.jsx'
import formData from './formData.js'

function SubmitReviewForm(){
    return(
      <div>
      <p>{formData.map( x => 
        (<SubmitReviewInfo
            key={x.id}
            title={x.title}
            data={x.data}
            optional={x.optional}
          />))
        }</p>
        <SubmitReviewTags/>
        <SubmitReviewRating/>
      </div>);
  }
  export default SubmitReviewForm;
  