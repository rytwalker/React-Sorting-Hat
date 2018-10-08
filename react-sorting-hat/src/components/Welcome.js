import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div id="welcome" className="Welcome">
      <div className="Welcome-Container">
        <div className="left">
          <h1>
            Welcome
            <span>to the React Sorting Hat Quiz!</span>
          </h1>
        </div>
        <div className="right">
          <svg
            width="264"
            height="285"
            viewBox="0 0 264 285"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M129.795 4.08039C131.381 -0.329859 137.619 -0.329859 139.205 4.0804L211.46 204.963C243.374 213.085 264 225.981 264 240.5C264 265.077 204.902 285 132 285C59.0984 285 0 265.077 0 240.5C0 225.166 23.0052 211.644 58.0148 203.642L129.795 4.08039Z"
              fill="#55719C"
            />
          </svg>
        </div>
        <a className="Start-Btn" href="#Q1">
          Start
        </a>
      </div>
    </div>
  );
};

export default Welcome;
