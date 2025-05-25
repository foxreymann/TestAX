import React, { useState } from 'react';

interface ResultsScreenProps {
  onSubmit: () => void;
  onSkip: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ onSubmit, onSkip }) => {
  const [rating, setRating] = useState<number>(0);
  const [performance, setPerformance] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string>('');
  const [comments, setComments] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  
  return (
    <div className="screen results-screen">
      <div className="header">
        <div className="logo">TestAX</div>
      </div>
      
      <h1>Game Test Results</h1>
      <p>Please provide your feedback about the game experience</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Rate your game experience:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span 
                key={star}
                className={`star ${rating >= star ? 'active' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="performance">
            Did you experience any performance issues?
          </label>
          <select 
            id="performance"
            className="form-select"
            value={performance}
            onChange={(e) => setPerformance(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="none">No issues</option>
            <option value="minor">Minor issues</option>
            <option value="major">Major issues</option>
          </select>
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="suggestions">
            Suggestions for improvement:
          </label>
          <input
            id="suggestions"
            type="text"
            className="form-input"
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
            placeholder="Enter your suggestions"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="comments">
            Additional comments:
          </label>
          <textarea
            id="comments"
            className="form-textarea"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Enter any additional comments"
          />
        </div>
        
        <div className="button-container">
          <button type="submit" className="button">
            Submit Feedback
          </button>
          <button type="button" className="button button-secondary" onClick={onSkip}>
            Skip
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResultsScreen;
