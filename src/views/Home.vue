<template>
    <div class="container flex h-screen w-full items-center justify-center bg-slate-500">
        <div class="container-ms h-[98vh] max-w-[30rem] rounded-md bg-slate-900 shadow-lg">
            <div class="flex flex-col items-center justify-center">
                <div class="flex justify-start">
                    <img class="h-24 w-24" src="src/images/arrows_svg.svg" alt="Logo" />
                </div>
                <div class="">
                    <h1 class="font-bold text-white">Converter</h1>
                </div>
                <div class="">
                    <p class="font-bold text-white">Pick a Unit of Measure</p>
                </div>
            </div>
            <!-- BUTTONS ICONS  -->
            <div class="form_container mx-auto my-3 grid h-auto w-full grid-cols-5 gap-4">
                <button @click="Active('temp')" class="relative col-span-1 mx-1 cursor-pointer rounded-md py-2 px-4">
                    <span class="flex items-center justify-center space-x-2">
                        <svg class="h-16 w-8" :class="{ tempOuterActive: temp }" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Temp">
                                <g id="TempOuter">
                                    <path
                                        d="M5 3.5V11.025C5 12.595 4.486 13.313 3.59 14.074C2.579 14.933 2 16.181 2 17.5C2 19.981 4.019 22 6.5 22C8.981 22 11 19.981 11 17.5C11 16.181 10.421 14.933 9.411 14.074C8.514 13.312 8 12.594 8 11.025V3.5C8 2.673 7.327 2 6.5 2C5.673 2 5 2.673 5 3.5ZM10 3.5V11.025C10 11.612 10.258 12.17 10.705 12.55C12.108 13.742 13 15.516 13 17.5C13 21.09 10.091 24 6.5 24C2.909 24 0 21.09 0 17.5C0 15.516 0.892 13.742 2.295 12.551C2.742 12.17 3 11.611 3 11.025V3.5C3 1.566 4.567 0 6.5 0C8.433 0 10 1.566 10 3.5Z"
                                        fill="Red"
                                    />
                                    <path
                                        d="M5 3.5V11.025C5 12.595 4.486 13.313 3.59 14.074C2.579 14.933 2 16.181 2 17.5C2 19.981 4.019 22 6.5 22C8.981 22 11 19.981 11 17.5C11 16.181 10.421 14.933 9.411 14.074C8.514 13.312 8 12.594 8 11.025V3.5C8 2.673 7.327 2 6.5 2C5.673 2 5 2.673 5 3.5ZM10 3.5V11.025C10 11.612 10.258 12.17 10.705 12.55C12.108 13.742 13 15.516 13 17.5C13 21.09 10.091 24 6.5 24C2.909 24 0 21.09 0 17.5C0 15.516 0.892 13.742 2.295 12.551C2.742 12.17 3 11.611 3 11.025V3.5C3 1.566 4.567 0 6.5 0C8.433 0 10 1.566 10 3.5Z"
                                        fill="Red"
                                    />
                                </g>
                                <g id="TempInner">
                                    <path
                                        d="M10 17.5C10 19.434 8.433 21 6.5 21C4.567 21 3 19.434 3 17.5C3 16.359 3.599 15.416 4.393 14.719C5.403 13.83 6 12.982 6 11.498V3H7V11.498C7 12.984 7.595 13.828 8.607 14.719C9.401 15.416 10 16.359 10 17.5Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M10 17.5C10 19.434 8.433 21 6.5 21C4.567 21 3 19.434 3 17.5C3 16.359 3.599 15.416 4.393 14.719C5.403 13.83 6 12.982 6 11.498V3H7V11.498C7 12.984 7.595 13.828 8.607 14.719C9.401 15.416 10 16.359 10 17.5Z"
                                        fill="white"
                                    />
                                </g>
                            </g>
                        </svg>
                    </span>
                </button>

                <button @click="Active('weight')" class="col-span-1 mx-1 cursor-pointer rounded-md">
                    <span class="flex items-center justify-center space-x-2">
                        <svg
                            class="h-[59px] w-[53px]"
                            :class="{ weightUnionActive: weight }"
                            viewBox="0 0 63 69"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Weight">
                                <g id="Small">
                                    <path
                                        d="M13.1373 38.0583C13.9096 35.6408 16.1562 34 18.694 34H42.4215C44.8793 34 47.0733 35.5404 47.9081 37.8521L54.5285 56.1854C55.9015 59.9877 53.0845 64 49.0419 64H12.8376C8.8867 64 6.07861 60.1551 7.28083 56.3916L13.1373 38.0583Z"
                                        fill="white"
                                    />
                                </g>
                                <path
                                    id="Union"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M39.9981 30C43.6388 27.2637 45.9981 22.9072 45.9981 18C45.9981 9.71582 39.2833 3 30.9981 3C22.713 3 15.9981 9.71582 15.9981 18C15.9981 22.9072 18.3575 27.2637 21.9981 30H16.6114C13.5645 30 10.8692 31.9688 9.94344 34.8701L2.9161 56.8701C1.47078 61.3857 4.84188 66 9.58407 66H53.0294C57.8809 66 61.2598 61.1855 59.6114 56.6221L51.6661 34.6221C50.6661 31.8486 48.0333 30 45.0841 30H39.9981ZM40.9981 18C40.9981 23.5225 36.5216 28 30.9981 28C25.4747 28 20.9981 23.5225 20.9981 18C20.9981 12.4775 25.4747 8 30.9981 8C36.5216 8 40.9981 12.4775 40.9981 18ZM13.2833 37.0586C14.0567 34.6406 16.3028 33 18.8419 33H30.9981H42.5684C43.8888 33 45.1348 33.4453 46.1348 34.2158C46.9942 34.8789 47.67 35.7832 48.0567 36.8525L54.6778 55.1855C56.0489 58.9873 53.2325 63 49.1895 63H12.9864C9.03329 63 6.22469 59.1553 7.42782 55.3916L13.2833 37.0586Z"
                                    fill="#d97706"
                                    stroke="#d97706"
                                    stroke-width="5"
                                />
                            </g>
                        </svg>
                    </span>
                </button>
                <button @click="Active('lengh')" class="col-span-1 mx-1 cursor-pointer rounded-md">
                    <span class="flex items-center justify-center space-x-2">
                        <svg
                            class="w-18 h-16"
                            :class="{ lengthOuterActive: length }"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="LengthFull">
                                <g id="Inside">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 5C9.238 5 7 7.239 7 10V12H17V10C17 7.239 14.762 5 12 5ZM22 16H20V14H19V16H17V13H16V16H14V14H13V16H11V14H10V16H8V13H7V16H5V14H4V16H2V12H4V10C4 5.582 7.582 2 12 2C16.418 2 20 5.582 20 10V12H22V16Z"
                                        fill="black"
                                    />
                                </g>
                                <g id="Vector">
                                    <path
                                        d="M12 5C9.238 5 7 7.239 7 10V12H17V10C17 7.239 14.762 5 12 5ZM9 10C9 8.346 10.346 7 12 7C13.654 7 15 8.346 15 10H9ZM22 10C22 4.477 17.523 0 12 0C6.477 0 2 4.477 2 10H1C0.447715 10 0 10.4477 0 11V17C0 17.5523 0.447715 18 1 18H23C23.5523 18 24 17.5523 24 17V11C24 10.4477 23.5523 10 23 10H22ZM22 16H20V14H19V16H17V13H16V16H14V14H13V16H11V14H10V16H8V13H7V16H5V14H4V16H2V12H4V10C4 5.582 7.582 2 12 2C16.418 2 20 5.582 20 10V12H22V16Z"
                                        fill="#05FB2D"
                                    />
                                </g>
                            </g>
                        </svg>
                    </span>
                </button>
                <button @click="Active('speed')" class="col-span-1 mx-1 cursor-pointer rounded-md">
                    <span class="flex items-center justify-center space-x-2">
                        <svg class="w-18 h-16" :class="{ speedActive: speed }" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <g id="SpeedOuter">
                                    <path
                                        d="M20.043 9.76C19.902 9.333 19.729 8.916 19.527 8.518L17.073 9.624C17.29 10.017 17.463 10.434 17.59 10.866L20.043 9.76ZM7.471 8.856C7.742 8.502 8.05 8.182 8.389 7.899L6.499 5.931C6.171 6.224 5.862 6.545 5.58 6.888L7.471 8.856V8.856ZM9.185 7.342C9.565 7.121 9.966 6.946 10.383 6.819L9.35 4.25C8.938 4.392 8.537 4.567 8.15 4.774L9.185 7.342V7.342ZM6.426 10.957C6.547 10.522 6.713 10.103 6.924 9.707L4.454 8.641C4.258 9.044 4.09 9.464 3.956 9.891L6.426 10.957ZM15.86 4.757C15.473 4.552 15.07 4.378 14.66 4.238L13.637 6.811C14.055 6.936 14.457 7.11 14.837 7.33L15.86 4.757V4.757ZM18.461 6.888C18.18 6.546 17.871 6.224 17.543 5.931L15.652 7.899C15.992 8.182 16.3 8.503 16.571 8.856L18.461 6.888V6.888ZM12.67 3.828C12.451 3.811 12.233 3.802 12.022 3.802C11.809 3.802 11.59 3.811 11.372 3.828V6.612C11.588 6.587 11.806 6.574 12.022 6.574C12.237 6.574 12.456 6.587 12.67 6.612V3.828ZM12.021 17.61C10.728 17.61 9.678 16.561 9.678 15.267C9.678 14.384 10.167 13.615 10.888 13.216L12.021 7.907L13.154 13.216C13.877 13.615 14.365 14.384 14.365 15.267C14.365 16.561 13.316 17.61 12.021 17.61V17.61ZM12 2C17.514 2 22 6.486 22 12C22 13.758 21.542 15.5 20.697 17H16.27C15.86 18.047 14.625 20 12 20C9.344 20 8.141 18.047 7.73 17H3.303C2.458 15.5 2 13.758 2 12C2 6.486 6.486 2 12 2ZM12 0C5.373 0 0 5.373 0 12C0 14.583 0.816 17.042 2.205 19H6.562C7.492 20.647 9.577 22 12 22C14.423 22 16.508 20.647 17.438 19H21.795C23.184 17.042 24 14.583 24 12C24 5.373 18.627 0 12 0V0Z"
                                        fill="#9333EA"
                                    />
                                </g>
                                <g id="SpeedInside">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 2C6.48438 2 2 6.48633 2 12C2 13.0889 2.17578 14.1719 2.51172 15.1953C2.71484 15.8242 2.98047 16.4297 3.30469 17H7.73047C8.14062 18.0469 9.34375 20 12 20C14.625 20 15.8594 18.0469 16.2695 17H20.6953C21.543 15.5 22 13.7578 22 12C22 6.48633 17.5156 2 12 2ZM20.043 9.75977C19.9023 9.33301 19.7305 8.91602 19.5273 8.51758L17.0742 9.62402L17.2344 9.94043L17.3555 10.2061C17.4453 10.4209 17.5234 10.6416 17.5898 10.8662L20.043 9.75977ZM7.47266 8.85645C7.74219 8.50195 8.05078 8.18164 8.39062 7.89941L6.5 5.93066C6.38672 6.03027 6.27734 6.13379 6.17188 6.24023C5.96484 6.44531 5.76562 6.66211 5.57812 6.8877L7.47266 8.85645ZM9.18359 7.3418C9.56641 7.12109 9.96484 6.94629 10.3828 6.81934L9.35156 4.25C8.9375 4.3916 8.53516 4.56738 8.14844 4.77441L9.18359 7.3418ZM6.42578 10.957C6.54688 10.5225 6.71484 10.1025 6.92578 9.70703L4.45312 8.64062C4.25781 9.04395 4.08984 9.46387 3.95703 9.89062L6.42578 10.957ZM15.8594 4.75684C15.6289 4.63574 15.3945 4.52539 15.1602 4.42676L14.8125 4.29102L14.6602 4.23828L13.6367 6.81055C14.0547 6.93555 14.457 7.11035 14.8359 7.33008L15.8594 4.75684ZM18.4609 6.8877C18.1797 6.5459 17.8711 6.22363 17.543 5.93066L15.6523 7.89941C15.9922 8.18164 16.3008 8.50293 16.5703 8.85645L18.4609 6.8877ZM12.6719 3.82812L12.3359 3.80762L12.0234 3.80176C11.8086 3.80176 11.5898 3.81055 11.3711 3.82812V6.6123C11.5898 6.58691 11.8047 6.57422 12.0234 6.57422C12.2383 6.57422 12.457 6.58691 12.6719 6.6123V3.82812ZM12.0195 17.6104C10.7266 17.6104 9.67969 16.5605 9.67969 15.2666C9.67969 14.3838 10.168 13.6152 10.8867 13.2158L12.0195 7.90723L13.1523 13.2158C13.4062 13.3545 13.6289 13.5381 13.8125 13.7559C13.9922 13.9717 14.1367 14.2207 14.2305 14.4922C14.3164 14.7344 14.3633 14.9951 14.3633 15.2666C14.3633 16.5605 13.3164 17.6104 12.0195 17.6104Z"
                                        fill="black"
                                    />
                                </g>
                            </g>
                        </svg>
                    </span>
                </button>
                <button @click="Active('time')" class="col-span-1 mx-1 cursor-pointer rounded-md">
                    <span class="flex items-center justify-center space-x-2">
                        <svg class="w-18 h-16" :class="{ timeActive: time }" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="TimeOutside">
                                <path
                                    d="M4 14H10V8C13.309 8 16 10.691 16 14C16 17.309 13.309 20 10 20C6.691 20 4 17.309 4 14ZM20 14C20 19.523 15.522 24 10 24C4.478 24 0 19.523 0 14C0 8.477 4.478 4 10 4C15.522 4 20 8.477 20 14ZM18 14C18 9.589 14.411 6 10 6C5.589 6 2 9.589 2 14C2 18.411 5.589 22 10 22C14.411 22 18 18.411 18 14ZM12 2.181V0H8V2.181C9.408 1.943 10.562 1.938 12 2.181ZM18.679 5.735L20 4.414L18.586 3L17.179 4.407C17.715 4.809 18.217 5.251 18.679 5.735V5.735Z"
                                    fill="#1121EF"
                                />
                            </g>
                            <g id="TimeInside">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 14H4C4 17.3086 6.69141 20 10 20C13.3086 20 16 17.3086 16 14C16 10.6914 13.3086 8 10 8V14ZM15.9336 8.63672C17.2188 10.0566 18 11.9385 18 14C18 18.4111 14.4102 22 10 22C5.58984 22 2 18.4111 2 14C2 9.58887 5.58984 6 10 6C12.3477 6 14.4648 7.01855 15.9336 8.63672Z"
                                    fill="black"
                                />
                            </g>
                        </svg>
                    </span>
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
                        class="mx-auto block w-[80%] rounded-full border-gray-300 px-4 font-bold shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Amount"
                        v-model="amountInput"
                    />
                </div>
            </div>
            <!-- Convert From  -->
            <div>
                <select
                    id="location"
                    name="location"
                    class="mx-auto block w-[80%] rounded-full border-gray-300 px-4 font-bold shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    v-model="fromInput"
                >
                    <option class="font-bold" selected disabled value="">Convert From</option>
                    <option class="font-bold" v-for="l in list" :value="l">{{ l }}</option>
                </select>
            </div>
            <span class="my-2 flex items-center justify-center">
                <svg class="w-18 h-10" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="TO">
                        <g id="RedArrow">
                            <path
                                d="M19.6822 1.7056C20.0737 1.31593 20.707 1.31746 21.0966 1.70901L22.6659 3.28622C23.0554 3.67768 23.0538 4.31077 22.6624 4.70033L12.8915 14.4249C12.5014 14.8132 11.8708 14.8132 11.4807 14.425L1.70896 4.70045C1.31747 4.31085 1.31596 3.67764 1.70559 3.28618L3.27563 1.70878C3.66524 1.31733 4.29842 1.31586 4.68985 1.70548L11.4806 8.4648C11.8708 8.85314 12.5014 8.85314 12.8916 8.4648L19.6822 1.7056Z"
                                fill="#FB0404"
                            />
                            <path
                                d="M19.6822 1.7056C20.0737 1.31593 20.707 1.31746 21.0966 1.70901L22.6659 3.28622C23.0554 3.67768 23.0538 4.31077 22.6624 4.70033L12.8915 14.4249C12.5014 14.8132 11.8708 14.8132 11.4807 14.425L1.70896 4.70045C1.31747 4.31085 1.31596 3.67764 1.70559 3.28618L3.27563 1.70878C3.66524 1.31733 4.29842 1.31586 4.68985 1.70548L11.4806 8.4648C11.8708 8.85314 12.5014 8.85314 12.8916 8.4648L19.6822 1.7056Z"
                                fill="#FB0404"
                            />
                            <path
                                d="M11.4806 8.4648L4.68985 1.70548C4.29842 1.31586 3.66524 1.31733 3.27563 1.70878L1.70559 3.28618C1.31596 3.67764 1.31747 4.31085 1.70896 4.70045L11.4807 14.425C11.8708 14.8132 12.5014 14.8132 12.8915 14.4249L22.6624 4.70033C23.0538 4.31077 23.0554 3.67768 22.6659 3.28622L21.0966 1.70901C20.707 1.31746 20.0737 1.31593 19.6822 1.7056L12.8916 8.4648C12.5014 8.85314 11.8708 8.85314 11.4806 8.4648Z"
                                stroke="black"
                            />
                        </g>
                        <g id="BlueArrow">
                            <path
                                d="M19.6822 10.7056C20.0737 10.3159 20.707 10.3175 21.0966 10.709L22.6659 12.2862C23.0554 12.6777 23.0538 13.3108 22.6624 13.7003L12.8915 23.4249C12.5014 23.8132 11.8708 23.8132 11.4807 23.425L1.70896 13.7004C1.31747 13.3108 1.31596 12.6776 1.70559 12.2862L3.27563 10.7088C3.66524 10.3173 4.29842 10.3159 4.68985 10.7055L11.4806 17.4648C11.8708 17.8531 12.5014 17.8531 12.8916 17.4648L19.6822 10.7056Z"
                                fill="#1121EF"
                            />
                            <path
                                d="M19.6822 10.7056C20.0737 10.3159 20.707 10.3175 21.0966 10.709L22.6659 12.2862C23.0554 12.6777 23.0538 13.3108 22.6624 13.7003L12.8915 23.4249C12.5014 23.8132 11.8708 23.8132 11.4807 23.425L1.70896 13.7004C1.31747 13.3108 1.31596 12.6776 1.70559 12.2862L3.27563 10.7088C3.66524 10.3173 4.29842 10.3159 4.68985 10.7055L11.4806 17.4648C11.8708 17.8531 12.5014 17.8531 12.8916 17.4648L19.6822 10.7056Z"
                                fill="#1121EF"
                            />
                            <path
                                d="M11.4806 17.4648L4.68985 10.7055C4.29842 10.3159 3.66524 10.3173 3.27563 10.7088L1.70559 12.2862C1.31596 12.6776 1.31747 13.3108 1.70896 13.7004L11.4807 23.425C11.8708 23.8132 12.5014 23.8132 12.8915 23.4249L22.6624 13.7003C23.0538 13.3108 23.0554 12.6777 22.6659 12.2862L21.0966 10.709C20.707 10.3175 20.0737 10.3159 19.6822 10.7056L12.8916 17.4648C12.5014 17.8531 11.8708 17.8531 11.4806 17.4648Z"
                                stroke="black"
                            />
                        </g>
                    </g>
                </svg>
            </span>
            <!-- Convert To  -->
            <div>
                <select
                    id="location"
                    name="location"
                    class="mx-auto block w-[80%] rounded-full border-gray-300 px-4 font-bold shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    v-model="toInput"
                >
                    <option class="font-bold" selected disabled value="">To</option>
                    <option class="font-bold" v-for="l in list" :value="l">{{ l }}</option>
                </select>
            </div>
            <div class="relative col-span-1 my-1 flex justify-center">
                <!-- Just an Idea  -->
                <!-- Convert -->
                <button
                    @click="convert"
                    class="sha drop-shadow-slate-700 relative m-3 cursor-pointer rounded-md bg-gradient-to-r from-red-500 via-slate-800 to-blue-500 px-8 drop-shadow-md"
                >
                    <h2 class="top text absolute top-6 right-0 text-3xl font-bold tracking-widest text-white">Convert</h2>
                    <span class="flex items-center justify-center space-x-2">
                        <img class="h-20 w-20" src="src/images/arrows_svg.svg" alt="Logo" />
                    </span>
                </button>
            </div>
            <!-- OutPut  -->
            <div
                class="mx-auto flex h-10 w-[80%] items-center justify-center rounded-full border-gray-300 bg-slate-50 px-4 text-2xl shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
                <h3 class="text-ls text-center font-bold">
                    {{ outPut }}
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
    import { tempLogic, weightLogic, lenghtLogic, speedLogic, timeLogic } from "@/scripts/logics";

    const tempOptions = useTempOptionsStore();
    const weightOptions = useWeightOptionsStore();
    const lengthOptions = useLengthOptionsStore();
    const speedOptions = useSpeedOptionsStore();
    const timeOptions = useTimeOptionsStore();

    let temp = ref(false);
    let weight = ref(false);
    let length = ref(false);
    let speed = ref(false);
    let time = ref(false);
    let list = ref("");
    let amountInput = ref(null);
    let fromInput = ref("");
    let toInput = ref("");
    let outPut = ref("");

    function convert() {
        let amount = amountInput.value;
        let from = fromInput.value;
        let to = toInput.value;
        if (temp.value) {
            outPut.value = tempLogic(amount, from, to);
        } else if (weight.value) {
            outPut.value = weightLogic(amount, from, to);
        } else if (length.value) {
            outPut.value = lenghtLogic(amount, from, to);
        } else if (speed.value) {
            outPut.value = speedLogic(amount, from, to);
        } else {
            outPut.value = timeLogic(amount, from, to);
        }
    }

    function Active(name) {
        outPut.value = null;
        amountInput.value = null;
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
    .tempOuterActive path {
        fill: white;
        stroke: black;
        stroke-width: 0.0125rem;
    }
    .tempOuterActive #TempInner path {
        fill: red;
        stroke: black;
        stroke-width: 0.0125rem;
    }

    .weightUnionActive path {
        fill: white;
        stroke: white;
    }
    .weightUnionActive #Small path {
        fill: #d97706;
        stroke: black;
    }
    .lengthOuterActive #Vector path {
        fill: white;
    }
    .lengthOuterActive #Inside path {
        fill: #05fb2d;
    }
    .speedActive #SpeedOuter path {
        fill: white;
    }
    .speedActive #SpeedInside path {
        fill: #9333ea;
    }
    .timeActive #TimeOutside path {
        fill: white;
    }
    .timeActive #TimeInside path {
        fill: #1121ef;
    }
</style>
