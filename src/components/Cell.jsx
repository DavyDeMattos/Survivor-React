import BarnIcon from '../assets/img/icons/barn.svg'
import CabinIcon from '../assets/img/icons/cabin.svg'
import MineIcon from '../assets/img/icons/mine.svg'
import MountainIcon from '../assets/img/icons/mountain.svg'
import ShedIcon from '../assets/img/icons/shed.svg'
import TreeIcon from '../assets/img/icons/tree.svg'
import Tree2Icon from '../assets/img/icons/tree2.svg'
import WheatIcon from '../assets/img/icons/wheat.svg'

export function Cell({index, type, handleCell}){
    const icons = {
        'barn' : BarnIcon,
        'cabin' : CabinIcon,
        'mine' : MineIcon,
        'mountain' : MountainIcon,
        'house' : ShedIcon,
        'forest' : TreeIcon,
        'forest2' : Tree2Icon,
        'wheat' : WheatIcon,
    }
    return (
        <img src={icons[type]} className="h-16 w-16  rounded-lg" type={type} onClick={()=>handleCell(index)}/>
    )
}