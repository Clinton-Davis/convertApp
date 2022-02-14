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
        <p class="col-span-1 mx-1 rounded-md bg-red-600">temp</p>
        <p class="col-span-1 mx-1 rounded-md bg-amber-600">Weight</p>
        <p class="col-span-1 mx-1 rounded-md bg-green-600">lengh</p>
        <p class="col-span-1 mx-1 rounded-md bg-yellow-600">speed</p>
        <p class="col-span-1 mx-1 rounded-md bg-indigo-600">Time</p>
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
          <option>United States</option>
          <option selected="">Canada</option>
          <option>Mexico</option>
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
          <option>United States</option>
          <option selected="">Canada</option>
          <option>Mexico</option>
        </select>
      </div>
      <h2 class="text-white text-center">=</h2>
      <div
        class="shadow-sm focus:ring-indigo-500 bg-slate-50 h-11 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full flex justify-center items-center"
      >
        <h3 class="text-center">OUTPUT</h3>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
