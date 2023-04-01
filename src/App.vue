<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue'
import NavBar from './components/NavBar.vue'
import axios from "axios"
import {Url, Headers } from "./constants/api"


axios.get(Url, {
  headers: Headers
}).then(data => console.log(data.data))
</script>


<template>
  <div class="h-screen flex flexd">
    <NavBar />
    <div class="bg-gray-700 w-full scrollp bg-zinc-800">
      <router-view/> 
    </div>
   </div>
  
</template>

<style scoped>
  .scrollp{
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
  @media screen and (max-width: 520px) {
    .flexd{
      flex-direction: column;
    }
  }
</style>
