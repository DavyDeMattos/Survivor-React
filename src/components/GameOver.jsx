import { useEffect, useState } from 'react';
import GameOverIcon from '../assets/img/icons/skull.svg';

export function GameOver({ timeScore, leaderboard, onPlay, onRestart,  }){
    
    // console.log({
    //     timeScore,
    //     leaderboard,
    // })
    const [namePlayer, setNamePlayer] = useState();
    const [buttonIsDisabled, setButtonIsDisabled ] = useState(true);
    const [displayLeaderboard, setDisplayLeaderboard] = useState(new Array(1).fill({ name: 'Player', score : 100 }));

    // setDisplayLeaderboard(leaderboard.slice(0, 5));
    console.log(displayLeaderboard)
    useEffect(()=>{
        setButtonIsDisabled((namePlayer === undefined || namePlayer.length < 3) ? true : false);
        // console.log(namePlayer);
    }, [namePlayer])


    function handleSubmit(e){
        e.preventDefault();
        // if
        console.log(namePlayer.length)
    }
    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-blue-300">
            <img className="w-16" src={GameOverIcon} />
            <h1 className="text-white font-bold text-6xl">
                Game Over
            </h1>
            <h2 className="rotate-5 ml-16 mb-8 text-white animate-pulse">
                {/* { subtitle } */}
            </h2>
            



            <div className="flex flex-col items-stretch max-w-md gap-2 my-4">
                <form className=" mx-auto flex flex-row" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <input type="text" id="base-input" placeholder='Entrez votre nom' value={namePlayer} onChange={(e)=>setNamePlayer(e.target.value)} className="bg-blue-50 border border-blue-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <button type="submit" disabled={buttonIsDisabled} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed disabled:opacity-50" >Envoyer</button>
                </form>

                {/* <div className="grid max-h-lvh grid-cols-1 gap-0.5 relative overflow-x-auto shadow-md rounded-lg">
                    {displayLeaderboard.map((player, indexRow)=>
                        <div key={indexRow} className='bg-gray-400 p-1'>
                            <h5>{player.name}</h5>
                            <p>score : {player.score}</p>
                        </div>
                    )}
                </div> */}



                <div className="flex flex-col items-stretch max-w-md gap-2 my-4">
                    <button
                        className="bg-white rounded px-4 py-2"
                        onClick={onPlay}
                    >
                        Play
                    </button>
                    <button
                        className="bg-white rounded px-4 py-2"
                        // onClick={handleCreditsClick}
                    >
                        Credits
                    </button>
                    <button
                        className="bg-white rounded px-4 py-2"
                        onClick={onRestart}
                    >
                        Menu
                    </button>
                </div>
            </div>
            {/* <p className="text-white">v{version}</p> */}
        </div>
    )
}