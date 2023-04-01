<script  >
    import { createApp } from "vue";
    import GameComp from "../components/GameComp.vue"
    import axios from "axios"
    import {Url, Headers } from "../constants/api"

export default {
    data(){
        return{
            Games:[],
        }
    },
    components:{
        GameComp:GameComp,
    },
    created(){
        this.getAxios();
    },
    methods:{
        getAxios(){
            axios.get(Url, {
                headers: Headers
            }).then(data => {
                 this.Games = (data.data);
            })
            console.log(this.Games)
        } 
    }
}
    



</script>
<template>
    <h1 class="text-center text-6xl underline text-white m-8"> Lista de juegos</h1>
    <div class="m-3 grid grid-cols-4 gap-3 ">
        <GameComp v-for="game in Games" :key="game.id" :game="game"/>
    </div>
</template>