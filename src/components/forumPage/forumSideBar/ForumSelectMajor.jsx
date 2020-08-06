import React, { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

  
  export default function ForumSelectMajor() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div>
         <FormControl fullWidth>
        <InputLabel htmlFor="school-native-simple">Pick a different major</InputLabel>
        <Select
          native
          value={age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'school-native-simple',
          }}
        >
          <option aria-label="All" value="" />
          <option value={"10"}>CS</option>
          <option value={"20"}>BioE</option>
          <option value={"30"}>EE</option>
        </Select>
      </FormControl>
      </div>
    );
  }