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
        <button
          @click="Active('temp')"
          class="cursor-pointer col-span-1 mx-1 rounded-md bg-red-600"
        >
          Temp
        </button>
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
        <img
          class="h-20 w-20 cursor-pointer"
          src="src/images/ConvertImgText.svg"
          alt="Logo"
        />
      </div>
      <div
        class="shadow-sm focus:ring-indigo-500 bg-slate-50 h-11 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full flex justify-center items-center"
      >
        <h3 class="text-center">{{ output }}</h3>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useTempOptionsStore } from "../store/useTempOptions";
const tempOptions = useTempOptionsStore();
let output = ref("");

let temp = ref(false);
let weight = ref(false);
let lengh = ref(false);
let speed = ref(false);
let time = ref(false);

function Active(name) {
  console.log("Got Clicked", name);
  switch (name) {
    case "temp":
      temp.value = true;
      break;
    case "weight":
      weight.value = true;
      break;
    case "lengh":
      lengh.value = true;
      break;
    case "speed":
      speed.value = true;
      break;
    case "time":
      time.value = true;

      break;
    default:
      break;
  }
}

let list = computed(() => {
  //if temp is true
  return (list.value = tempOptions.getScales);
});
</script>
