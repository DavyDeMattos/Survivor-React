import BarnIcon from '../assets/img/icons/barn.svg'
import CabinIcon from '../assets/img/icons/cabin.svg'
import MineIcon from '../assets/img/icons/mine.svg'
import MountainIcon from '../assets/img/icons/mountain.svg'
import TreeIcon from '../assets/img/icons/tree.svg'
import Tree2Icon from '../assets/img/icons/tree2.svg'
import WheatIcon from '../assets/img/icons/wheat.svg'

export function Cell({index, type, handleCell}){
    let iconsSource = null;
    switch (type) {
        case "barn":
            iconsSource = BarnIcon;
            break;
        case "house":
            iconsSource = CabinIcon;
            break;
        case "mine":
            iconsSource = MineIcon;
            break;
        case "mountain":
            iconsSource = MountainIcon;
            break;
        case "forest":
            iconsSource = TreeIcon;
            break;
        case "forest2":
            iconsSource = Tree2Icon;
            break;
        case "wheat":
            iconsSource = WheatIcon;
            break;
        default:
            break;
    }
    return (
        <img src={iconsSource} className="h-16 w-16  rounded-lg" type={type} onClick={()=>handleCell(index)}/>
    )
}