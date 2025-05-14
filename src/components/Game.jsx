import { useEffect, useState } from 'react';
import { GameUi } from './GameUi';
import { QuestsList } from './QuestsList';
import { Map } from './Map';
import { useRessource } from '../store/ressource';

import questsList from '../assets/data/quests.json';
import dataMapGame from '../assets/data/map.json'
import { useStore } from 'zustand';

export function Game({onGameOver}) {
    const { survivor,addSurvivor,maxSurvivor,meat,wood,stone } = useRessource()
    const clear = useRessource((state) => state.clear)
    // const survivor = useRessource((state) => state.survivor);
    // const addSurvivor = useRessource((state) => state.addSurvivor);
    // const maxSurvivor = useRessource((state) => state.maxSurvivor);
    // const meat = useRessource((state) => state.meat);
    // const wood = useRessource((state) => state.wood);
    // const stone = useRessource((state) => state.stone);

    // Génération manuelle de la carte et de ses cellules
    const [mapData, setMapdata] = useState(new Array(5).fill(null).map(() => new Array(5).fill({ type: 'empty' })));

    const [time, setTime] = useState(0);


    function updateMeat() {
        // setMeat(meat + 5);
        useRessource.setState(() => ({ meat: 46 }));
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
        const interval = setInterval(()=>{
            setTime((prev) => prev + 1);
        },1000);
        return () => {
            clearInterval(interval);
            clear(); // Remet à zéro les ressources
        }
    },[]);

    useEffect(() => {
        if(time % 1 == 0){
            useRessource.setState((state) => ({ meat: state.meat - state.survivor }));
        }
    }, [time]);

    useEffect(()=>{
        if(meat < 0){
            useRessource.setState(() => ({ meat: 0 }));
            onGameOver(time);
        }
    }, [meat])
    
    useEffect(()=>{
        if(survivor >= maxSurvivor){
            // useRessource.setState(() => ({ maxSurvivor: survivor }));
            // setMaxSurvivor(survivor)
        }
    }, [survivor, maxSurvivor])

    //!SECTION
    /* -------------------------------------------------------------------------- */
    /*                               //SECTION - Map                              */
    /* -------------------------------------------------------------------------- */
    // function handleCell(key, position){
    function handleCell(key){
        if(mapData[key.y][key.x].type == "empty" && wood >= 5){
            mapData[key.y][key.x] = {type : 'house'};
            useRessource.setState(() => ({ survivor : survivor + 2 }));
            useRessource.setState(() => ({ wood : wood + 2 }));
        }
        setMapdata(mapData)
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