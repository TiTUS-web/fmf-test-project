<template>
  <div class="game">
    <h1 class="game-title">МОНОПОЛИЯ</h1>
    <div class="game-section">
      <div class="game-section__map">
        <img src="../assets/game.jpg" alt="game" />
        <lobby-message-component></lobby-message-component>
        <player-figures-component></player-figures-component>
      </div>
      <div class="game-section__block">
        <players-panel-component></players-panel-component>
        <players-trade-component></players-trade-component>
      </div>
    </div>
  </div>
</template>

<script>
import PlayersPanelComponent from "../components/PlayersPanelComponent.vue";
import LobbyMessageComponent from "../components/LobbyMessageComponent.vue";
import PlayerFiguresComponent from "../components/PlayerFiguresComponent.vue";
import PlayersTradeComponent from "../components/PlayersTradeComponent.vue";

export default {
  name: "Game",
  components: {
    PlayersPanelComponent,
    LobbyMessageComponent,
    PlayerFiguresComponent,
    PlayersTradeComponent,
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
