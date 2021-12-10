<template>
  <div class="player-figures">
    <div
      class="player-figure__item"
      v-for="player in players"
      :key="player.id"
      :style="{ background: player.color }"
    >
      {{ player.id }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PlayerFiguresComponent",
  computed: {
    ...mapState({
      players: (state) => state.players,
    }),
  },
};
</script>

<style lang="scss">
.player-figures {
  & {
    width: 71px;
    word-wrap: break-word;
    align-items: center;
    position: absolute;
    bottom: 32px;
    right: 26px;
  }

  .player-figure__item {
    font-size: 14px;
    display: inline-block;
    width: 25px;
    height: 25px;
    background: black;
    border-radius: 50%;

    &:not(:last-child) {
      margin-right: 7px;
      margin-bottom: 1px;
    }
  }
}
</style>
