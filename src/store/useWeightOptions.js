import { defineStore } from "pinia";

export const useWeightOptionsStore = defineStore("weight", {
    state: () => ({
        weightScales: ["Tonne", "Kilogram", "Gram", "Milligram", "US Ton", "Stone", "Pound", "Ounce"],
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
    //TODO Finish all the actions.
    actions: {
        reset() {
            this.userInput = [];
        },

        TtoUST() {
            this.userInput * 1.102;
        },
        USTtoT() {
            this.userInput / 1.102;
        },

        TtoS() {
            this.userInput * 157;
        },
        StoT() {
            this.userInput / 157;
        },

        TtoKG() {
            this.userInput * 1000;
        },
        KGtoT() {
            this.userInput / 1000;
        },

        TtoP() {
            this.userInput * 2205;
        },
        PtoT() {
            this.userInput / 2205;
        },

        TtoO() {
            this.userInput * 35274;
        },
        OtoT() {
            this.userInput / 35274;
        },

        TtoG() {
            this.userInput * 1000000;
        },
        GtoT() {
            this.userInput / 1000000;
        },

        TtoMilG() {
            this.userInput * 1000000000;
        },
        MilGtoT() {
            this.userInput / 1000000000;
        },

        TtoMicoG() {
            this.userInput * 1000000000000;
        },
        MicoGtoT() {
            this.userInput / 1000000000000;
        },

        KGtoG() {
            this.userInput * 1000;
        },
        GtoKG() {
            this.userInput / 1000;
        },
    },
});
