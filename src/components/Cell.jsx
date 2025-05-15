import ForestIcon from "@/assets/img/icons/tree.svg";
import HouseIcon from "@/assets/img/icons/shed.svg";

const icons = {
    forest: ForestIcon,
    house: HouseIcon,

}

export function Cell({ type,people, onClick }) {
    
    return (
        <div className="relative flex justify-center items-center border-1 border-blue-200 hover:bg-blue-200" onClick={onClick}>
            { icons[type] && <img src={icons[type]} alt={type} className="w-16 h-16" /> }
            { people > 0 && <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-white border-2 border-white rounded-full top-1 end-1 dark:border-gray-900">{people}</div>}
        </div>
    );
}