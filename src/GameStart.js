import React from 'react';

function GameStart(props) {
  return (
    <section id="gamestart">
      <h1>Start Game</h1>
      <div><button onClick={props.standardStart}>Standard</button> <button onClick={props.expertStart}>Expert</button></div>
    </section>
  );
}

export default GameStart;