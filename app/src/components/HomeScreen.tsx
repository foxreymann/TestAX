import React from 'react';

interface HomeScreenProps {
  balance: number;
  onPlayClick: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ balance, onPlayClick }) => {
  // Generate a random wallet address for display
  const walletAddress = "0x" + Math.random().toString(16).substring(2, 14) + "...";
  
  return (
    <div className="screen home-screen">
      <div className="header">
        <div className="logo">TestAX</div>
      </div>
      
      <div className="wallet-card">
        <h2>Your Wallet</h2>
        <div className="wallet-balance">{balance} $TestAX</div>
        <div className="wallet-address">{walletAddress}</div>
        <div className="wallet-info">
          <p>Use your TestAX tokens to play games and earn more!</p>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="button" onClick={onPlayClick}>
          Play Games
        </button>
      </div>
      
      <div style={{ marginTop: 'auto', padding: '1rem', textAlign: 'center', opacity: 0.7, fontSize: '0.9rem' }}>
        <p>Play games, watch ads, earn TestAX tokens</p>
      </div>
    </div>
  );
};

export default HomeScreen;
