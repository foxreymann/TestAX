import { useState } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import GameSelection from './components/GameSelection';
import AdScreen from './components/AdScreen';
import GameScreen from './components/GameScreen';
import ResultsScreen from './components/ResultsScreen';
import RewardScreen from './components/RewardScreen';

// App screens enum for navigation
enum AppScreen {
  HOME,
  GAME_SELECTION,
  AD_SCREEN,
  GAME_SCREEN,
  RESULTS_SCREEN,
  REWARD_SCREEN
}

function App() {
  // State for current screen and wallet balance
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.HOME);
  const [walletBalance, setWalletBalance] = useState<number>(100);
  const [selectedGame, setSelectedGame] = useState<string>('');
  
  // Function to navigate between screens
  const navigateTo = (screen: AppScreen) => {
    setCurrentScreen(screen);
  };
  
  // Function to add tokens to wallet
  const addTokens = (amount: number) => {
    setWalletBalance(prev => prev + amount);
  };

  // Render the current screen based on state
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case AppScreen.HOME:
        return (
          <HomeScreen 
            balance={walletBalance} 
            onPlayClick={() => navigateTo(AppScreen.GAME_SELECTION)} 
          />
        );
      case AppScreen.GAME_SELECTION:
        return (
          <GameSelection 
            onGameSelect={(game) => {
              setSelectedGame(game);
              navigateTo(AppScreen.AD_SCREEN);
            }}
            onBack={() => navigateTo(AppScreen.HOME)}
          />
        );
      case AppScreen.AD_SCREEN:
        return (
          <AdScreen 
            onAdComplete={() => navigateTo(AppScreen.GAME_SCREEN)}
          />
        );
      case AppScreen.GAME_SCREEN:
        return (
          <GameScreen 
            game={selectedGame}
            onGameComplete={() => navigateTo(AppScreen.RESULTS_SCREEN)}
            onExit={() => navigateTo(AppScreen.HOME)}
          />
        );
      case AppScreen.RESULTS_SCREEN:
        return (
          <ResultsScreen 
            onSubmit={() => navigateTo(AppScreen.REWARD_SCREEN)}
            onSkip={() => navigateTo(AppScreen.REWARD_SCREEN)}
          />
        );
      case AppScreen.REWARD_SCREEN:
        return (
          <RewardScreen 
            reward={10}
            onClaim={(amount) => {
              addTokens(amount);
              navigateTo(AppScreen.HOME);
            }}
            onPlayAgain={() => navigateTo(AppScreen.GAME_SELECTION)}
          />
        );
      default:
        return <HomeScreen balance={walletBalance} onPlayClick={() => navigateTo(AppScreen.GAME_SELECTION)} />;
    }
  };

  return (
    <div className="app-container">
      {renderCurrentScreen()}
    </div>
  );
}

export default App;
