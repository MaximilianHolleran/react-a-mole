import './App.css';
import { useState } from 'react';
import MoleContainer from './components/MoleContainer';

function App() {
  let [score, setScore] = useState(0);
  // New states for managing the game start and pause states
  const [gameStarted, setGameStarted] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);

  const createMoleHill = () => {
    let hills = [];
    for(let i = 0; i < 6; i++) {
      hills.push(<MoleContainer 
        key={i} 
        setScore={setScore} 
        score={score} />
      );
    }
    return <div>{hills}</div>;
  };

  // Function to start the game
  const startGame = () => {
    setGameStarted(true);
    setGamePaused(false); // Ensure game is not paused when starting
  };

  // Toggle the pause state
  const togglePause = () => {
    if (!gamePaused) {
      setGamePaused(true);
    } else {
      setGamePaused(false);
    }
  };

  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {!gameStarted ? (
        <button onClick={startGame}>Start Game</button>
      ) : ( 
        <>
          <button onClick={togglePause}>{gamePaused ? 'Resume' : 'Pause'}</button>
          <div>Score: {score}</div>
          {!gamePaused ? createMoleHill() : <p>Game Paused</p>}
        </>
      )}
    </div>
  );
}

export default App;