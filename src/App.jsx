import './App.css'
import { Menu } from './components/Menu'
import { Game } from './components/Game'
import { useState } from 'react'
function App() {
 const version = 'v0.0.1'

  //SECTION - States
  const [status, setStatus] = useState('menu');
  function handlePlay() {
    setStatus('game');
  }


  return (
    <>
      {status === 'menu' && <Menu version={version} onPlay={handlePlay}/>}
      {status === 'game' && <Game />}
    </>
  )
}

export default App
