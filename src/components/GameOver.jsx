import { Link } from 'react-router-dom';
import GameOverIcon from '../assets/img/icons/skull.svg';
import { useState } from 'react';

export function GameOver({ leaderboard, onLeaderboardEntry }){
    
    const [canRestart, setCanRestart] = useState(false);
    const [name, setName] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        onLeaderboardEntry(name);
        setCanRestart(true);
        
    }

    return (
        <nav className="w-full h-full flex flex-col justify-center items-center bg-blue-300">
            <img className="w-16" src={GameOverIcon} />
            <h1 className="text-white font-bold text-6xl">
                Game Over
            </h1>
            <h2 className="mb-8 text-white">
                Leaderboard
            </h2>
            { canRestart && <div className="flex flex-col items-stretch max-w-md gap-2 my-4">
                <Link 
                    className="bg-white rounded px-4 py-2 w-32" 
                    to="/game"
                >
                    Rejouer
                </Link>
            </div>}
            { 
                !canRestart && <form className="flex items-center mb-4" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Entrez votre nom" 
                        className="border-2 border-blue-200 rounded px-4 py-2 w-72"
                    />
                    <button 
                        type="submit" 
                        className="bg-white rounded px-4 py-2 ml-2"
                        disabled={name.length < 3}
                    >
                        Envoyer
                    </button>
                </form>
            }
            <ul className="bg-blue-100 flex flex-col items-center rounded-xl border-1 border-blue-200 w-72">
                {
                    leaderboard.map((player, index) => (
                        <li key={index} className="flex w-full p-4 border-b border-blue-200 last:border-b-0 items-center">
                            <div className="flex flex-col flex-1">
                                <p className="font-bold leading-none text-sm">{player.name}</p>
                                <p className="leading-none text-xs">Score: {player.score}</p>
                            </div>
                        </li>
                    ))
                }
                </ul>
        </nav>
    )
}