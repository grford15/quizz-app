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
            <div className="question">
              <span>10</span>
              <span>+</span>
              <input
                type="number"
                name="question1"
                onChange={this.handleChange}
              />
              <span>=</span>
              <span>20</span>
            </div>
            <div className="question">
              <span>10</span>
              <span>+</span>
              <input
                type="number"
                name="question2"
                onChange={this.handleChange}
              />
              <span>=</span>
              <span>20</span>
            </div>
            <div className="question">
              <span>10</span>
              <span>+</span>
              <input
                type="number"
                name="question3"
                onChange={this.handleChange}
              />
              <span>=</span>
              <span>20</span>
            </div>
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

export default MathQuiz;
