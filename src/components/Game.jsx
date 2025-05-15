import { useEffect, useState } from 'react';
import { GameUi } from './GameUi';
import { QuestsList } from './QuestsList';
import { Map } from './Map';
import { useStore } from '../store/store';

import questsList from '../assets/data/quests.json';

export function Game({onGameOver}) {
    const { survivor,addSurvivor,maxSurvivor,meat,wood,stone, mapData, clear, decreaseMeat, setMeat, } = useStore();

    const [time, setTime] = useState(0);


    function updateMeat() {
        setMeat(50)
    }
    function updateSurvivor() {
        addSurvivor(5);
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
        clear();
        const interval = setInterval(()=>{
            setTime((prev) => prev + 1);
        },1000);
        return () => {
            clearInterval(interval);
            clear();
        }
    },[]);

    useEffect(() => {
        if(time % 1 == 0){
            decreaseMeat();
        }
    }, [time]);

    useEffect(()=>{
        if(meat < 0){
            setMeat(0);
            onGameOver(time);
        }
    }, [meat])
    

    //!SECTION
    /* -------------------------------------------------------------------------- */
    /*                               //SECTION - Map                              */
    /* -------------------------------------------------------------------------- */
    // function handleCell(key, position){
    function handleCell(key){
        console.log({key});
        if(mapData[key.y][key.x].type == "empty" && wood >= 5){
            // TODO - Faire une fonction de set pour la map
            mapData[key.y][key.x] = {type : 'house'};
            addSurvivor(2);
        }
    }

    //!SECTION

    return (
        <div className="w-full h-full flex flex-col justify-start items-center bg-blue-50 p-2">
            <div className="flex items-start w-full gap-2">
                <QuestsList quests={quests} onValidateQuest={handleCheckboxChange}/>
                <GameUi
                    survivor={survivor}
                    maxSurvivor={maxSurvivor}
                    meat={meat}
                    wood={wood}
                    stone={stone}
                />
            </div>
            <h1>Game</h1>
            <button type="button" onClick={updateMeat}>Add Food</button>
            <button type="button" onClick={updateSurvivor}>Add Survivor</button>
            <Map mapData={mapData} handleCell={handleCell}/>
        </div>
    )
}