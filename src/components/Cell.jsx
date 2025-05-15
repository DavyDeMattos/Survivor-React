import ForestIcon from "@/assets/img/icons/tree.svg";
import HouseIcon from "@/assets/img/icons/shed.svg";

const icons = {
    forest: ForestIcon,
    house: HouseIcon,

}

export function Cell({ type, onClick }) {
    
    return (
        <div className="relative flex justify-center items-center border-1 border-blue-200 hover:bg-blue-200" onClick={onClick}>
            { icons[type] && <img src={icons[type]} alt={type} className="w-16 h-16" /> }
        </div>
    );
}