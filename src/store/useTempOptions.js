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
        Celsius_to_Fahrenheit(){
            //(0°Celsius × 9/5) + 32 = 32°Fahrenheit
            let Input = this.userInput.value
            this.outPut = (Input * 9/5) + 32
        },
        Celsius_to_Kelvin(){
            // 0°Celsius + 273.15 
            let Input = this.userInput.value
            this.outPut = Input + 273.15
        },
        Fahrenheit_to_Celsius(){
            // (0°Fahrenheit − 32) × 5/9 = 
            let Input = this.userInput.value
            this.outPut = (Input - 32) * 5/9
        },
        Fahrenheit_to_Kelvin(){
           // (0°Fahrenheit − 32) × 5/9 + 273.15
            let Input = this.userInput.value
            this.outPut = (Input - 32) * 5/9 + 273.15
        },
        Kelvin_to_Celsius(){
           // 0Kelvin − 273.15
            let Input = this.userInput.value
            this.outPut = Input - 273.15
        },
        Kelvin_to_Fahrenheit(){
           //(0K − 273.15) × 9/5 + 32 
            let Input = this.userInput.value
            this.outPut = (Input - 273.15) * 9/5 + 32
        },
    }
})