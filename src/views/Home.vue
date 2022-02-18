<template>
  <div class="container h-screen w-full bg-slate-500 flex justify-center items-center">
    <div class="container-ms rounded-md shadow-lg h-[98vh] max-w-[30rem] bg-slate-900">
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-1 flex justify-start">
          <img class="h-14 w-14" src="src/images/arrows_svg.svg" alt="Logo" />
        </div>
        <div class="col-span-1">
          <h1 class="">Conveter</h1>
        </div>
      </div>
      <div class="form_container grid grid-cols-5 gap-4 mx-auto w-full h-10 my-3">
        <div class="relative">
          <div
            class="absolute -inset-1 bg-red-500 rounded-md py-3 px-7"
            :class="{ blur: temp }"
          ></div>
          <button
            @click="Active('temp')"
            class="cursor-pointer py-3 px-7 col-span-1 rounded-md bg-red-600 relative"
          >
            <span class="flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24">
                <path
                  d="M12 9.312l-1.762.491 1.562.881-.491.871-1.562-.881.491 1.762-.963.268-.76-2.724-2.015-1.126v1.939l2 2-.707.707-1.293-1.293v1.793h-1v-1.793l-1.293 1.293-.707-.707 2-2v-1.939l-2.015 1.126-.761 2.724-.963-.268.491-1.762-1.562.882-.491-.871 1.562-.881-1.761-.492.269-.962 2.725.76 1.982-1.11-1.983-1.109-2.724.759-.269-.962 1.762-.491-1.563-.882.491-.871 1.562.881-.49-1.762.963-.269.76 2.725 2.015 1.128v-1.94l-2-2 .707-.707 1.293 1.293v-1.793h1v1.793l1.293-1.293.707.707-2 2v1.94l2.016-1.127.76-2.725.963.269-.492 1.761 1.562-.881.491.871-1.562.881 1.762.492-.269.962-2.725-.76-1.982 1.11 1.982 1.109 2.725-.76.269.963zm4-5.812v7.525c0 1.57-.514 2.288-1.41 3.049-1.011.859-1.59 2.107-1.59 3.426 0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-1.319-.579-2.567-1.589-3.426-.897-.762-1.411-1.48-1.411-3.049v-7.525c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5zm5 0v7.525c0 .587.258 1.145.705 1.525 1.403 1.192 2.295 2.966 2.295 4.95 0 3.59-2.909 6.5-6.5 6.5s-6.5-2.91-6.5-6.5c0-1.984.892-3.758 2.295-4.949.447-.381.705-.94.705-1.526v-7.525c0-1.934 1.567-3.5 3.5-3.5s3.5 1.566 3.5 3.5zm0 14c0 1.934-1.567 3.5-3.5 3.5s-3.5-1.566-3.5-3.5c0-1.141.599-2.084 1.393-2.781 1.01-.889 1.607-1.737 1.607-3.221v-.498h1v.498c0 1.486.595 2.33 1.607 3.221.794.697 1.393 1.64 1.393 2.781z"
                />
              </svg>
            </span>
          </button>
        </div>
        <button
          @click="Active('weight')"
          class="cursor-pointer col-span-1 mx-1 rounded-md bg-amber-600"
        >
          Weight
        </button>
        <button
          @click="Active('lengh')"
          class="cursor-pointer col-span-1 mx-1 rounded-md bg-green-600"
        >
          lengh
        </button>
        <button
          @click="Active('speed')"
          class="cursor-pointer col-span-1 mx-1 rounded-md bg-yellow-600"
        >
          speed
        </button>
        <button
          @click="Active('time')"
          class="cursor-pointer col-span-1 mx-1 rounded-md bg-indigo-600"
        >
          Time
        </button>
      </div>
      <!-- FORMS  -->
      <!-- Amount Input  -->
      <div class="my-5">
        <div class="mt-1">
          <input
            type="number"
            name="name"
            id="name"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
            placeholder="Amount"
          />
        </div>
      </div>
      <!-- Convert From  -->
      <div>
        <select
          id="location"
          name="location"
          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
        >
          <option selected disabled>Select from</option>
          <option v-for="l in list" :value="l">{{ l }}</option>
        </select>
      </div>
      <h2 class="text-white text-center">TO</h2>
      <!-- Convert To  -->
      <div>
        <select
          id="location"
          name="location"
          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
        >
          <option selected disabled value="">Select To</option>
          <option v-for="l in list" :value="l">{{ l }}</option>
        </select>
      </div>
      <div class="col-span-1 relative flex justify-center my-1">
        <!-- Just an Idea  -->
        <!-- <h2 class="text-white absolute">Convert</h2> -->
        <a class="cursor-pointer"
          ><img class="h-20 w-20" src="src/images/arrows_svg.svg" alt="Logo"
        /></a>
      </div>
      <div
        class="shadow-sm focus:ring-indigo-500 bg-slate-50 h-11 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full flex justify-center items-center"
      >
        <h3 class="text-center">
          {{ output }}{{ temp }}{{ weight }}{{ length }}{{ time }}
        </h3>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useTempOptionsStore } from "../store/useTempOptions";
import { useLengthOptionsStore } from "@/store/useLengthOptoins";
import { useSpeedOptionsStore } from "@/store/useSpeedOptoins";
import { useWeightOptionsStore } from "@/store/useWeightOptions";
import { useTimeOptionsStore } from "@/store/useTimeOptions";
const tempOptions = useTempOptionsStore();
const weightOptions = useWeightOptionsStore();
const lengthOptions = useLengthOptionsStore();
const speedOptions = useSpeedOptionsStore();
const timeOptions = useTimeOptionsStore();
let output = ref("");

let temp = ref(false);
let weight = ref(false);
let length = ref(false);
let speed = ref(false);
let time = ref(false);
let list = ref("");

function Active(name) {
  switch (name) {
    case "temp":
      list.value = tempOptions.getScales;
      temp.value = true;
      weight.value = false;
      length.value = false;
      speed.value = false;
      time.value = false;
      break;
    case "weight":
      weight.value = true;
      list.value = weightOptions.getScales;
      temp.value = false;
      length.value = false;
      speed.value = false;
      time.value = false;
      break;
    case "lengh":
      length.value = true;
      list.value = lengthOptions.getScales;
      temp.value = false;
      weight.value = false;
      speed.value = false;
      time.value = false;
      break;
    case "speed":
      speed.value = true;
      list.value = speedOptions.getScales;
      temp.value = false;
      weight.value = false;
      time.value = false;
      length.value = false;
      break;
    case "time":
      time.value = true;
      list.value = timeOptions.getScales;
      temp.value = false;
      weight.value = false;
      speed.value = false;
      length.value = false;
      break;
    default:
      break;
  }
}
</script>
<style scoped>
.active {
  box-shadow: 1px 1px 1px white;
  background-color: green;
}
</style>
