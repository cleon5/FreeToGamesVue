<script >
export default {
  props: ["game"],
  data() {
    return {
      dato: [],
    };
  },
  created() {},
  methods: {},
};
</script>

<template>
  <div class="drop-shadow-2xl max-w-sm rounded overflow-hidden shadow-lg shadow-[#201E30] hover:z-10 hover:scale-[1.1] ease-in duration-300">
    <img class="w-full" :src="game.thumbnail" alt="Sunset in the mountains" />
    <div class="px-1 py-1">
      <div class="font-bold text-xl mb-1 text-center text-white">{{ game.title }}</div>
      <p class="text-base text-white">
        {{ game.short_description }}
      </p>
    </div>
    <div class="px-1 pt-1 pb-1 text-center ">
      <span
        class="drop-shadow-2xl  inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1"
        >{{ game.genre }}</span
      >
      <span
        class="drop-shadow-2xl inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1"
        >{{ game.platform }}</span
      >
    </div>
  </div>
</template>