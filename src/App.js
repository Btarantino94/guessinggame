import React, { Component } from 'react';
//destructuring the react object into component.
import Begin from './Begin';
//importing data from begin.js
import Content from './Content';
//importing data from content.js
import './index.css';
//importing css file
//lets you use files while developing app.js

const initState = {
  //like let or var. The value of a constant cannot change through re-assignment, and it can't be redeclared.
  game: {
    inProgress: false,
    range: {
      normal: 10,
      hard: 100
    },
    highScore: {
      normal: 100,
      hard: 1000
    },
    played: 0,
    Games: {
      level: 'normal',
      target: 0,
      guesses: 0,
      Guess: '',
      Message: '',
      TryAgain: false
    }
  }
};
//above are my objects for my code below.

//Components receive the new state as props and re-render themselves where needed.

class App extends Component {
  //extend lets everything that component has to let app have.
  constructor() { //the constructor runs on the instance of the const. needed to pass in values.
    super();
    //super is used to call parent constructor
    this.state = initState; //this is the only place where this.state is allowed.
    this.handleChange = this.handleChange.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleRandoNum(num) {
    const random = Math.floor(Math.random() * (num + 1));
    let game = Object.assign({}, this.state.game);
    //object.assign takes second perameter and makes it match the first parameter.
    game.Games.level = num === 10 ? 'normal' : 'hard';
    game.Games.target = random;
    game.Played++;
    game.Games.guesses = 0;
    game.inProgress = true;
    this.setState({
      game: game
      //re rendering components..basically through this.setstate.game
    });
  }

  handleReset(){
    let game = Object.assign({}, this.state.game);
    game.inProgress = false;
    game.Games.guesses = 0;
    game.Games.Guess = '';
    game.Games.Message = '';
    game.Games.tryagain = false;
    this.setState({
      game
    });
  }
//collecting event to identify what the user is inputing
  handleChange(event) {
    const text = event.target.value;
    let game = Object.assign({}, this.state.game);
    game.Games.Guess = text;
    this.setState({
      game
    });
  }

  handleGuess() {
    // increase # of guesses
    let game = Object.assign({}, this.state.game);
    game.Games.guesses++;

    let message;
    const thisGuess = parseInt(this.state.game.Games.Guess, 10);//base 10
    const target = this.state.game.Games.target;
    if(thisGuess === target) { 
      game.Games.tryagain = true;
      // set highscore if new record
      if(this.state.game.Games.guesses < this.state.game.highScore[this.state.game.Games.level]) {
        message = `I don't believe it! How did you work that one out? New Highscore in only ${this.state.game.Games.guesses} guesses`;
        game.highScore["normal"] = this.state.game.Games.guesses;
      } else {
        message = `I'm impressed. That was one of the more taxing ones. You did it in ${this.state.game.Games.guesses} guesses`;
        // template literal >back ticks< Template literals are string literals allowing embedded expressions. You can use multi-line
        // strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.
      }

    } else if (thisGuess > target) {
      message = `woah thats high!`;// if you guess too high
    } else {
      message = `wow...that low?`;// if you guess too low
    }
    game.Games.Message=message;
    game.Games.Guess='';

    this.setState({ // setting state, use it to edit state because state is immutable.
      game: game
    });
  }
//without render method nothing will show on the page.
  render() {
    return (
      <div id="container">

        { !this.state.game.inProgress ? (
          // turnery operator basically an if else case.
          // ternary operator is an operator that takes three arguments. The first argument is a comparison argument, the second is the 
          // result upon a true comparison, and the third is the result upon a false comparison. If it helps you can think of the operator 
          // as shortened way of writing an if-else statement.
          <Begin
            normalStart={()=>{ this.handleRandoNum(this.state.game.range.normal); }}
            hardStart={()=>{ this.handleRandoNum(this.state.game.range.hard); }}
          />//fat arrow function, using it here to bind instead of binding on top like this.state.bind 

        ) : (

          <Content
            played={this.state.game.played}
            highScore={this.state.game.highScore[this.state.game.Games.level]}
            level={this.state.game.Games.level}
            handleChange={this.handleChange}
            handleGuess={this.handleGuess}
            Guess={this.state.game.Games.Guess}
            Message={this.state.game.Games.Message}
            handleReset={this.handleReset}
            tryagain={this.state.game.Games.tryagain}
            guessTotal={this.state.game.Games.guesses}
          />
        )}
      </div>
    );
  }
}

export default App;//so you can call the app somewhere else