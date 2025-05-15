import { create } from "zustand";

export const useStore = create ((set, get) => ({
    survivor : 0,
    maxSurvivor : 0,
    meat : 10,
    wood : 10,
    stone : 0,

    // Génération manuelle de la carte et de ses cellules
    mapData : new Array(5).fill(null).map(() => new Array(5).fill({ type: 'empty' })),
    

    /* -------------------------------------------------------------------------- */
    /*                             //SECTION - Setter                             */
    /* -------------------------------------------------------------------------- */
    setSurvivor: (survivor) => set({survivor}),
    setMaxSurvivor: (maxSurvivor) => set({maxSurvivor}),
    setMeat: (meat) => set({meat}),
    setWood: (wood) => set({wood}),
    setStone: (stone) => set({stone}),
    //!SECTION
    /* -------------------------------------------------------------------------- */
    /*                          //SECTION - Add Function                          */
    /* -------------------------------------------------------------------------- */
    // addSurvivor: (number) => {
    //     const survivor = get().survivor;
    //     const maxSurvivor = get().maxSurvivor;
    //     if(survivor + number >= maxSurvivor){
    //         set({maxSurvivor : survivor})
    //     }
    //     set({survivor : survivor + number});
        
    // },
    addSurvivor: (number) => {
        set((state) => {
            const newSurvivor = state.survivor + number;
            const newMaxSurvivor = newSurvivor >= state.maxSurvivor ? newSurvivor : state.maxSurvivor;
    
            return {
                survivor: newSurvivor,
                maxSurvivor: newMaxSurvivor,
            };
        });
    },
    addMaxSurvivor: (number) => {
        const { survivor, maxSurvivor } = get();
        set({maxSurvivor : maxSurvivor + number});
        if(survivor >= maxSurvivor){
            set({survivor : maxSurvivor})
        }
    },
    addMeat: (number) => {
        const {meat} = get();
        (meat + number < 0) ? set({meat : 0}) : set({meat : meat + number});
    },
    decreaseMeat: () => {
        const { survivor, meat } = get();
        set({meat : meat - survivor})
    },
    addWood: (number) => {
        const {wood} = get();
        (wood + number < 0) ? set({wood : 0}) : set({wood : wood + number});
    },
    addStone: (number) => {
        const {stone} = get();
        (stone + number < 0) ? set({stone : 0}) : set({stone : stone + number});
    },
    //!SECTION
    //SECTION - Get
    getAvaibleSurvivor: () => {
        get().survivor;
    },
    //!SECTION
    //SECTION - Manipulation de la map
    handleCell: (key)=> {
        console.log({key});
        if(mapData[key.y][key.x].type == "empty" && wood >= 5){
            // TODO - Faire une fonction de set pour la map
            mapData[key.y][key.x] = {type : 'house'};
            addSurvivor(2);
        }
    },
    // createHouse()
    // updateCellType()
    
    //!SECTION
    reset: () => set({ 
        survivor : 0,
        maxSurvivor : 0,
        meat : 10,
        wood : 10,
        stone : 0,
        mapData : new Array(5).fill(null).map(() => new Array(5).fill({ type: 'empty' })),
    }),
}))