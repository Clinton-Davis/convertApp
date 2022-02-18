import { defineStore } from "pinia";

export const useSpeedOptionsStore = defineStore("speed", {
    state: ()=> ({
        speedScales: ['Mph','Kph','Fps','Mps','Knot'],
        userInput: [],
        outPut: null,
    }),
    getters: {
        getScales: (state) => {
           return state.speedScales
        },
        getOutPut: (state) => {
           return state.outPut
        }
    },
})