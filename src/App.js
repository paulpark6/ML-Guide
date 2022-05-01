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
        <h1 className='box1'>
          <div className='content'>
            {certifications}
            Python<br/>
            ML course<br/>
            projects
            Experience
          </div>
        </h1>
        <h5 className='box2'>
          <div className='content'>
            For certifications: <br/>
            there is  AI-900 and DP-900 exams for microsoft
          </div>
        </h5>
        <h5 className='box3'>
          <div className='content'>
            For Python: 
            check Kaggle, 
            learn Pandas, 
            learn NumPy
          </div>
        </h5>
        <h5 className='box4'>
          <div className='content'>
            Simple Project Idea: <br/>
            First make program that reads .CSV files. The program should organize data with given discription.<br/>
            Next make a program that predicts stock market prices based on historic data.                        
          </div>
        </h5>
      </header>
    </>
  );
}

export default App;
