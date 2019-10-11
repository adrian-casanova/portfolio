import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../../components/Section';
import AboutMe from './components/AboutMe';
import {primaryColor, primaryTextColor} from '../../utils/styles';
import {useWindowSize} from '../../utils/hooks';
// import Pong from '../../components/Pong';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: primaryColor,
    height: 500,
    display: 'flex',
    padding: 60,
    flexDirection: 'column',
  },
  title: {
    color: '#2f2f2e',
    fontWeight: 'lighter',
  },
  subTitle: {
    marginTop: 20,
    color: '#2f2f2e',
  },
  socialsRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    margin: '0px 10px',
    fontSize: 20,
    color: '#2f2f2e',
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80
  },
  navLink: {
    marginRight: 20,
    color: primaryTextColor,
    cursor: 'pointer',
    '&:hover': {
      fontSize: 14
    }
  }
});

const socials = [
  {
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/adrian-casanova-b7ab2a9b',
  },
  {
    icon: faGithub,
    link: 'https://github.com/adrian-casanova'
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/notadriian',
  },
];


const nav = [
  {
    label: 'About Me'
  },
  {
    label: 'Projects'
  },
  {
    label: 'Resume'
  }
]

function HomePage() {
  const classes = useStyles();
  const { height } = useWindowSize();

  function handleOpenLink(url) {
    window.open(url);
  }

  return (
    <div className={classes.container}>
      <div className={classes.header} style={{ height }}>
        <Typography className={classes.title} variant="h3">
          Adrian Casanova
        </Typography>
        <Typography className={classes.subTitle} variant="h5">
          Software Engineer
        </Typography>
        <div className={classes.socialsRow}>
          {socials.map(social => (
            <FontAwesomeIcon
              icon={social.icon}
              className={classes.icon}
              onClick={() => handleOpenLink(social.link)}
            />
          ))}
        </div>
        <div className={classes.nav}>
            {nav.map(navLink => (
              <Typography variant="caption" className={classes.navLink}>
                {navLink.label}
              </Typography>
            ))}
        </div>
        <AboutMe />
      </div>
    </div>
  );
}

export default HomePage;
