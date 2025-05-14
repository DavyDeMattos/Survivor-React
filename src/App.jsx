import './App.css'
import { Menu } from './components/Menu'
import { Game } from './components/Game'
import { GameOver } from './components/GameOver'
import leaderboard from './assets/data/leaderboard.json'

import { useState } from 'react'
function App() {
  const version = 'v0.0.1'
  const [timeScore, setTimeScore] = useState(0);

  //SECTION - States
  const [status, setStatus] = useState('menu');
  function handlePlay() {
    setStatus('game');
  }

  function handleGameOver(time) {
    setTimeScore(time);
    setStatus('gameover');
  }

  function handleRestart() {
    setStatus('menu');
  }


  return (
    <>
      {status === 'menu' && <Menu version={version} onPlay={handlePlay}/>}
      {status === 'game' && <Game onGameOver={handleGameOver} />}
      {status === 'gameover' && <GameOver timeScore={timeScore} leaderboard={leaderboard} onPlay={handlePlay} onRestart={handleRestart} />}
    </>
  )
}

export default App
