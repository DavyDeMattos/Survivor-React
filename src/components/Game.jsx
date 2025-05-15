import { QuestList } from "./QuestList";
import { ResourcePanel } from "./ResourcePanel";
import { Map } from "./Map";
import { useEffect, useState } from "react";
import { useGameState } from "@/stores/GameState";
import { useNavigate } from "react-router-dom";

const defaultQuests = [
    {
        id: 1,
        name: "Une bonne nuit de sommeil",
        description: "Créez une cabane pour loger les premiers aventuriers.",
        completed: false,
    },
    {
        id: 2,
        name: "Envoyer les aventurier en forêt",
        description: "Pour gagner du bois et de la nourriture",
        completed: false,
    },
    {
        id: 3,
        name: "Construisez une nouvelle cabane",
        description: "Il faut agrandir la colonie",
        completed: false,
    },
    {
        id: 4,
        name: "Créez une ferme",
        description: "Pour gagner de la nourriture",
        completed: false,
    },
    { id: 5,
        name: "Créez une scierie",
        description: "Pour gagner du bois",
        completed: false,
    }
];

export function Game() {
    // states
    const { food , time } = useGameState();
    // actions
    const { addTime, consumeFood, reset, setCurrentScore, ressourceFromForest } = useGameState();

    const [quests, setQuests] = useState(defaultQuests);

    const navigate = useNavigate();


    function handleValidateQuest(questId){
        const updatedQuests = quests.map((quest) => {
            if (quest.id === questId) {
                quest.completed = true;
            }
            return quest;
        });
        setQuests(updatedQuests);
    };

    useEffect(() => {
        const interval = setInterval(()=>{
            addTime(1);
        },1000);
        return () => {
            clearInterval(interval);
        }
    },[]);

    useEffect(() => {
        if(time % 2 == 0){
            ressourceFromForest();
        }
        if(time % 4 == 0){
            if(food <= 1){
                handleGameOver(time);
            }
            consumeFood();
        }
    }, [time]);

    function handleGameOver(time) {
        setCurrentScore(time);
        reset();
        navigate("/gameover");
      }

    return (
        <div className="w-full h-full flex flex-col justify-start items-center bg-blue-50 p-2">
            <div className="flex items-start w-full gap-2">
                <QuestList quests={quests} onValidateQuest={handleValidateQuest} />
                <ResourcePanel/>
            </div>
            <Map />
        </div>
    );
}