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
    setSurvivor: (number) => {
        set({survivor : number})
    },
    setMaxSurvivor: (number) => {
        set({maxSurvivor : number})
    },
    setMeat: (number) => {
        set({meat : number})
    },
    setWood: (number) => {
        set({wood : number})
    },
    setStone: (number) => {
        set({stone : number})
    },
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
        const survivor = get().survivor;
        const maxSurvivor = get(maxSurvivor);
        set({maxSurvivor : maxSurvivor + number});
        if(survivor >= maxSurvivor){
            set({survivor : maxSurvivor})
        }
    },
    addMeat: (number) => {
        const meat = get().meat;
        (meat + number < 0) ? set({meat : 0}) : set({meat : meat + number});
    },
    decreaseMeat: () => {
        const survivor = get().survivor;
        const meat = get().meat;
        set({meat : meat - survivor})
    },
    addWood: (number) => {
        const wood = get().wood;
        (wood + number < 0) ? set({wood : 0}) : set({wood : wood + number});
    },
    addStone: (number) => {
        const stone = get().stone;
        (stone + number < 0) ? set({stone : 0}) : set({stone : stone + number});
    },
    //!SECTION
    clear: () => set({ 
        survivor : 0,
        maxSurvivor : 0,
        meat : 10,
        wood : 10,
        stone : 0,
        mapData : new Array(5).fill(null).map(() => new Array(5).fill({ type: 'empty' })),
    }),
}))