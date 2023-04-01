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
  },
  methods: {
    async getaxios() {
      await axios
        .get(urlGame + this.id, {
          headers: Headers,
        })
        .then((data) => {
          this.game = data.data;
        }).catch((err) =>{
          this.id=Math.floor(Math.random() * 600)
          this.getaxios()
        });
    },
  },
};
</script>

<template>
  <div class="bg-black">
    <div class="relative">
      <div class="bg-gray-950 relative">
        <img
          :src="this.game.screenshots[0].image"
          class="p-1 contrast-[.9] opacity-10 fondo"
        />
      </div>

      <div class="absolute top-[0] left-[0] p-8 text-white flex smal">
        <div class="w-[30vw] fixed top-[50px] divIzq">
          <img :src="this.game.thumbnail" class="drop-shadow-[40px] shadow-lg shadow-[#000000] lateral2 hover:z-10 hover:scale-[1.1] ease-in duration-300" />

          <a :href="this.game.game_url">
            <button
              class="drop-shadow-[50px] shadow-lg shadow-[#000000] font-bold py-2 px-4 rounded bg-green-700 text-white w-[22vw] mx-[2vw] mt-3 content-center" >
              Download
            </button>
          </a>
          <a :href="this.game.freetogame_profile_url">
            <button
              class="drop-shadow-[50px] shadow-lg shadow-[#000000] font-bold py-2 px-4 rounded bg-green-700 text-white w-[22vw] mx-[2vw] mt-3 content-center" >
              Main page
            </button>

            </a>

            <h4 class="text-center text-3xl my-4">Information</h4>
            <div class="grid grid-cols-2  ">
              <p class="drop-shadow-[50px] shadow-lg shadow-[#000000] rounded bg-blue-500 text-white bg-blue-700 m-1 text-center">Platform: {{ this.game.platform }}</p>
              <p class="drop-shadow-[50px] shadow-lg shadow-[#000000]  rounded bg-blue-500 text-white bg-blue-700 m-1 text-center">Publisher: {{ this.game.developer }}</p>
              <p class="drop-shadow-[50px] shadow-lg shadow-[#000000]  rounded bg-blue-500 text-white bg-blue-700 m-1 text-center">Release date: {{ this.game.release_date }}</p>
              <p class="drop-shadow-[50px] shadow-lg shadow-[#000000]  rounded bg-blue-500 text-white bg-blue-700 m-1 text-center">Status: {{ this.game.status }}</p>
              <p class="drop-shadow-[50px] shadow-lg shadow-[#000000]  py-1 px-1 rounded bg-blue-500 text-white bg-blue-700 m-1 text-center">Genre: {{ this.game.genre }}</p>
            </div>
  
          
        </div>

        <div class="w-[70%] ml-[35%] divDer">
          <h1 class="text-6xl text-center text-white mb-4">
            {{ this.game.title }}
          </h1>
          <p class=" ">{{ this.game.description }}</p>
          
          <br />
          <div>
            <h4 class="text-center text-3xl mb-4">Especificaciones</h4>
            <div class="grid grid-cols-2 gap-1">
              <p class="drop-shadow-[50px] shadow-lg shadow-[#000000]  font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700  mx-[2vw] mt-1 text-center">OS: {{ this.game.minimum_system_requirements.os }}</p>
              <p class="drop-shadow-[50px] shadow-lg shadow-[#000000]  font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700  mx-[2vw] mt-1 text-center">
                Graphics: {{ this.game.minimum_system_requirements.graphics }}
              </p>
              <p class="drop-shadow-[50px] shadow-lg shadow-[#000000]  font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700  mx-[2vw] mt-1 text-center">Memory: {{ this.game.minimum_system_requirements.memory }}</p>
              <p class="drop-shadow-[50px] shadow-lg shadow-[#000000]  font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700  mx-[2vw] mt-1 text-center">
                Storage: {{ this.game.minimum_system_requirements.storage }}
              </p>
              <p class="drop-shadow-[50px] shadow-lg shadow-[#000000]  font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700  mx-[2vw] mt-1 text-center">
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
@media screen and (max-width: 520px) {
  .fondo{
    width: 100vw;
    height: 100vh;
  }
  .over {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}
    .lateral2 {
  position:static;
  display: block;
  z-index: 0;
  
  }
 .smal{
    flex-direction: column;
  }
  .divDer{
    width: 100%;
    margin: 1vw;
  }
  .divIzq{
    width: 100%;
    margin: 1vw;
    position: unset;
  }
}
 
</style>