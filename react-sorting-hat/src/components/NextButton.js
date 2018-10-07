import React from 'react';
import './Question.css';

const NextButton = props => {
  return (
    <a href={props.link} className="NextButton">
      <ion-icon name="ios-arrow-down" />
    </a>
  );
};

export default NextButton;
