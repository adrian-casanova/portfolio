import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import {primaryColor} from '../../utils/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  title: {
    alignSelf: 'flex-start',
    fontWeight: 'lighter'
  },
  divider: {
    width: '100%',
    height: 2,
    border: '0px solid white',
    borderRadius: 10,
    background: primaryColor,
    margin: '10px 0px'
  }
}))

function Section({ children, styles, title }) {
  const classes = useStyles();
  const dividerProp = useSpring({ width: '100%', from: { width: '0%' }});
  return (
    <div style={styles} className={classes.container}>
      <Typography className={classes.title}  variant="h4">
         {title}
      </Typography> 
      <animated.div className={classes.divider} style={dividerProp} />
      {children}
    </div>
  );
}

export default Section;

