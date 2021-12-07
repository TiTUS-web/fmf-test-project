<template>
  <div class="game" @start="startGameBoard(arg)">
    <h1 class="game-title">МОНОПОЛИЯ</h1>
    <div class="game-section">
      <div class="game-section__map">
        <img src="../assets/game.jpg" alt="game" />
        <lobby-message></lobby-message>
        <player-figures></player-figures>
      </div>
      <div class="game-section__block">
        <players-panel></players-panel>
        <players-trade></players-trade>
      </div>
    </div>
  </div>
</template>

<script>
import PlayersPanel from "../components/PlayersPanel.vue";
import LobbyMessage from "../components/LobbyMessage.vue";
import PlayerFigures from "../components/PlayerFigures.vue";
import PlayersTrade from "../components/PlayersTrade.vue";

export default {
  name: "Game",
  components: {
    PlayersPanel,
    LobbyMessage,
    PlayerFigures,
    PlayersTrade,
  },
  data() {
    return {
      isGameBoard: false,
    };
  },
  methods: {
    startGameBoard(arg) {
      console.log(arg);
    },
  },
};
</script>

<style lang="scss">
.game {
  &-title {
  }

  &-section {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }

  &-section__map {
    position: relative;
    width: 900px;
  }
}
</style>
