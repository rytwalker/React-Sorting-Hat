import React from 'react';
import './Results.css';

const Results = ({
  results,
  selectedHouse,
  handleSelectedHouse,
  showResults
}) => {
  return (
    <div id="results" className="Results">
      <div
        className="Results-Container"
        style={showResults ? { display: 'flex' } : { display: 'none' }}
      >
        <div className="left">crest</div>
        <div
          className="right"
          style={{
            background: results[selectedHouse].bgColor,
            color: results[selectedHouse].mainColor
          }}
        >
          <h3>{results[selectedHouse].house}</h3>
          <p>{results[selectedHouse].description}</p>
        </div>
      </div>
      <button className="Results-Btn" onClick={handleSelectedHouse}>
        Results
      </button>
      <a className="top" href="#welcome">
        Back to top
      </a>
    </div>
  );
};

export default Results;
