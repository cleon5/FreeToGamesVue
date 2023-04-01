<template>
  <div class="w-[100px] h-screen bg-gray-900">
    <ul class="lateral text-white text-center">
      <li>
         <router-link to="/"><i class="fa-solid fa-house fa-2xl"></i> </router-link >
      </li>
      <li>
       <router-link to="/list"><i class="fa-solid fa-list fa-2xl"></i> </router-link>
      </li>
      <li>
        <router-link to="/secon"><i class="fa-brands fa-youtube fa-2xl"></i></router-link>
      </li>
      <li>
        <router-link :to="{name:'game', params:{id:1} }">
          <i class="fa-solid fa-shuffle fa-2xl"></i>
        </router-link>
       
      </li>
    </ul>
  </div>
</template>

<style >
.lateral {
  display: grid;
  height: 100vh;
  align-content: space-around;
  padding: 15vh 0;
}
</style>