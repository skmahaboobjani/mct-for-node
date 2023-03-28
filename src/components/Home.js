import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHeading(data.heading);
        setDescription(data.description);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>{heading}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Home;
