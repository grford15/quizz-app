import React from 'react';
import './MathQuiz.css';

class MathQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
    };

    this.answerQuestions = this.answerQuestions.bind(this);
    this.refreshQuestions = this.refreshQuestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  answerQuestions = (e) => {
    e.preventDefault();
    console.log('Click !');
    this.setState({
      answered: true,
    });
  };

  refreshQuestions = (e) => {
    e.preventDefault();
    this.setState({
      answered: false,
    });
  };

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    console.log(name);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { answered } = this.state;
    return (
      <div className="math-container">
        <h2>Math Questions</h2>
        <div className="questions-section">
          <form onSubmit={this.answerQuestions}>
            {mathQuestions.map((question, index) => {
              return (
                <div className="question" key={index}>
                  <span>{question.num1}</span>
                  <span>+</span>
                  <span>{question.num2}</span>
                  <span>=</span>
                  <input
                    type="number"
                    name={'question' + index}
                    onChange={this.handleChange}
                  />
                </div>
              );
            })}
          </form>
        </div>
        <div className="answer-section">
          <button
            type="submit"
            onClick={this.answerQuestions}
            id="answer-button"
          >
            Check Your Answers
          </button>
          <button onClick={this.refreshQuestions} id="refresh-button">
            Refresh Questions
          </button>
          {answered && <h4 id="result">You got 0 right !</h4>}
        </div>
      </div>
    );
  }
}

const mathQuestions = [
  {
    num1: 10,
    num2: 2,
  },
  {
    num1: 11,
    num2: 6,
  },
  {
    num1: 16,
    num2: 9,
  },
  {
    num1: 11,
    num2: 5,
  },
  {
    num1: 4,
    num2: 10,
  },
  {
    num1: 21,
    num2: 7,
  },
  {
    num1: 18,
    num2: 3,
  },
  {
    num1: 11,
    num2: 5,
  },
  {
    num1: 6,
    num2: 7,
  },
  {
    num1: 13,
    num2: 15,
  },
];

export default MathQuiz;
