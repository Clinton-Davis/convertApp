import { defineStore } from "pinia";

export const useTempOptionsStore = defineStore("temp", {
    state: ()=> ({
        tempScales: ['Fahrenheit', 'Celsius', 'Kelvin'],
        userInput: [],
        outPut: null,
    }),
    getters: {
        getScales: (state) => {
           return state.tempScales
        },
        getOutPut: (state) => {
           return state.outPut
        }
    },
    actions: {
        reset() {
            this.userInput = [];
        },
        CtoF(){
            //(0°C × 9/5) + 32 = 32°F
            let Input = this.userInput.value
            this.outPut = (Input * 9/5) + 32
        },
        CtoK(){
            // 0°C + 273.15 
            let Input = this.userInput.value
            this.outPut = Input + 273.15
        },
        FtoC(){
            // (0°F − 32) × 5/9 = 
            let Input = this.userInput.value
            this.outPut = (Input - 32) * 5/9
        },
        FtoK(){
           // (0°F − 32) × 5/9 + 273.15
            let Input = this.userInput.value
            this.outPut = (Input - 32) * 5/9 + 273.15
        },
        KtoC(){
           // 0K − 273.15
            let Input = this.userInput.value
            this.outPut = Input - 273.15
        },
        KtoF(){
           //(0K − 273.15) × 9/5 + 32 
            let Input = this.userInput.value
            this.outPut = (Input - 273.15) * 9/5 + 32
        },
    }
})