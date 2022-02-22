import { defineStore } from "pinia";

export const useSpeedOptionsStore = defineStore("speed", {
    state: () => ({
        speedScales: ["Mile/hour", "Kilometer/hour", "Foot/second", "Meter/second", "Knot"],
        userInput: [],
        outPut: null,
    }),
    getters: {
        getScales: (state) => {
            return state.speedScales;
        },
        getOutPut: (state) => {
            return state.outPut;
        },
    },
});
