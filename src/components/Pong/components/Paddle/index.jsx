import React, { useState, useEffect, useRef } from 'react';

const styles = {
  paddle: {
    height: 80,
    width: 20,
    background: 'black',
    outline: 'none',
  },
};

const Paddle = React.memo(({ player }) => {
  const [top, setTop] = useState(0);
  const playerRef = useRef(false);

  useEffect(() => {
    if (player && playerRef.current) {
      playerRef.current.focus();
    }
  }, [playerRef.current]);

  function handleKeyPress(e) {
    if (e.key === 'ArrowDown' && top + 100 <= 500) {
      setTop(top + 20);
    } else if (e.key === 'ArrowUp' && top - 20 >= 0) {
      setTop(top - 20);
    }
  }
  return (
    <React.Fragment>
      {player ? (
        <div
          style={{
            ...styles.paddle,
            top,
            position: 'relative',
          }}
          onKeyDown={handleKeyPress}
          tabIndex={0}
          autoFocus
          ref={playerRef}
        />
      ) : (
        <div style={styles.paddle} />
      )}
    </React.Fragment>
  );
});

export default Paddle;
