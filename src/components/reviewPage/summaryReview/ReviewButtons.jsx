import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function ReviewButtons(){
    return(
    <div>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button>Submit Review</Button>
        <Button>Groupchat</Button>
      </ButtonGroup>
    </div>
        );
  }
  
  export default ReviewButtons;