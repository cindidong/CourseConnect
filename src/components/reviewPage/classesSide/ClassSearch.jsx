import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


function ClassSearch(){
    return(
        <div>
        <Row>
            <Col>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
          </Form>
            </Col>
        </Row>
      </div>);
  }
  
  export default ClassSearch;