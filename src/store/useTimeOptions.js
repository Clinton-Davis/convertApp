import { defineStore } from "pinia";

export const useTimeOptionsStore = defineStore("time", {
    state: ()=> ({
       timeScales: ['Year','Week','Day','Hour','minute', 'Second', 'Millisecond'],
        userInput: [],
        outPut: null,
    }),
    getters: {
        getScales: (state) => {
           return state.timeScales
        },
        getOutPut: (state) => {
           return state.outPut
        }
    },
})