import React, { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CalPoly from './calpoly.png';
import UCLA from './ucla.png';


const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 350,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  //{school} accesses the value={"UCLA"} part

function HomeSchool(props){
    const classes = useStyles();
    const [school, setSchool] = useState('UCLA');
    //never change the name from hai, only change the school to the value
    //this changes the selects's text inside the select
    const [state, setState] = useState({
        school: '',
        name: 'hai',
    });

    function handleChange(event) {
      const { name, value } = event.target;
        var notNull = true;
        if (value=="")
        {
          notNull = false;
        }
        //changes the school to the value in the options catergory
        setState({
        ...state,
        [name]: value,
        });
        //setting the null option/first option to show previous click
        setSchool((prev) => {
          if (notNull)
          {
            return value;
          }
          else
          {
            return prev;
          }
        })
    };

    return(
        <div style={{textAlign: 'center', marginTop: '1%'}}>
        <Typography variant="h1" component="h1">
          <img
            width={300}
            height={200}
            className="mr-3"
            src={CalPoly}
            alt="pfp"
          />
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
          <option value={"UCB"}>UCB</option>
          <option value={"UCR"}>UCR</option>
          <option value={"UCI"}>UCI</option>
          <option value={"Cal Poly"}>Cal Poly</option>
        </Select>
      </FormControl>
    </div>);
  }
  export default HomeSchool;