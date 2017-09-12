import React from 'react';


function Content(props) {
  return (
    <section id="inprogress">
      <h1>Game On!</h1>
      { props.gamesPlayed > 1 ? (
      <p>This is your {ordinal(props.gamesPlayed)} game. Your bes score: {props.highScore} . You have {props.currentLevel} tries this level.</p>

        ) : (
        <p>Game number {ordinal(props.gamesPlayed)}!</p>
     )}
      <div>
       <label htmlFor="guess">Guess a number: <input type="text" id="guess" onChange={props.handleChange} value={props.currentGuess} /></label>
        <button onClick={props.handleGuess}>Submit</button>
      </div>
      <p id="message">{props.currentMessage}</p>
      { props.offerPlayAgain ? (
        <button id="tryagain" onClick={props.handleReset}>Try again</button>
    ) : (
        <div>
   <h2 id="guesses"># of guesses: {props.guessTotal}</h2>
       <button id="reset" onClick={props.handleReset}>Reset</button>
        </div>
      )}
    </section>
  );
}

export default Content;