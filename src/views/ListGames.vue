<script  >
    import { createApp } from "vue";
    import GameComp from "../components/GameComp.vue"
    import axios from "axios"
    import {Url, Headers } from "../constants/api"

export default {
    data(){
        return{
            Games:[],
            FilterGames : []
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
                 this.FilterGames = (data.data)
            })
        } ,
        onChange(ev){
            console.log(ev.target.value)
            this.FilterGames= this.Games.filter(game => 
                game.platform.toLowerCase().includes(ev.target.value.toLowerCase())
        )
        },
        onChangeGen(ev){
            console.log(ev.target.value)
            this.FilterGames= this.Games.filter(game => 
                game.genre.toLowerCase().includes(ev.target.value.toLowerCase())
        )
        }
    }
}
    



</script>
<template>

    <h1 class="text-center text-6xl underline text-white m-8"> Lista de juegos</h1>
<div class="filter flex justify-around" >
        <div class="select w-[35%] text-center">
            <label for="Plataforma" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plataforma</label>
            <select @change="onChange($event)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">All</option>
                <option value="pc">Pc</option>
                <option value="browser">Browser</option>
                
            </select>
        </div>
        <div class="select w-[35%] text-center">
            <label for="Genero" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genero</label>
            <select @change="onChangeGen($event)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" selected>Categoria</option>
                <option value="ARPG">ARPG</option>
                <option value="strategy">Strategy</option>
                <option value="shooter">Shooter</option>
                <option value="Fighting">Fighting</option>
                <option value="racing">Racing</option>
                <option value="social">Social</option>
                <option value="sports">Sports</option>
                <option value="moba">Moba</option>
                <option value="Action">Action</option>
                <option value="mmorpg">Mmorpg</option>
                <option value="fantasy">Fantasy</option>
                <option value="Battle Royale">Battle Royale</option>
            </select>
        </div>
        
    
    </div>
    <div class="m-3 grid gap-3 grid-cols-2 sm:grid-cols-4">
        <GameComp v-for="game in FilterGames" :key="game.id" :game="game"/>
    </div>
</template>