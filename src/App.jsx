import './App.css'
import { Menu } from './components/Menu'
import { Game } from './components/Game'
import { GameOver } from './components/GameOver'

import { useState } from 'react'
function App() {
 const version = 'v0.0.1'

  //SECTION - States
  const [status, setStatus] = useState('menu');
  function handlePlay() {
    setStatus('game');
  }

  function handleGameOver() {
    setStatus('gameover');
  }

  function handleRestart() {
    setStatus('menu');
  }


  return (
    <>
      {status === 'menu' && <Menu version={version} onPlay={handlePlay}/>}
      {status === 'game' && <Game onGameOver={handleGameOver} />}
      {status === 'gameover' && <GameOver onRestart={handleRestart} />}
    </>
  )
}

export default App
