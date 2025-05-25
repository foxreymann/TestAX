import React from 'react';

interface RewardScreenProps {
  reward: number;
  onClaim: (amount: number) => void;
  onPlayAgain: () => void;
}

const RewardScreen: React.FC<RewardScreenProps> = ({ reward, onClaim, onPlayAgain }) => {
  return (
    <div className="screen reward-screen">
      <div className="header">
        <div className="logo">TestAX</div>
      </div>
      
      <div className="reward-container">
        <h1>Congratulations!</h1>
        <p>You've earned TestAX tokens for playing</p>
        
        <div className="reward-animation">
          🎉
        </div>
        
        <div className="reward-amount">
          +{reward} $TestAX
        </div>
        
        <p>Tokens will be added to your wallet</p>
        
        <div className="button-container">
          <button 
            className="button"
            onClick={() => onClaim(reward)}
          >
            Claim Reward
          </button>
          
          <button 
            className="button button-secondary"
            onClick={onPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardScreen;
