import React from 'react';
import './MathQuiz.css';

class MathQuiz extends React.Component {
  state = {
    answered: false,
  };

  answerQuestions = (e) => {
    e.preventDefault();
    console.log('Click !');
  };

  render() {
    return (
      <div className="math-container">
        <h2>Math Questions</h2>
        <div className="questions-section">
          <div className="question">
            <p>10</p>
            <p>+</p>
            <input type="number" />
            <p>=</p>
            <p>20</p>
          </div>
          <div className="question">
            <p>5</p>
            <p>x</p>
            <input type="number" />
            <p>=</p>
            <p>20</p>
          </div>
          <div className="question">
            <p>18</p>
            <p>-</p>
            <input type="number" />
            <p>=</p>
            <p>9</p>
          </div>
        </div>
        <div className="answer-section">
          <button onClick={this.answerQuestions} id="answer-button">
            Check Your Answers
          </button>
        </div>
      </div>
    );
  }
}

export default MathQuiz;
