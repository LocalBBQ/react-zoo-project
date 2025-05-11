import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Animal = () => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);
  const apiUrl = 'https://dotnetbackendzoo.azurewebsites.net/api/animals';

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          credentials: 'include'
        });
        
        if (!response.ok) {
          throw new Error(`Error fetching animals: ${response.statusText}`);
        }
        const data = await response.json();
        setAnimals(data);
      } catch (error) {
        console.error('Failed to fetch animals:', error);
        setError('Failed to load animals. Please try again later.');
      }
    };

    fetchAnimals();
  }, [apiUrl]);

  return (
    <main>
      <div>
        <h1>Zoo Project</h1>
        <nav>
          <Link to="/home">Home</Link> | <Link to="/guest">Guest</Link> | <Link to="/animal">Animal</Link>
        </nav>
        <h2>Animal List</h2>
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Animal ID</th>
                <th>Category</th>
                <th>Name</th>
                <th>Weight (kg)</th>
                <th>Age (years)</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <tr key={animal.animalId}>
                  <td>{animal.animalId}</td>
                  <td>{animal.categoryName}</td>
                  <td>{animal.name}</td>
                  <td>{animal.weight}</td>
                  <td>{animal.age}</td>
                  <td>{animal.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
};

export default Animal;