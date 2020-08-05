import React, { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 350,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function HomeSchool(props){
    const classes = useStyles();
    const [school, setSchool] = useState('UCLA');
    const [state, setState] = React.useState({
        school: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
        ...state,
        [name]: event.target.value,
        });
        setSchool(event.target.value);
    };

    return(
        <div style={{textAlign: 'center'}}>
        <Typography variant="h1" component="h2">
        {school}
        </Typography>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="school-native-simple">Go to a different college?</InputLabel>
        <Select
          native
          value={state.school}
          onChange={handleChange}
          inputProps={{
            name: 'school',
            id: 'school-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"UCLA"}>UCLA</option>
          <option value={"Virgina Tech"}>Virgina Tech</option>
          <option value={"UCB"}>UCB</option>
        </Select>
      </FormControl>
    </div>);
  }
  export default HomeSchool;