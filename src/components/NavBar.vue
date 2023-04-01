<script>
export default {
  data() {
    return {
      idrRamdom: 0,
    };
  },
  created() {},
  methods: {
    randoma() {
      console.log("as");
      return Math.floor(Math.random() * 600);
    },
  },
  computed: {},
};
</script>

<template>
  <div class="w-[100px] h-screen bg-gray-900 nav">
    <ul class="lateral text-white text-center">
      <li>
        <router-link to="/"
          ><i class="fa-solid fa-house fa-2xl"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/list"
          ><i class="fa-solid fa-list fa-2xl"></i>
        </router-link>
      </li>
      <li>
        <a :href="'/game/' + randoma()">
          <i class="fa-solid fa-shuffle fa-2xl"></i>
        </a>
      </li>
      <li>
        <router-link to="/secon"
          ><i class="fa-brands fa-youtube fa-2xl"></i
        ></router-link>
      </li>
      <li>
        <router-link :to="'/game/'+randoma()"
          ><i class="fa-brands fa-shuffle fa-2xl"></i
        ></router-link>
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
@media screen and (max-width: 520px) {
  .lateral {
    flex-direction: row;
    display: flex;
    height: 100vw;
    justify-content: space-around;
    align-content: center;
    padding: 30px 0;
  }
  .nav {
    width: 100%;
    height: 80px;
  }
}
</style>