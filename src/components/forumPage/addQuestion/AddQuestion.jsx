import React from 'react';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      position: 'relative',
      minHeight: 200,
    },
    fab: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      margin: 0,
      top: 'auto',
      left: 'auto',
      position: 'fixed',
    },
    formControl: {
        marginBottom: theme.spacing(2),
        minWidth: '100%',
    },
  }));

function AddQuestion(){
    const classes = useStyles();
    //for select
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    //for fab/form
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <div>
        <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleClickOpen}>
          +
        </Fab>
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth={'md'}
            aria-labelledby="form-dialog-title"
            aria-describedby="form-dialog-description"
        >
        <DialogTitle id="form-dialog-title">Ask a Question</DialogTitle>
        <DialogContent>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            >
            <MenuItem value={10}>General</MenuItem>
            <MenuItem value={20}>Classes/Class Schedule</MenuItem>
            <MenuItem value={30}>Major</MenuItem>
            <MenuItem value={40}>Social</MenuItem>
            </Select>
        </FormControl>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                <Typography>
                Question
                </Typography>
                </Form.Label>
                <Form.Control as="textarea" rows="1" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea2">
                <Form.Label>
                <Typography>
                Description
                </Typography>
                </Form.Label>
                <Form.Control as="textarea" rows="5" />
            </Form.Group>
        </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      </div>);
  }

  export default AddQuestion;