<script>
import { createApp } from "vue";
import axios from "axios";
import { urlGame, Headers } from "../constants/api";
export default {
  data() {
    return {
      id: this.$route.params.id,
      game: [],
    };
  },
  created() {
    this.getaxios();
    console.log(this.game);
  },
  methods: {
    async getaxios() {
      await axios
        .get(urlGame + this.id, {
          headers: Headers,
        })
        .then((data) => {
          this.game = data.data;
          console.log(data.data);
        });
    },
  },
};
</script>

<template>
  <div class="">
    <div class="relative">
      <div class="bg-gray-950 relative">
        <img
          :src="this.game.screenshots[0].image"
          class="p-1 contrast-[.9] opacity-10 fondo"
        />
      </div>

      <div class="absolute top-[0] left-[0] p-8 text-white flex">
        <div class="w-[30vw] fixed top-[50px]">
          <img :src="this.game.thumbnail" class="lateral2 hover:z-10 hover:scale-[1.1] ease-in duration-300" />

          <a :href="this.game.game_url">
            <button
              class="font-bold py-2 px-4 rounded bg-green-700 text-white w-[22vw] mx-[2vw] mt-3 content-center" >
              Download
            </button>
          </a>
          <a :href="this.game.freetogame_profile_url">
            <button
              class="font-bold py-2 px-4 rounded bg-green-700 text-white w-[22vw] mx-[2vw] mt-3 content-center" >
              Main page
            </button>

            </a>

            <h4 class="text-center text-3xl my-4">Information</h4>
            <div class="grid grid-cols-2  ">
              <p class="content-center rounded bg-blue-500 text-white bg-blue-700 m-1 text-center">Platform: {{ this.game.platform }}</p>
              <p class=" rounded bg-blue-500 text-white bg-blue-700 m-1 text-center">Publisher: {{ this.game.developer }}</p>
              <p class=" rounded bg-blue-500 text-white bg-blue-700 m-1 text-center">Release date: {{ this.game.release_date }}</p>
              <p class=" rounded bg-blue-500 text-white bg-blue-700 m-1 text-center">Status: {{ this.game.status }}</p>
              <p class=" py-1 px-1 rounded bg-blue-500 text-white bg-blue-700 m-1 text-center">Genre: {{ this.game.genre }}</p>
            </div>
  
          
        </div>

        <div class="w-[70%] ml-[35%]">
          <h1 class="text-6xl text-center text-white mb-4">
            {{ this.game.title }}
          </h1>
          <p class=" ">{{ this.game.description }}</p>
          
          <br />
          <div>
            <h4 class="text-center text-3xl mb-4">Especificaciones</h4>
            <div class="grid grid-cols-2 gap-1">
              <p class="font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700  mx-[2vw] mt-1 text-center">OS: {{ this.game.minimum_system_requirements.os }}</p>
              <p class="font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700  mx-[2vw] mt-1 text-center">
                Graphics: {{ this.game.minimum_system_requirements.graphics }}
              </p>
              <p class="font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700  mx-[2vw] mt-1 text-center">Memory: {{ this.game.minimum_system_requirements.memory }}</p>
              <p class="font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700  mx-[2vw] mt-1 text-center">
                Storage: {{ this.game.minimum_system_requirements.storage }}
              </p>
              <p class="font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700  mx-[2vw] mt-1 text-center">
                Processor: {{ this.game.minimum_system_requirements.processor }}
              </p>
            </div>
          </div>

          <div class="p-1">
            <h4 class="text-center text-3xl mb-4">Screenshots</h4>
            <div class="over">
              <img
                class="w-[30vw]"
                v-for="ss in this.game.screenshots"
                :key="ss.id"
                :src="ss.image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 


<style >
.fondo {
  height: 130vh;
}
.over {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}
.lateral2 {
  position: sticky;
  display: table;
  z-index: 1;
}
</style>