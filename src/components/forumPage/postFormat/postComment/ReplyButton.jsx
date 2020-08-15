import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function ReplyButton(props)
{
  return(
    <div>
        <Box display="flex" justifyContent="flex-end">
            <Button onClick={props.handleVisibility} size="small">Reply</Button>
        </Box>
    </div>
  );
}

export default ReplyButton;