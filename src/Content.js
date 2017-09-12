import React from 'react';


function Content(props) {
  return (
    <section id="inprogress">
      <h1>Game On!</h1>
      { props.played > 1 ? (
      <p>This is your {(props.played)} game. Your bet score: {props.highScore} . {props.currentLevel} tries this level.</p>

        ) : (
        <p>Game number {(props.played)}!</p>
     )}
      <div>
       <label htmlFor="guess">Number me this..Guess a number: <input type="text" id="guess" onChange={props.handleChange} value={props.Guess} /></label>
        <button onClick={props.handleGuess}>Submit</button>
      </div>
      <p id="message">{props.Message}</p>
      { props.tryagain ? (
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