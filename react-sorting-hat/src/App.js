import React, { Component } from 'react';
import Question from './components/Question';
import data from './data';
import results from './results';
import './App.css';
import Results from './components/Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data,
      results,
      answers: [null, null, null, null, null, null],
      showResults: false,
      selectedHouse: 0
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

  handleTie = () => {
    const randomNum = Math.floor(Math.random() * 4);
    this.setState({ selectedHouse: randomNum });
    return this.state.results[randomNum].house;
  };

  handleWin = (houseA, houseB, houseC, houseD) => {
    if (
      houseA >= 4 ||
      (houseA > houseB && houseA > houseC && houseA > houseD)
    ) {
      this.setState({ selectedHouse: 0 });
      return this.state.results[0].house;
    } else if (
      houseB >= 4 ||
      (houseB > houseA && houseB > houseC && houseB > houseD)
    ) {
      this.setState({ selectedHouse: 1 });
      return this.state.results[1].house;
    } else if (
      houseC >= 4 ||
      (houseC > houseA && houseC > houseB && houseC > houseD)
    ) {
      this.setState({ selectedHouse: 2 });
      return this.state.results[2].house;
    } else if (
      houseD >= 4 ||
      (houseD > houseA && houseD > houseB && houseD > houseC)
    ) {
      this.setState({ selectedHouse: 3 });
      return this.state.results[3].house;
    } else {
      return this.handleTie();
    }
  };

  handleSelectedHouse = () => {
    const answers = [...this.state.answers];
    let hufflepuff = 0;
    let gryffindor = 0;
    let ravenclaw = 0;
    let slytherin = 0;
    let house;

    // Sort answers
    answers.forEach(answer => {
      if (answer === 'H') {
        hufflepuff += 1;
      } else if (answer === 'G') {
        gryffindor += 1;
      } else if (answer === 'R') {
        ravenclaw += 1;
      } else if (answer === 'S') {
        slytherin += 1;
      }
    });

    // Calculate results!
    house = this.handleWin(hufflepuff, gryffindor, ravenclaw, slytherin);

    // Show results
    this.setState({ showResults: true });
  };

  render() {
    const { data, showResults, results, selectedHouse } = this.state;
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
        <Results
          handleSelectedHouse={this.handleSelectedHouse}
          showResults={showResults}
          results={results}
          selectedHouse={selectedHouse}
        />
      </div>
    );
  }
}

export default App;
