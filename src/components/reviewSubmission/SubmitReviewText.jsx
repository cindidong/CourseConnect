import React from 'react';
import Chip from '@material-ui/core/Chip';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Typography from '@material-ui/core/Typography';

function SubmitReviewText(props){
    return(
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>
                    <Typography>
                    {props.title}
                    </Typography>
                    </Form.Label>
                    <Form.Control placeholder={props.description} as="textarea" rows="6" />
                </Form.Group>
            </Form>
        </div>);
  }
  
  export default SubmitReviewText;