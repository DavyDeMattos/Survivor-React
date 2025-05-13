import { useState } from 'react';
import { GameUi } from './GameUi';
import { QuestsList } from './QuestsList';
import questsList from '../assets/data/quests.json';

export function Game() {
    // const [ressources, setRessources] = useState({
    //     survivor: 0,
    //     maxSurvivor: 0,
    //     meat: 10,
    //     wood: 5,
    //     stone: 0,
    // });
    const [survivor, setSurvivor] = useState(0);
    const [maxSurvivor, setMaxSurvivor] = useState(0);
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
                        isFinished: true,
                    };
                }
                return quest;
            });
        });
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-sky-700 text-white">
            <GameUi 
                // ressources={ressources}
                survivor={survivor}
                maxSurvivor={maxSurvivor}
                meat={meat}
                wood={wood}
                stone={stone} 
            />
            <QuestsList quests={quests} onValidateQuest={handleCheckboxChange}/>
            <h1>Game</h1>
            <button type="button" className='bg-amber-50 text-black' onClick={updateMaxSurvivor}>Add Max Survivor</button>
            <p>Game content goes here...</p>
        </div>
    )
}