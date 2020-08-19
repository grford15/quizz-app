import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MathQuiz from './components/MathQuiz';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/math" component={MathQuiz} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
