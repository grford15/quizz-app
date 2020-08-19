import React from 'react';
import './MathQuiz.css';

function MathQuiz() {
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
          <button>Check</button>
        </div>
        <div className="question">
          <p>5</p>
          <p>x</p>
          <input type="number" />
          <p>=</p>
          <p>20</p>
          <button>Check</button>
        </div>
        <div className="question">
          <p>18</p>
          <p>-</p>
          <input type="number" />
          <p>=</p>
          <p>9</p>
          <button>Check</button>
        </div>
      </div>
    </div>
  );
}

export default MathQuiz;
