/* eslint-disable */
import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  let certifications = ["AWS", "Goole Cloud", "Microsoft Azure"];
  return (
    <>
      <header className="background">
        <h1 className='titleBox'>
          <div className='titleText'>
            Machine Learning Path Plan
          </div>
        </h1>
        <h1 className='content'>
          Python<br/>
          ML course<br/>
          projects
          {certifications}
        </h1>
        <h5>For certifications: <br/>
        there is  AI-900 and DP-900 exams for microsoft</h5>
      </header>
    </>
  );
}

export default App;
