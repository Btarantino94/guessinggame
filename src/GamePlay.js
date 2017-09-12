import React from 'react';
import ordinal from 'ordinal-numbers'

function GamePlay(props) {
  return (
    <section id="inprogress">
      <h1>Game On!</h1>
      { props.gamesPlayed > 1 ? (
        <p>This is your {ordinal(props.gamesPlayed)} game and your best score so far is {props.highScore} tries at the {props.currentLevel} level.</p>

        ) : (
        <p>This is your {ordinal(props.gamesPlayed)} game. Good luck!</p>
      )}
      <div>
        <label htmlFor="guess">Guess a number: <input type="text" id="guess" onChange={props.handleChange} value={props.currentGuess} /></label>
        <button onClick={props.handleGuess}>Submit</button>
      </div>
      <p id="message">{props.currentMessage}</p>
      { props.offerPlayAgain ? (
        <button id="playagain" onClick={props.handleReset}>Play Again</button>
      ) : (
        <div>
          <h2 id="guesses"># of guesses: {props.guessTotal}</h2>
          <button id="reset" onClick={props.handleReset}>I quit. Reset!</button>
        </div>
      )}
    </section>
  );
}

export default GamePlay;