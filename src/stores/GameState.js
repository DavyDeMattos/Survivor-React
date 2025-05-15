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
    time: 0,
    cells: [...defaultMap],
    currentScore: 0,
    version: '0.0.1',
    // Getters
    getDataFromCells: () => {
        const cells = get().cells;
        
        // Objet qui contiendra tous les attributs calculés
        const result = {
            people: 0,
            // Ajoutez ici d'autres attributs initialisés à leur valeur par défaut
            // Par exemple:
            // resources: 0,
            // buildings: 0,
            // vehicles: 0
        };
        
        // Parcourir le tableau une seule fois pour calculer tous les attributs
        for (let i = 0; i < cells.length; i++) {
            for (let j = 0; j < cells[i].length; j++) {
                const cell = cells[i][j];
                
                // Accumuler chaque attribut
                result.people += cell.people || 0;
                // Ajoutez des conditions similaires pour d'autres attributs
                // result.resources += cell.resources || 0;
                // result.buildings += cell.buildings || 0;
                // result.vehicles += cell.vehicles || 0;
            }
        }
        return result;
    },
    getAvailablePeople: () => {
        const people = get().people;
        const getDataFromCells = get().getDataFromCells;
        return people - getDataFromCells().people;
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
    ressourceFromForest(){
        const { food, wood } = get();
        const { getDataFromCells } = get();
        const total = getDataFromCells().people;
        if(total > 0){
            set({
                food: (food + (1 * total)),
                wood: (wood + (1 * total)),
            })
        }
    },
    createHouse : (cell)=> {
        const { wood, people } = get();

        if(wood >= 5){
            set({ wood: wood - 5, people: people + 2 });
            cell.type = 'house';
        }
        return cell;
    },
    assignPeopleToForest: (cell) => {
        const getAvailablePeople = get().getAvailablePeople;
        console.log(getAvailablePeople());
        if(getAvailablePeople() > 0){
            // set({ people: people -1 });
            cell.people = cell.people + 1;
        }
        return cell;
    },
    // getNumberPeopleInForest: () => {
    //     const cells  = get().cells;
    //     let number = cells.reduce((total, row) => {
    //         return total + row.reduce((rowTotal, cell) => rowTotal + cell.people, 0);
    //       }, 0);
    //       console.log({number})
    //     number = isNaN(number) ? 0 : number
    //     return number;      
    // },
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
