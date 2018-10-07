import React from 'react';
import NextButton from './NextButton';
import './Question.css';

const Question = ({
  id,
  classStyles,
  link,
  question,
  options,
  handleSelectingAnswer
}) => {
  return (
    <div id={id} className={classStyles} onClick={handleSelectingAnswer}>
      <div className="Question-Container">
        <h3 className="Question-Text">{question}</h3>
        {options.map(option => (
          <div className="Option" key={option.house} data-house={option.house}>
            {option.option}
          </div>
        ))}
        <NextButton link={link} />
      </div>
    </div>
  );
};

export default Question;
