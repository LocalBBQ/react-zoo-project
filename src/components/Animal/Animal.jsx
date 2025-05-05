import React, { useEffect, useState } from 'react';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const apiUrl = 'http://localhost:5000/api/animals'; // Replace with your API endpoint

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error fetching animals: ${response.statusText}`);
        }
        const data = await response.json();
        setAnimals(data);
      } catch (error) {
        console.error('Failed to fetch animals:', error);
      }
    };

    fetchAnimals();
  }, [apiUrl]);

  return (
    <main>
      <div>
        <h1>Animal List</h1>
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
      </div>
    </main>
  );
};

export default AnimalList;