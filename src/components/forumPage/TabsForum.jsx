import React, { useState } from 'react';
import { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ForumComment from './postFormat/postComment/ForumComment.jsx'
import SplitPane, { Pane } from 'react-split-pane';
import ForumContentSpilt from './ForumContentSpilt.jsx'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }  

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TabsForum(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    return(
      <div>
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab label="Home" {...a11yProps(0)}/>
                <Tab label="General" {...a11yProps(1)}/>
                <Tab label="Classes/Class Schedule" {...a11yProps(2)}/>
                <Tab label="Major" {...a11yProps(3)}/>
                <Tab label="Social" {...a11yProps(4)}/>
                <Tab label="Social" {...a11yProps(4)}/>
                <Tab label="Social" {...a11yProps(4)}/>
                <Tab label="Social" {...a11yProps(4)}/>
                <Tab label="Social" {...a11yProps(4)}/>
                <Tab label="Social" {...a11yProps(4)}/>
            </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <ForumContentSpilt 
          changeMajor={false}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ForumContentSpilt 
            changeMajor={false}
            />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ForumContentSpilt 
            changeMajor={true}
            />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ForumContentSpilt 
            changeMajor={true}
            />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ForumContentSpilt 
            changeMajor={false}
            />
        </TabPanel>
      </div>);
  }
  export default TabsForum;