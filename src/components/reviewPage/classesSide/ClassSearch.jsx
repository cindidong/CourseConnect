import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


function ClassSearch(){
    return(
        <div>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </div>);
  }
  
  export default ClassSearch;