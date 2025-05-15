
import { Menu } from './components/Menu'
import { Game } from './components/Game'
import { GameOver } from './components/GameOver'
import { NotFoundPage } from './components/NotFoundPage'
import { useState } from 'react';
import { useGameState } from "@/stores/GameState";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  // const version = '0.0.1';
  const {version, currentScore} = useGameState();

  const [leaderboard, setLeaderboard] = useState([
    { name: 'Player 1', score: 10 },
    { name: 'Player 2', score: 5 },
    { name: 'Player 3', score: 2 }
  ]);

  function handleLeaderboardEntry(name) {
    const newEntry = { name, score: currentScore};
    const newLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    setLeaderboard(newLeaderboard);
  }


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu version={version} />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gameover" element={<GameOver leaderboard={leaderboard} onLeaderboardEntry={handleLeaderboardEntry}/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
      {/* {status === 'menu' && <Menu version={version} onPlay={handlePlay} />} */}
      {/* {status === 'game' && <Game onGameOver={handleGameOver} />}
      {status === 'gameover' && <GameOver onRestart={handlePlay} leaderboard={leaderboard} onLeaderboardEntry={handleLeaderboardEntry}/>} */}
    </>
  )

}

export default App
