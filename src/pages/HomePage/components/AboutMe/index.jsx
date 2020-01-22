import React from 'react';
import {Typography, makeStyles, Paper} from '@material-ui/core';
import {primaryTextColor} from '../../../../utils/styles';
import {faReact, faJs, faGit, faNodeJs, faAws, faAndroid, faSwift} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(() => ({
  container: {
    padding: 20,
    maxWidth: 500,
    alignSelf: 'center',
    width: '100%',
    marginTop: 50,
    transform: 'rotate(-2deg)',
    overflow: 'hidden',
    borderTop: '5px solid #627992'
  },
  cardTitle: {
    color: primaryTextColor,
    fontWeight: 'bolder'
  },
  tech: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  icon: {
    margin: '0px 10px',
    fontSize: 24,
    color: primaryTextColor
  },
  subTitle: {
    color: primaryTextColor,
    marginTop: 10,
    fontWeight: 'bolder'
  },
  text: {
    color: primaryTextColor
  }
}));

const tech = [
  {
    icon: faReact,
},
  {
    icon: faJs,
  },
  {
    icon: faGit
  },
  {
    icon: faNodeJs
  },
  {
    icon: faAws
  },
  {
    icon: faAndroid
  },
  {
    icon: faSwift
  }
]


function AboutMe() {
  const classes = useStyles();

  return (
   <Paper elevation={0} className={classes.container}>
      <Typography variant="h5" className={classes.cardTitle}>
        About Me
      </Typography>
      <Typography className={classes.subTitle}>
        Tech I enjoy using:
      </Typography>
      <div className={classes.tech}>
        {tech.map(techStack => (
          <FontAwesomeIcon
            icon={techStack.icon}
            className={classes.icon}
          />
        ))}
      </div>
      <Typography className={classes.subTitle}>
        Location: 
      </Typography>
      <Typography className={classes.text}>
          South Florida
      </Typography>
    </Paper>
  );
}

export default AboutMe;

