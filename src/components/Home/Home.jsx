import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main>
      <h1>Zoo Project</h1>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/guest">Guest</Link> | <Link to="/animal">Animal</Link>
      </nav>
      <p>Welcome to the Zoo Project Home Page!</p>
    </main>
  );
};

export default Home;