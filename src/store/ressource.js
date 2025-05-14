import { create } from "zustand";

export const useRessource = create ((set, get) => ({
    survivor : 0,
    maxSurvivor : 0,
    meat : 10,
    wood : 10,
    stone : 0,


    addSurvivor: (number) => {
        const survivor = get().survivor;
        const maxSurvivor = get().maxSurvivor;
        set({survivor : survivor + number});
        if(survivor >= maxSurvivor){
            console.log('coucou')
            set({maxSurvivor : survivor})
        }
    },
    addMaxSurvivor: (number) => {
        const maxSurvivor = get(maxSurvivor);
        set({maxSurvivor : number});
    },
    clear: () => set({ 
        survivor : 0,
        maxSurvivor : 0,
        meat : 10,
        wood : 10,
        stone : 0, 
    }),
}))