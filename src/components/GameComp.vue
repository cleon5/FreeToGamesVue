<script >
export default {
  props: ["game"],
  data() {
    return {
      url: "./game/"+this.game.id ,
    };
  },
  created() {
    console.log(this.url)
  },
  methods: {},
};
</script>

<template>
  <div
    class="drop-shadow-2xl max-w-sm rounded overflow-hidden shadow-lg shadow-[#9D9A99] hover:z-10 hover:scale-[1.1] ease-in duration-300"
  >
    <a :href="url">
      <img class="w-full" :src="game.thumbnail" alt="Sunset in the mountains" />
      <div class="px-1 py-1">
        <div class="font-bold text-[1.5vw] mb-1 text-center text-white">
          {{ game.title }}
        </div>
        <p class="text-[1.1vw] text-white">
          {{ game.short_description }}
        </p>
      </div>
      <div class="px-1 pt-1 pb-1 text-center">
        <span
          class="drop-shadow-2xl inline-block bg-gray-200 rounded-full px-3 py-1 text-[1vw]  font-semibold text-gray-700 mr-2 mb-1"
          >{{ game.genre }}</span
        >
        <span
          class="drop-shadow-2xl inline-block bg-gray-200 rounded-full px-3 py-1 text-[1vw]  font-semibold text-gray-700 mr-2 mb-1"
          >{{ game.platform }}</span
        >
      </div>
    </a>
  </div>
</template>