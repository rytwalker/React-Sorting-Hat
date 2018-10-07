import React from 'react';
import NextButton from './NextButton';
import './Question.css';

const Question = props => {
  return (
    <div id={props.id} className={props.question}>
      <div className="Question-Container">
        <h3 className="Question-Text">Pick an ideal vacation destionation:</h3>
        <div className="Option">The Beach</div>
        <div className="Option">Paris</div>
        <div className="Option">The Rodeo</div>
        <div className="Option">Snow</div>
        <NextButton link={props.link} />
      </div>
    </div>
  );
};

export default Question;
