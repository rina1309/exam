import React from 'react';
import './App.css';

function App() {

  const getPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const pokemon = await response.json()
        console.log(pokemon);
    } catch {
        console.error('error')
    }
  }

  return (
    <div className="container">
      <button onClick={getPokemon}>Show Pokemon</button>
      <div className='card'></div>
    </div>
  );
}

export default App;
