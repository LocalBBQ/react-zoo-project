import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main>
      <h1>Zoo Project</h1>
      <nav>
        <a href="/home">Home</a> | <a href="/guest">Guest</a> | <a href="/animal">Animal</a>
      </nav>
      <p>Welcome to the Zoo Project Home Page!</p>
    </main>
  );
};

export default Home;