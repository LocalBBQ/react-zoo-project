import React from 'react';
import './Animal.css';

const Animal = () => {
  const animals = [
    { type: 'chimpanzee', name: 'Bobo' },
    { type: 'dingo', name: 'Maggie' },
    { type: 'eagle', name: 'Ari' },
    { type: 'hummingbird', name: 'Buzz' },
    { type: 'kangaroo', name: 'Kanga' },
    { type: 'ostrich', name: 'Stretch' },
    { type: 'platypus', name: 'Bill' },
    { type: 'shark', name: 'Bruce' },
    { type: 'squirrel', name: 'Dale' },
  ];

  return (
    <main>
      <h1>Zoo Project</h1>
      <nav>
        <a href="/home">Home</a> | <a href="/guest">Guest</a> | <a href="/animal">Animal</a>
      </nav>
      <h2>Animal List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Animal Type</th>
            <th>Animal Name</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <tr key={index}>
              <td>{animal.type}</td>
              <td>{animal.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Animal;