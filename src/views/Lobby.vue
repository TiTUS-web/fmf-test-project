<template>
  <div class="lobby">
    <setup v-if="!isGameStart"></setup>
    <game v-if="isGameStart"></game>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Setup from "./Setup.vue";  
import Game from "./Game.vue";
export default {
  name: "Lobby",
  computed: {
    ...mapState({
      isGameStart: (state) => state.isGameStart,
    }),
  },
  components: {
    Setup,
    Game,
  },
};
</script>

<style lang="scss"></style>
