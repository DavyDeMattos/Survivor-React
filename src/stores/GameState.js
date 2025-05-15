import { create } from 'zustand';

const defaultMap = new Array(5).fill(null).map(() => new Array(5).fill({ type: 'empty' }));
defaultMap[0][0] = { type: 'forest' };
defaultMap[4][4] = { type: 'forest' };

export const useGameState = create((set, get) => ({
    // State
    stone: 0,
    wood: 10,
    food: 10,
    people: 0,
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
    updateCellType: (newType, position) => {
        const cells  = get().cells;
        const createHouse = get().createHouse;

        const updatedCells = cells.map((row) => row.map((cell) => ({ ...cell })));
        let cell = updatedCells[position.y][position.x];
        if(cell.type != 'empty'){
            return;
        }
        if(newType === 'house'){
            cell = createHouse(cell);
        }
        updatedCells[position.y][position.x] = cell;
        set({ cells: updatedCells });
    },
}));
