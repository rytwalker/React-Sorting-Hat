import React, { Component } from 'react';
import Question from './components/Question';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="welcome" className="Welcome">
          Welcome <a href="#Q1">Next</a>
        </div>
        {/* QUESTIONS */}
        <Question id="Q1" number="one" question={'Question one'} link={'#Q2'} />
        <Question id="Q2" number="two" question={'Question two'} link={'#Q3'} />
        <Question
          id="Q3"
          number="three"
          question={'Question three'}
          link={'#Q4'}
        />
        <Question
          id="Q4"
          number="four"
          question={'Question four'}
          link={'#Q5'}
        />
        <Question
          id="Q5"
          number="five"
          question={'Question five'}
          link={'#Q6'}
        />
        <Question
          id="Q6"
          number="six"
          question={'Question six'}
          link={'#results'}
        />

        {/* RESULTS */}
        <div id="results" className="Results">
          Results <a href="#welcome">Back to top</a>
        </div>
      </div>
    );
  }
}

export default App;
