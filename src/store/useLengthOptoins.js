import { defineStore } from "pinia";

export const useLengthOptionsStore = defineStore("length", {
    state: ()=> ({
        lengthScales: ['Kilometre','Meter','Centimeter','Millimetre','Mile','Nautical Mile', 'Yard','Foot', 'Inch' ],
        userInput: [],
        outPut: null,
    }),
    getters: {
        getScales: (state) => {
           return state.lengthScales
        },
        getOutPut: (state) => {
           return state.outPut
        }
    },
})