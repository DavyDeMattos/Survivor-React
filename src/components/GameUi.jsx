import SurvivorIcon from '../assets/img/icons/survivor.svg'
import MeatIcon from '../assets/img/icons/meat.svg'
import WoodIcon from '../assets/img/icons/wood.svg'
import StoneIcon from '../assets/img/icons/stone.svg'

export function GameUi({survivor, maxSurvivor, meat, wood, stone}) {
    const widthIcon = "w-10"
    const textResource = "bg-white text-blue-700 text-m font-medium border-2 border-white rounded-lg px-2 py-1 me-5"
    return (
        <nav className="w-full items-center  space-x-1.5  mx-auto bg-sky-900 text-white  p-4">
            <ul className="flex flex-wrap">
                <li className="flex items-center">
                    <img className={widthIcon} src={SurvivorIcon} alt="Icone de menu" />
                    <p className={textResource}>{survivor}/{maxSurvivor}</p>
                </li>
                <li className="flex items-center">
                    <img className={widthIcon} src={MeatIcon} alt="Icone de menu" />
                    <p className={textResource}>{meat}</p>
                </li>
                <li className="flex items-center">
                    <img className={widthIcon} src={WoodIcon} alt="Icone de menu" />
                    <p className={textResource}>{wood}</p>
                </li>
                <li className="flex items-center">
                    <img className={widthIcon} src={StoneIcon} alt="Icone de menu" />
                    <p className={textResource}>{stone}</p>
                </li>
            </ul>
        </nav>
    )
} 