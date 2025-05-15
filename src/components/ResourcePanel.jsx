import WoodIcon from "@/assets/img/icons/wood.svg";
import StoneIcon from "@/assets/img/icons/stone.svg";
import FoodIcon from "@/assets/img/icons/meat.svg";
import PeopleIcon from "@/assets/img/icons/survivor.svg";
import { useGameState } from "@/stores/GameState";

export function ResourcePanel() {

    // states
    const { stone, wood, food, people } = useGameState((state) => state);
    // getters
    const availablePeople = useGameState((state) => state.getAvailablePeople());
    
    return (
        <ul className="bg-blue-100 p-2 w-full flex items-center rounded-xl border-1 border-blue-200 gap-6">
            <li className="flex items-center">
                <img src={PeopleIcon} width="40" className="mr-1"/>
                <span className="font-bold text-xl text-blue-400 bg-white px-3 rounded-lg">
                    {availablePeople}
                    <span className="opacity-50">
                        /{people}
                    </span>
                </span>
                
            </li>
            <li className="flex items-center">
                <img src={FoodIcon} width="40" className="mr-1"/>
                <span className="font-bold text-xl text-blue-400 bg-white px-3 rounded-lg">{food}</span>
            </li>
            <li className="flex items-center">
                <img src={WoodIcon} width="40" className="mr-1"/>
                <span className="font-bold text-xl text-blue-400 bg-white px-3 rounded-lg">{wood}</span>
            </li>
            <li className="flex items-center">
                <img src={StoneIcon} width="40" className="mr-1"/>
                <span className="font-bold text-xl text-blue-400 bg-white px-3 rounded-lg">{stone}</span>
            </li>
        </ul>
    );
}