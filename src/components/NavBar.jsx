import React from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';
import Logo from './logo.png';
import Home from './homePage/Home.jsx'
import Forum from './forumPage/Forum.jsx'
import ReviewFinal from './reviewPage/ReviewFinal'
import Box from '@material-ui/core/Box';
import SignIn from './SignIn.jsx'
//import { LinkContainer } from 'react-router-bootstrap';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Arrow from './dropdown.png'

//onClick={() => { return(ReactDOM.render(<Home />, document.getElementById('root'))) }}

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Alata"',
      'Roboto',
      '"sans-serif"',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#c3e5ff',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  logoButton: {
    paddingLeft: '0',
  },
  questionsButton: {
    marginBottom: "3%",
  },
  signOutButton: {
    marginTop: "1%",
  },
}));


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={theme}>
    <Box display="flex">
    <AppBar position="static">
      <Toolbar>
      <Box flexGrow={1}>
      <Button 
        className={classes.logoButton}
        onClick={() => { return(ReactDOM.render(<Home />, document.getElementById('root'))) }}
        color="inherit">
        <img
            src={Logo}
            width="150"
            height="40"
            className="d-inline-block align-top"
            alt="CourseConnect"
        />
        </Button>
        </Box>
        <Button 
        onClick={() => { return(ReactDOM.render(<ReviewFinal />, document.getElementById('root'))) }}
        color="inherit">Reviews</Button>
        <Button 
        onClick={() => { return(ReactDOM.render(<Forum />, document.getElementById('root'))) }}
        color="inherit">Forum</Button>
        <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            My Profile
            <img
            src={Arrow}
            width="20"
            height="20"
            className="d-inline-block align-top"
            alt="CourseConnect"
          />
          </Button>
          <StyledMenu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => { return(ReactDOM.render(<Home />, document.getElementById('root'))) }}>Edit Profile</MenuItem>
            <MenuItem onClick={() => { return(ReactDOM.render(<Home />, document.getElementById('root'))) }}>My Reviews</MenuItem>
            <MenuItem className={classes.questionsButton} onClick={() => { return(ReactDOM.render(<Home />, document.getElementById('root'))) }}>My Questions</MenuItem>
            <Divider/>
            <MenuItem className={classes.signOutButton} onClick={() => { return(ReactDOM.render(<SignIn />, document.getElementById('root'))) }}>Sign Out</MenuItem>
          </StyledMenu>
        </div>
      </Toolbar>
    </AppBar>
  </Box>
  </ThemeProvider>
  );
}

export default NavBar;