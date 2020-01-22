import React from 'react';
import {Fade,Typography, makeStyles, Paper, CardContent} from '@material-ui/core';
import {KeyboardArrowLeft} from '@material-ui/icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useWindowSize} from '../../utils/hooks';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  pageTitle: {
    color: 'inherit',
    padding: 20,
    cursor: 'pointer',
  },
  divider: {
    height: 1,
    width: 40,
    backgroundColor: '#0c0c0c',
    margin: '0px 20px',
    alignSelf: 'center',
  },
  projectList: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  projectContainer: {
    maxWidth: 750,
    alignSelf: 'center',
    width: '95%',
    margin: '0px 20px',
    marginBottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  cardTitle: {
    fontWeight: 'bolder',
  },
  icon: {
    fontSize: 20,
    alignSelf: 'flex-end',
    color: '#2f2f2e',
    cursor: 'pointer',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    color: '#0c0c0c',
    '&:hover': {
      color: 'white'
    }
  },
  arrowLeft: {
    fontSize: 38,
    color: 'inherit',
    cursor: 'pointer',
  },
}));

const PROJECTS = [
  {
    name: 'Tinder Bot',
    git: 'https://github.com/adrian-casanova/tinder-bot',
    description:
      'Automized tinder experience. Find people that match your interests!',
    color: '#fa3c5d',
  },
  {
    name: 'Would You Rather!?',
    git: '',
    description:
      'Mobile game that tests you and your friends in the craziests situations!',
    color: '#3b3c30',
  },
  {
    name: 'DnD Dice Roller',
    git: '',
    description: 'Custom dice roller app!',
    color: '#aea4ee',
  },
];

function ProjectsPage() {
  const classes = useStyles();
  const {height, width} = useWindowSize();
  const history = useHistory();

  function handleOpenLink(url) {
    window.open(url);
  }

  function handleBackClick() {
    history.push('/');
  }

  return (
    <Fade in timeout={1000}>
      <div
        className={classes.container}
        >
        <div className={classes.header}>
          <KeyboardArrowLeft
            className={classes.arrowLeft}
            onClick={handleBackClick}
          />
          <Typography
            className={classes.pageTitle}
            variant="h4"
            onClick={handleBackClick}>
            Projects
          </Typography>
        </div>
        <div className={classes.divider} />
        <div className={classes.projectList}>
          {PROJECTS.map((item, idx) => (
            <Paper
              className={classes.projectContainer}
              elevation={0}
              variant="outlined"
              style={{
                transform: `rotate(${0.25 * (idx % 2 ? -1 : 1)}deg)`,
                borderTop: `4px solid ${item.color}`,
              }}>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.cardTitle}>
                  {item.name}
                </Typography>
                <Typography className={classes.cardDescription} variant="body1">
                  {item.description}
                </Typography>
                <FontAwesomeIcon
                  icon={faGithub}
                  className={classes.icon}
                  onClick={() => handleOpenLink(item.git)}
                />
              </CardContent>
            </Paper>
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default ProjectsPage;
