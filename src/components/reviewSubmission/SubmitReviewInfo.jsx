import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../NavBar.jsx'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SubmitReviewInfo(props){
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    var isOptional = props.optional
    return(
      <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <div>{isOptional && <MenuItem value={1}>N/A</MenuItem>}</div>
          <MenuItem value={10}>{props.data[0]}</MenuItem>
          <MenuItem value={20}>{props.data[1]}</MenuItem>
          <MenuItem value={30}>{props.data[2]}</MenuItem>
          <MenuItem value={40}>{props.data[3]}</MenuItem>
        </Select>
      </FormControl>
      </div>);
  }
  export default SubmitReviewInfo;