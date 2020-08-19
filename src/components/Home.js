import React from 'react';
import { CgMathPlus, CgMathMinus, CgMathEqual } from 'react-icons/cg';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome Claudia!</h2>
      <div className="topic-buttons">
        <Link to="/math">
          <div className="topic-math">
            <h4>Math Questions</h4>
            <div>
              <CgMathPlus />
              <CgMathMinus />
              <CgMathEqual />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
