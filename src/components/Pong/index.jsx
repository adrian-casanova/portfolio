import React, { useState, useRef, useEffect } from 'react';
import Paddle from './components/Paddle';
import Ball from './components/Ball';

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
  },
};

function Pong({ height }) {
  return (
    <div
      style={{
        ...styles.container,
        height,
      }}
    >
      <Paddle player />
      <Ball />
      <Paddle />
    </div>
  );
}

export default Pong;
