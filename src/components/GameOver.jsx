import GameOverIcon from '../assets/img/icons/skull.svg';

export function GameOver({ leaderboard, onRestart,  }){
    
    

    return (
        <nav className="w-full h-full flex flex-col justify-center items-center bg-blue-300">
            <img className="w-16" src={GameOverIcon} />
            <h1 className="text-white font-bold text-6xl">
                Game Over
            </h1>
            <h2 className="rotate-5 ml-16 mb-8 text-white animate-pulse">
                {/* { subtitle } */}
            </h2>
            <div className="flex flex-col items-stretch max-w-md gap-2 my-4">
                <button 
                    className="bg-white rounded px-4 py-2 w-32" 
                    // onClick={onPlay}
                >
                    Play
                </button>
                <button 
                    className="bg-white rounded px-4 py-2 w-32" 
                    // onClick={handleCreditsClick}
                >
                    Credits
                </button>
                <button 
                    className="bg-white rounded px-4 py-2 w-32" 
                    onClick={onRestart}
                >
                    :enu
                </button>
            </div>
            {/* <p className="text-white">v{version}</p> */}
        </nav>
    )
}