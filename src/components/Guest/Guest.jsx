import React from 'react';
import './Guest.css';

const Guest = () => {
  const guests = [
    { name: 'Greg', age: 4, wallet: 300.0 },
    { name: 'Anna', age: 5, wallet: 250.0 },
    { name: 'John', age: 6, wallet: 200.0 },
  ];

  return (
    <main>
      <h1>Zoo Project</h1>
      <nav>
        <a href="/home">Home</a> | <a href="/guest">Guest</a> | <a href="/animal">Animal</a>
      </nav>
      <h2>Guest List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Guest Age</th>
            <th>Wallet</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest, index) => (
            <tr key={index}>
              <td>{guest.name}</td>
              <td>{guest.age}</td>
              <td>${guest.wallet.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Guest;