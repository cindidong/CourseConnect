import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function AddComment(props)
{
  return(
    <div>
        <Form style={{ marginTop: "2%", marginRight: "1%"}}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control placeholder="Comment" as="textarea" rows="3" />
            </Form.Group>
        </Form>
        <Box display="flex" justifyContent="flex-end">
            <Button onClick={props.handleVisibility} size="small">Submit</Button>
            <Button onClick={props.handleVisibility} size="small">Cancel</Button>
        </Box>
    </div>
  );
}

export default AddComment;