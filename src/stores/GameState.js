import { create } from 'zustand';

const defaultMap = new Array(5).fill(null).map(() => new Array(5).fill({ type: 'empty', people: 0 }));
defaultMap[0][0] = { type: 'forest', people: 0 };
defaultMap[4][4] = { type: 'forest', people: 0 };

export const useGameState = create((set, get) => ({
    // State
    stone: 0,
    wood: 10,
    food: 10,
    people: 0,
    maxPeople: 0,
    time: 0,
    cells: [...defaultMap],
    currentScore: 0,
    version: '0.0.1',
    // Getters
    getAvailablePeople: () => {
        return get().people;
    },
    // Setters
    setStone: (stone) => set({ stone }),
    setWood: (wood) => set({ wood }),
    setFood: (food) => set({ food }),
    setPeople: (people) => set({ people }),
    setMaxPeople: (maxPeople) => set({ maxPeople }),
    setCurrentScore: (currentScore) => set({ currentScore }),
    addTime: (val) => set(() => ({ time: get().time + val })),
    reset: () =>{
        set({
            stone: 0,
            wood: 10,
            food: 10,
            people: 0,
            time: 0,
            cells: [...defaultMap],
        });
    },
    // Actions
    consumeFood: () => {
        const { food, people } = get();
        set({ food: food - people });
    },
    createHouse(cell){
        const { wood, people } = get();

        if(wood >= 5){
            set({ wood: wood - 5, people: people + 2 });
            cell.type = 'house';
        }
        return cell;
    },
    assignPeopleToForest(cell){
        const { people } = get();
        console.log("cell.people")
        console.log({cell})
        if(people > 0){
            set({ people: people -1 });
            cell.people = cell.people + 1;
        }
        return cell;
    },
    updateCellType: (position) => {
        const cells  = get().cells;
        const { createHouse, assignPeopleToForest} = get();

        const updatedCells = cells.map((row) => row.map((cell) => ({ ...cell })));
        let cell = updatedCells[position.y][position.x];
        // if(cell.type != 'empty'){
        //     return;
        // }
        // if(newType === 'house'){
        //     cell = createHouse(cell);
        // }

        switch (cell.type) {
            case 'empty':
                cell = createHouse(cell);
                break;
            case 'forest':
                cell = assignPeopleToForest(cell);
                break;
        
            default:
                return;
                // break;
        }
        updatedCells[position.y][position.x] = cell;
        set({ cells: updatedCells });
    },
}));
