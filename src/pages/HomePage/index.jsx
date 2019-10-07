import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#fbc042',
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
});

const socials = [
  {
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/adrian-casanova-b7ab2a9b',
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/notadriian',
  },
];

function HomePage() {
  const classes = useStyles();

  function handleOpenLink(url) {
    window.open(url);
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
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
      </div>
    </div>
  );
}

export default HomePage;
