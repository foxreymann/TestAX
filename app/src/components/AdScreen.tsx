import React, { useState, useEffect } from 'react';

interface AdScreenProps {
  onAdComplete: () => void;
}

const AdScreen: React.FC<AdScreenProps> = ({ onAdComplete }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(5);
  const [canSkip, setCanSkip] = useState<boolean>(false);
  
  // Simulate ad loading and countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanSkip(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="screen ad-screen">
      <div className="header">
        <div className="logo">TestAX</div>
      </div>
      
      <h1>Advertisement</h1>
      <p>Please watch this ad before playing the game</p>
      
      <div className="ad-container">
        <div className="ad-content">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #333 0%, #111 100%)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📱</div>
            <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>TestAX Sponsor</div>
            <div style={{ opacity: 0.8, textAlign: 'center', padding: '0 1rem' }}>
              The future of blockchain gaming is here!
            </div>
          </div>
        </div>
        
        <div className="ad-timer">
          {timeRemaining > 0 ? `Ad ends in: ${timeRemaining}s` : 'Ad completed'}
        </div>
        
        {canSkip && (
          <button className="button ad-skip" onClick={onAdComplete}>
            Continue to Game
          </button>
        )}
      </div>
    </div>
  );
};

export default AdScreen;
