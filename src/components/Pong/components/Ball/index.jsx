import React, { useState, useEffect, useRef } from 'react';

const styles = {
  ball: {
    height: 20,
    width: 20,
    border: '0px solid white',
    borderRadius: 10,
    backgroundColor: 'black',
    position: 'relative',
  },
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const directions = {
  UpRight: { top: getRndInteger(-10, 4), left: getRndInteger(4, 10) },
  DownRight: { top: getRndInteger(4, 10), left: getRndInteger(4, 10) },
  UpLeft: { top: getRndInteger(-10, 4), left: getRndInteger(-10, 4) },
  DownLeft: { top: getRndInteger(4, 10), left: getRndInteger(-10, 4) },
};

const Ball = () => {
  const [top, setTop] = useState(150);
  const [left, setLeft] = useState(0);
  const interval = useRef(false);
  const ballRef = useRef(false);

  useEffect(() => {
    startBallInterval('UpRight');
  }, []);

  function resetInterval(dir) {
    clearInterval(interval.current);
    interval.current = false;
    startBallInterval(dir);
  }

  function handleNewDirection(dir, ballPosition) {
    if (dir === 'UpRight') {
      if (ballPosition.top <= 0) {
        resetInterval('DownRight');
      } else if (ballPosition.left >= window.innerWidth - 30) {
        resetInterval('DownLeft');
      }
    } else if (dir === 'DownRight') {
      if (ballPosition.left >= window.innerWidth - 30) {
        resetInterval('DownLeft');
      } else if (ballPosition.top >= 500 - 20) {
        resetInterval('UpRight');
      }
    } else if (dir === 'UpLeft') {
      if (ballPosition.top <= 0) {
        resetInterval('DownLeft');
      } else if (ballPosition.left <= 20) {
        resetInterval('UpRight');
      }
    } else if (dir === 'DownLeft') {
      if (ballPosition.left <= 20) {
        resetInterval('UpRight');
      } else if (ballPosition.top >= 500 - 20) {
        resetInterval('UpLeft');
      }
    }
  }

  function startBallInterval(dir) {
    interval.current = setInterval(() => {
      const currentBallTop = ballRef.current.offsetTop;
      const currentBallLeft = ballRef.current.offsetLeft;
      handleNewDirection(dir, { top: currentBallTop, left: currentBallLeft });
      setTop(state => state + directions[dir].top);
      setLeft(state => state + directions[dir].left);
    }, 50);
  }
  return (
    <div
      style={{
        ...styles.ball,
        top,
        left,
      }}
      ref={ballRef}
    />
  );
};

export default Ball;
