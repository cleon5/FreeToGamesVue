<script >
import NavBar from "../components/NavBar.vue";
import axios from "axios";
import { urlGame, Headers } from "../constants/api";

export default {
  data() {
    return {
      game: [],
      games:[],
      carrusel:[],
      ids:[540,353,91,448,29,28,316,1,99],
    };
  },
  components: {},
  created() {
    this.getAxiosCarrusel()
    this.getAxios()
   
    setTimeout(() => {
       this.game = this.games[0]
    },500)
   
    
  },
  computed:{
      filtergames(){
         return this.games.slice(0,5)
      }
  },
  methods: {
   getAxios() {
      this.ids.map((id) => {
          axios.get(urlGame + id, {
          headers: Headers,
        })
        .then((data) => {
          this.games.push(data.data)
          console.log(data.data)
        });
      })
      
    },
    getAxiosCarrusel() {
          axios.get(urlGame + 540, {
          headers: Headers,
        })
        .then((data) => {
          this.carrusel =(data.data)
        });
      
    },
   
  },
};
</script>
<template>
  <div>
    <div class="carousel relative shadow-2xl bg-black w-[84%] mx-[5%] mt-2">
      <div class="carousel-inner relative overflow-hidden w-[100%]">
        <!--Slide 1-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div class="carousel-item absolute opacity-0" style="height: 70vh">
          <div
            class="block h-full w-full bg-indigo-500 text-white text-5xl text-center"
          >
            <img class=" bg-contain" :src="carrusel.screenshots[0].image">
          </div>
        </div>
        <label
          for="carousel-3"
          class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >‹</label
        >
        <label
          for="carousel-2"
          class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >›</label
        >

        <!--Slide 2-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="carousel-item absolute opacity-0" style="height: 70vh">
          <div
            class="block h-full w-full bg-orange-500 text-white text-5xl text-center"
          >
            <img class="bg-cover" :src="carrusel.screenshots[1].image">
          </div>
        </div>
        <label
          for="carousel-1"
          class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >‹</label
        >
        <label
          for="carousel-3"
          class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >›</label
        >

        <!--Slide 3-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="carousel-item absolute opacity-0" style="height: 70vh">
          <div
            class="block h-full w-full bg-green-500 text-white text-5xl text-center"
          >
           <img :src='carrusel.screenshots[2].image'/>
          </div>
        </div>
        <label
          for="carousel-2"
          class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >‹</label
        >
        <label
          for="carousel-1"
          class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >›</label
        >

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label
              for="carousel-1"
              class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-2"
              class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-3"
              class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >•</label
            >
          </li>
        </ol>
      </div>
    </div>

   <div class="flex w-[100%]">
      <div class="flex-col mx-[1%] mt-[10px] w-[60%]">

         <a v-for="Game in games" :key="Game.id" :href="'./game/'+Game.id" class="m-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
         <img class="object-cover w-[50%] rounded-t-lg  md:h-auto  md:rounded-none md:rounded-l-lg"  :src="Game.thumbnail"  alt="">
         <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{Game.title}}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{(Game.short_description)}}</p>
         </div>
         </a>

        
      </div>

      <div class="flex-col mx-[1%] mt-[10px] w-[30%]">

         <a v-for="Game in filtergames" :key="Game.id" :href="'./game/'+Game.id" class=" m-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
         <img class="object-cover w-full rounded-t-lg  md:h-auto  md:rounded-none md:rounded-l-lg"  :src="Game.thumbnail"  alt="">
         <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{Game.title}}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
         </div>
         </a>


      </div>
         </div>



  </div>
</template>

<style scoped>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0; /*Set to match the Tailwind colour you want the active one to be */
}
</style>