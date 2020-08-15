//review replies in react bootstrap
import React from 'react';
import Media from 'react-bootstrap/Media'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from 'react-bootstrap/Card'
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import SplitPane, { Pane } from 'react-split-pane';
import Divider from '@material-ui/core/Divider';
import Frog2 from './frog2.png';
import Frog3 from './frog3.png';
import Frog4 from './frog4.png';
import Frog5 from './frog5.png';
import AddQuestion from '../../addQuestion/AddQuestion.jsx'
import Button from '@material-ui/core/Button';
import AddComment from './AddComment.jsx'
import ReplyButton from './ReplyButton'

//using react bootstrap cards, can nest
function ForumSubComment(props) {
  const [pressed, setPressed] = React.useState(false);

  const handleVisibility = () => {
    setPressed((prevPressed) => !prevPressed);
  };

  const [pressed1, setPressed1] = React.useState(false);

  const handleVisibility1 = () => {
    setPressed1((prevPressed1) => !prevPressed1);
  };

  const [pressed2, setPressed2] = React.useState(false);

  const handleVisibility2 = () => {
    setPressed2((prevPressed2) => !prevPressed2);
  };

  const [pressed3, setPressed3] = React.useState(false);

  const handleVisibility3 = () => {
    setPressed3((prevPressed3) => !prevPressed3);
  };

  return (
    <div>
    <Divider/>
    <Media style={{ marginTop: "1%", marginLeft: "1%"}}>
        <img
          width={40}
          height={40}
          className="mr-3"
          src={Frog2}
          alt="pfp"
          />
      <Media.Body>
      <Box display="flex">
          <Box alignSelf='center' flexGrow={1}>
              <Typography color="textSecondary" gutterBottom>
                Ribbot
              </Typography>
          </Box>
          <Box p={1}>
              <Typography color="textSecondary" gutterBottom>
                5/19/2020
              </Typography>
          </Box>
      </Box>
      <Typography variant="body1" component="p">
      While I do agree that a majority of bioengineers go to graduate school since it is a bit of a niche field, you should definitely consider if you would enjoy the mechE curriculum. A lot of mechE's are able to work in bioE fields since it's much easier for employers to teach mechE's bio as opposed to the technical engineering skills you acquire as a mechE
      </Typography>
      {pressed ? <AddComment handleVisibility={handleVisibility} /> : <ReplyButton handleVisibility={handleVisibility}/>}
      <Media>
      <img
          width={40}
          height={40}
          className="mr-3"
          src={Frog3}
          alt="pfp"
        />
      <Media.Body>
      <Box display="flex">
          <Box alignSelf='center' flexGrow={1}>
              <Typography color="textSecondary" gutterBottom>
                Blathers
              </Typography>
          </Box>
          <Box p={1}>
              <Typography color="textSecondary" gutterBottom>
                5/20/2020
              </Typography>
          </Box>
      </Box>
      <Typography variant="body1" component="p">
        I agree with Ribbot. First consider whether you enjoy the mechE curriculum, it's quite different and focuses much less on thermodynamics than the bioE curriculum does. Also, what are your reasons for avoiding grad school? Grad school could be a great option for you if that's what you want
      </Typography>
      {pressed1 ? <AddComment handleVisibility={handleVisibility1} /> : <ReplyButton handleVisibility={handleVisibility1}/>}
      </Media.Body>
  </Media>
      </Media.Body>
  </Media>
  <Media style={{ marginLeft: "1%" }}>
    <img
      width={40}
      height={40}
      className="mr-3"
      src={Frog4}
      alt="pfp"
      />
      <Media.Body>
      <Box display="flex">
          <Box alignSelf='center' flexGrow={1}>
              <Typography color="textSecondary" gutterBottom>
                boopboopbeep
              </Typography>
          </Box>
          <Box p={1}>
              <Typography color="textSecondary" gutterBottom>
                5/21/2020
              </Typography>
          </Box>
      </Box>
      <Typography variant="body1" component="p">
      Depending on what you want to go into in the bioE field (genetic engineering, medical devices, etc.) the necessity of grad school will differ. If you want to do genetic engineering where most of the work is in research, a PhD may be required.
      </Typography>
      {pressed2 ? <AddComment handleVisibility={handleVisibility2} /> : <ReplyButton handleVisibility={handleVisibility2}/>}
      </Media.Body>
  </Media>
  <Media style={{ marginLeft: "1%" }}>
        <img
        width={40}
        height={40}
        className="mr-3"
        src={Frog5}
        alt="pfp"
        />
      <Media.Body>
      <Box display="flex">
          <Box alignSelf='center' flexGrow={1}>
              <Typography color="textSecondary" gutterBottom>
                Caroline666
              </Typography>
          </Box>
          <Box p={1}>
              <Typography color="textSecondary" gutterBottom>
                5/21/2020
              </Typography>
          </Box>
      </Box>
      <Typography variant="body1" component="p">
        mechE will suck the life out of you don't switch if you like to feel alive.
      </Typography>
      {pressed3 ? <AddComment handleVisibility={handleVisibility3} /> : <ReplyButton handleVisibility={handleVisibility3}/>}
      </Media.Body>
  </Media>
  <AddQuestion/>
  </div>);
}

export default ForumSubComment;