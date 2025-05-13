import { useEffect, useState } from 'react';
import { GameUi } from './GameUi';
import { QuestsList } from './QuestsList';
import { Map } from './Map';

import questsList from '../assets/data/quests.json';
import dataMapGame from '../assets/data/map.json'

export function Game({onGameOver}) {
    // const [ressources, setRessources] = useState({
    //     survivor: 0,
    //     maxSurvivor: 0,
    //     meat: 10,
    //     wood: 5,
    //     stone: 0,
    // });
    const [survivor, setSurvivor] = useState(1);
    const [maxSurvivor, setMaxSurvivor] = useState(2);
    const [meat, setMeat] = useState(10);
    const [wood, setWood] = useState(5);
    const [stone, setStone] = useState(0);
    const [mapData, setMapdata] = useState(dataMapGame);
    function updateMeat() {
        setMeat(meat + 5);
    }
    function updateSurvivor() {
        setSurvivor(survivor + 5);
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
        }, 3_000);
        return () => clearInterval(foodDecrease);
    });

    useEffect(()=>{
        if(meat < 0){
            // setMeat(0);
            // onGameOver();
        }
    }, [meat])
    useEffect(()=>{
        if(survivor >= maxSurvivor){
            setMaxSurvivor(survivor)
        }
    }, [survivor, maxSurvivor])

    //!SECTION
    /* -------------------------------------------------------------------------- */
    /*                               //SECTION - Map                              */
    /* -------------------------------------------------------------------------- */
    function handleCell(key){
        console.log(key[0], key[2]);
        const i = key[0];
        const j = key[2];
        if(mapData[i][j].type == "empty" && wood >= 5){
            mapData[i][j] = {type : 'cabin'};
            setSurvivor( survivor => survivor + 2)
            setWood(wood => wood - 5);

        }
        setMapdata([...mapData])
    }

    //!SECTION

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
            <button type="button" onClick={updateMeat}>Add Food</button>
            <button type="button" onClick={updateSurvivor}>Add Survivor</button>
            <Map mapData={mapData} handleCell={handleCell}/>
        </div>
    )
}