//material ui
import React from 'react';
import Media from 'react-bootstrap/Media'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Frog1 from './frog1.png';

function ForumQuestion(props) {
    return (
    <div>
    <Card>
      <CardContent>
        <Box display="flex">
            <Box>
                <img
                width={40}
                height={40}
                className="mr-3"
                src={Frog1}
                alt="pfp"
                />
            </Box>
            <Box alignSelf='center' flexGrow={1}>
                <Typography color="textSecondary" gutterBottom>
                    angrybirds
                </Typography>
            </Box>
            <Box p={1}>
                <Typography color="textSecondary" gutterBottom>
                    5/19/2020
                </Typography>
            </Box>
        </Box>
        <Typography variant="h4" component="h2" style={{ marginBottom: "4%"}}>
            Should I switch to MechE to avoid going to grad school as a current bioE?
        </Typography>
        <Typography variant="body1" component="p">
            I'm currently a 2nd year bioE student and I realized I really do not want to grad school. I've heard from upperclassmen/graduates that bioE's have to go to grad school. Is that true? Should I switch to mechE instead to have a less niche major?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Reply</Button>
      </CardActions>
    </Card>
    </div>);
}

export default ForumQuestion;