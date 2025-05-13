import { SubTextMenu } from './SubTextMenu';
import GameIcon from '../assets/img/icons/shed.svg'
export function Menu({version, onPlay}){
    
    const classButton = "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";
  function handleCreditsClick() {
    alert('Jeu créé par Moi !')
  }
   
    return (
        <nav className=' w-full h-full flex flex-col justify-center items-center bg-sky-700 text-white'>
            <img className='w-16' src={GameIcon} alt="" />
            <h1>Survive-React</h1>
            <h2 className='rotate-5 ml-16 mb-8 text-white animate-pulse'>
                <SubTextMenu/>
            </h2>
            <div className='flex flex-col justify-center items-center'>
            <button type="button" className={classButton} onClick={onPlay}>
                Play
            </button>
            <button type="button" className={classButton}
            onClick={handleCreditsClick}>
                Credits
            </button>

            <p className='text-white'>{version}</p>
            </div>
        </nav>
    )
} 