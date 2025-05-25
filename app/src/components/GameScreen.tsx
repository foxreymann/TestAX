import React, { useState, useEffect } from 'react';

interface GameScreenProps {
  game: string;
  onGameComplete: () => void;
  onExit: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ game, onGameComplete, onExit }) => {
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [gameActive, setGameActive] = useState<boolean>(true);
  const [clickPosition, setClickPosition] = useState<{x: number, y: number}>({x: 50, y: 50});
  const [targetPosition, setTargetPosition] = useState<{x: number, y: number}>({x: 50, y: 50});
  
  // Generate a new random position for the target
  const generateNewPosition = () => {
    const x = Math.floor(Math.random() * 80) + 10; // 10-90% of width
    const y = Math.floor(Math.random() * 80) + 10; // 10-90% of height
    setTargetPosition({x, y});
  };
  
  // Initialize game
  useEffect(() => {
    generateNewPosition();
    
    // Start game timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Handle target click
  const handleTargetClick = () => {
    if (!gameActive) return;
    
    setScore(prev => prev + 1);
    generateNewPosition();
  };
  
  // Handle game area click (miss)
  const handleGameAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gameActive) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setClickPosition({x, y});
  };
  
  // Get game title based on selected game
  const getGameTitle = () => {
    switch (game) {
      case 'puzzle': return 'Crypto Puzzle';
      case 'memory': return 'Token Memory';
      case 'quiz': return 'Blockchain Quiz';
      case 'runner': return 'Token Runner';
      default: return 'TestAX Game';
    }
  };
  
  return (
    <div className="screen game-screen">
      <div className="header">
        <button className="back-button" onClick={onExit}>
          Exit Game
        </button>
        <div className="logo">{getGameTitle()}</div>
      </div>
      
      <div className="game-stats" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
        <div>Score: <strong>{score}</strong></div>
        <div>Time: <strong>{timeLeft}s</strong></div>
      </div>
      
      <div 
        className="game-container" 
        style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'crosshair'
        }}
        onClick={handleGameAreaClick}
      >
        {gameActive ? (
          <>
            <div 
              className="game-target"
              style={{
                position: 'absolute',
                left: `${targetPosition.x}%`,
                top: `${targetPosition.y}%`,
                transform: 'translate(-50%, -50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(to right, #ffd700, #ffb700)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
                transition: 'all 0.1s ease-out'
              }}
              onClick={handleTargetClick}
            >
              <span style={{color: '#1a1a2e', fontWeight: 'bold'}}>+1</span>
            </div>
            
            <div 
              className="click-indicator"
              style={{
                position: 'absolute',
                left: `${clickPosition.x}%`,
                top: `${clickPosition.y}%`,
                transform: 'translate(-50%, -50%)',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                pointerEvents: 'none'
              }}
            />
            
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              background: 'rgba(0, 0, 0, 0.5)'
            }}>
              Click on the gold circles as quickly as you can!
            </div>
          </>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}>
            <h2>Game Over!</h2>
            <p>Your final score: <strong>{score}</strong></p>
            <button className="button" onClick={onGameComplete} style={{marginTop: '1rem'}}>
              Submit Results
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameScreen;
