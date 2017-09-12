import React, { Component } from 'react';
import Begin from './Begin';
import Content from './Content';
import './index.css';

const initState = {
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

class App extends Component {
  constructor() {
    super();
    this.state = initState;
    this.handleChange = this.handleChange.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleRandoNum(num) {
    const random = Math.floor(Math.random() * (num + 1));
    let game = Object.assign({}, this.state.game);
    game.Games.level = num === 10 ? 'normal' : 'hard';
    game.Games.target = random;
    game.Played++;
    game.Games.guesses = 0;
    game.inProgress = true;
    this.setState({
      game: game
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

  handleChange(event) {
    const text = event.target.value;
    let game = Object.assign({}, this.state.game);
    game.Games.Guess = text;
    this.setState({
      game: game
    });
  }

  handleGuess() {
    // increase # of guesses
    let game = Object.assign({}, this.state.game);
    game.Games.guesses++;

    let message;
    const thisGuess = parseInt(this.state.game.Games.Guess, 10);
    const target = this.state.game.Games.target;
    if(thisGuess === target) {
      game.Games.tryagain = true;
      if(this.state.game.Games.guesses < this.state.game.highScore[this.state.game.Games.level]) {
        message = `I don't believe it! How did you work that one out? New Highscore in only ${this.state.game.Games.guesses} guesses`;
        game.highScore["normal"] = this.state.game.Games.guesses;
      } else {
        message = `I'm impressed. That was one of the more taxing ones. You did it in ${this.state.game.Games.guesses} guesses`;
      }

    } else if (thisGuess > target) {
      message = `woah thats high!`;
    } else {
      message = `wow...that low?`;
    }
    game.Games.Message=message;
    game.Games.Guess='';

    this.setState({
      game: game
    });

  }

  render() {
    return (
      <div id="container">
        { !this.state.game.inProgress ? (

          <Begin
            normalStart={()=>{ this.handleRandoNum(this.state.game.range.normal); }}
            hardStart={()=>{ this.handleRandoNum(this.state.game.range.hard); }}
          />

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

export default App;