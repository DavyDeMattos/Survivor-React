import { useEffect, useState } from 'react';
import { GameUi } from './GameUi';
import { QuestsList } from './QuestsList';
import { Map } from './Map';

import questsList from '../assets/data/quests.json';

export function Game({onGameOver}) {
    // const [ressources, setRessources] = useState({
    //     survivor: 0,
    //     maxSurvivor: 0,
    //     meat: 10,
    //     wood: 5,
    //     stone: 0,
    // });
    const [survivor, setSurvivor] = useState(2);
    const [maxSurvivor, setMaxSurvivor] = useState(2);
    const [meat, setMeat] = useState(10);
    const [wood, setWood] = useState(5);
    const [stone, setStone] = useState(0);

    function updateMaxSurvivor() {
        setMaxSurvivor(maxSurvivor + 1);
    }

    const [quests, setQuests] = useState(questsList);

    function handleCheckboxChange(questId) {
        setQuests((prevQuests) => {
            return prevQuests.map((quest) => {
                if (quest.id === parseInt(questId)) {
                    return {
                        ...quest,
                        isFinished: "completed",
                    };
                }
                return quest;
            });
        });
    }

    //NOTE - Timer diminuant la nourriture par survivant
    useEffect(() => {
        const foodDecrease = setInterval(() => {
            setMeat(meat => meat - survivor);
            console.log('decrease Food')
        }, 10_000);
        return () => clearInterval(foodDecrease);
    });

    useEffect(()=>{
        if(meat < 0){
            setMeat(0);
            onGameOver();
        }
    }, [meat])


    return (
        <div className="w-full h-full flex flex-col justify-start items-center bg-blue-50 p-2">
            <div className="flex items-start w-full gap-2">
                <QuestsList quests={quests} onValidateQuest={handleCheckboxChange}/>
                <GameUi
                    // ressources={ressources}
                    survivor={survivor}
                    maxSurvivor={maxSurvivor}
                    meat={meat}
                    wood={wood}
                    stone={stone}
                />
            </div>
            <h1>Game</h1>
            <Map />
        </div>
    )
}