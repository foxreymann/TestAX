import React, { useState } from 'react';

interface GameSelectionProps {
  onGameSelect: (game: string) => void;
  onBack: () => void;
}

const GameSelection: React.FC<GameSelectionProps> = ({ onGameSelect, onBack }) => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  
  // Sample game data
  const games = [
    { id: 'puzzle', title: 'Crypto Puzzle', description: 'Solve the puzzle to earn tokens', reward: 10 },
    { id: 'memory', title: 'Token Memory', description: 'Test your memory skills', reward: 15 },
    { id: 'quiz', title: 'Blockchain Quiz', description: 'Answer questions about blockchain', reward: 20 },
    { id: 'runner', title: 'Token Runner', description: 'Endless runner game', reward: 12 }
  ];
  
  const handleGameClick = (gameId: string) => {
    setSelectedGame(gameId);
  };
  
  const handleContinue = () => {
    if (selectedGame) {
      onGameSelect(selectedGame);
    }
  };
  
  return (
    <div className="screen game-selection-screen">
      <div className="header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <div className="logo">TestAX</div>
      </div>
      
      <h1>Choose a Game</h1>
      <p>Select a game to play and earn TestAX tokens</p>
      
      <div className="game-grid">
        {games.map(game => (
          <div 
            key={game.id}
            className={`game-card ${selectedGame === game.id ? 'selected' : ''}`}
            onClick={() => handleGameClick(game.id)}
          >
            <div className="game-title">{game.title}</div>
            <p>{game.description}</p>
            <div className="game-reward">Reward: {game.reward} $TestAX</div>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button 
          className="button" 
          onClick={handleContinue}
          disabled={!selectedGame}
          style={{ opacity: selectedGame ? 1 : 0.5 }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default GameSelection;
