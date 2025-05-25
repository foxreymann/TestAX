# TestAX App Design Document

## Overview
This document outlines the design and structure of the TestAX app, which allows users to interact with a crypto wallet, watch ads, play games, and earn TestAX tokens.

## User Flow
Based on the presentation, the user flow is:
1. Load app / wallet
2. Choose a game
3. Watch ad
4. Play the game
5. Get paid in $TestAX

## Screen Designs

### 1. Homescreen with Crypto Wallet
**Purpose:** Display user's TestAX tokens and provide entry point to games

**Key Elements:**
- Header with TestAX logo
- Wallet card showing:
  - Current TestAX token balance
  - Wallet address (abbreviated)
  - Recent transactions (if any)
- "Play Games" button - prominent call to action
- Simple, clean design with crypto-themed visuals
- Navigation menu (optional)

**User Actions:**
- View wallet balance
- Click "Play Games" button to proceed to game selection

### 2. Game Selection Screen
**Purpose:** Allow user to choose a game to play

**Key Elements:**
- Header with TestAX logo and back button
- Grid/list of available games
- Each game card shows:
  - Game title
  - Brief description
  - Potential TestAX reward
  - Visual thumbnail
- Continue button

**User Actions:**
- Browse available games
- Select a game to play
- Click continue to proceed to ad screen

### 3. Ad Screen
**Purpose:** Display advertisement before game starts

**Key Elements:**
- Ad container (full screen or prominent placement)
- Loading indicator
- Skip button (appears after minimum viewing time)
- "Ad X of Y" indicator
- Countdown timer showing remaining ad time

**User Actions:**
- Watch ad (required)
- Skip ad after minimum viewing time (if allowed)
- Ad automatically transitions to game after completion

### 4. Game Screen
**Purpose:** Allow user to play the selected game

**Key Elements:**
- Game interface (varies based on game type)
- Score/progress indicator
- Timer (if applicable)
- Controls appropriate for the game type
- Pause button
- Exit button

**User Actions:**
- Play the game
- Pause gameplay
- Exit game (returns to home or results screen)

### 5. Test Results Submission Screen
**Purpose:** Allow user to submit test results and feedback after playing

**Key Elements:**
- Form with fields for:
  - Game experience rating (1-5 stars)
  - Performance feedback (any issues encountered)
  - Suggestions for improvement
  - Optional detailed comments
- Submit button
- Skip button (if feedback is optional)

**User Actions:**
- Provide feedback on game experience
- Submit test results
- Return to homescreen

### 6. Reward Screen
**Purpose:** Show earned TestAX tokens and confirm transaction

**Key Elements:**
- Success animation/graphic
- Amount of TestAX earned
- Updated wallet balance
- Transaction confirmation
- "Return to Home" button
- "Play Again" button

**User Actions:**
- View earned rewards
- Return to homescreen
- Choose to play another game

## Color Scheme and Visual Design
- Primary colors: Yellow gradient (based on slides)
- Secondary colors: Dark background with white text for contrast
- Accent color: Bright blue for buttons and interactive elements
- Modern, clean interface with subtle crypto/blockchain visual elements
- Responsive design for various screen sizes

## Transitions and Animations
- Smooth transitions between screens
- Wallet balance updates with animation
- Loading animations for ad screen
- Success animation for reward screen
- Game-appropriate animations within game screen

## Technical Considerations
- React-based frontend implementation
- Local storage for maintaining session state
- Simulated wallet functionality
- Simple game implementation
- Mock ad display system
