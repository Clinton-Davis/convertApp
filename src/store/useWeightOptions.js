import { defineStore } from "pinia";

export const useWeightOptionsStore = defineStore("weight", {
    state: () => ({
        weightScales: ["Metric Ton", "Kilogram", "Gram", "Milligram", "Imperial Ton", "Stone", "Pound", "Ounce"],
        userInput: [],
        outPut: null,
    }),
    getters: {
        getScales: (state) => {
            return state.weightScales;
        },
        getOutPut: (state) => {
            return state.outPut;
        },
    },
});
