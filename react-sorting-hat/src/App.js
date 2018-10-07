import React, { Component } from 'react';
import Question from './components/Question';
import data from './data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data,
      answers: [null, null, null, null, null, null]
    };
  }

  handleSelectingAnswer = e => {
    if (e.target.classList.contains('Option')) {
      const answers = [...this.state.answers];
      // eslint-disable-next-line
      let qNum = parseInt(e.target.parentNode.parentNode.id.slice(1, 2));
      answers.splice(qNum - 1, 1, e.target.dataset.house);
      this.setState({ answers: answers });
    }
  };

  handleSelectedHouse = () => {
    const answers = [...this.state.answers];
    const hufflepuff = [];
    const gryffindor = [];
    const ravenclaw = [];
    const slytherin = [];
    let house;
    // Sort answers
    answers.forEach(answer => {
      if (answer === 'H') {
        hufflepuff.push(answer);
      } else if (answer === 'G') {
        gryffindor.push(answer);
      } else if (answer === 'R') {
        ravenclaw.push(answer);
      } else if (answer === 'S') {
        slytherin.push(answer);
      }
    });

    if (
      hufflepuff.length > gryffindor.length &&
      hufflepuff.length > ravenclaw.length &&
      hufflepuff.length > slytherin.length
    ) {
      house = 'Hufflepuff';
    } else if (
      gryffindor.length > hufflepuff.length &&
      gryffindor.length > ravenclaw.length &&
      hufflepuff.length > slytherin.length
    ) {
      house = 'Gryffindor';
    } else if (
      ravenclaw.length > hufflepuff.length &&
      ravenclaw.length > gryffindor.length &&
      ravenclaw.length > slytherin.length
    ) {
      house = 'Ravenclaw';
    } else if (
      slytherin.length > hufflepuff.length &&
      slytherin.length > gryffindor.length &&
      slytherin.length > hufflepuff.length
    ) {
      house = 'Slytherin';
    }

    console.log(house);
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <div id="welcome" className="Welcome">
          Welcome <a href="#Q1">Next</a>
        </div>

        {/* QUESTIONS */}
        {data.map(question => {
          return (
            <Question
              id={question.id}
              key={question.id}
              classStyles={question.classStyles}
              link={question.link}
              question={question.question}
              options={question.options}
              handleSelectingAnswer={this.handleSelectingAnswer}
            />
          );
        })}

        {/* RESULTS */}
        <div id="results" className="Results">
          <button onClick={this.handleSelectedHouse}>Results</button>
          Results <a href="#welcome">Back to top</a>
        </div>
      </div>
    );
  }
}

export default App;
