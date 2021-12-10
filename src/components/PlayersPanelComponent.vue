<template>
  <div class="players-panel-container">
    <div
      class="players-panel"
      v-for="(player, index) in players"
      :key="player.id"
    >
      <div class="players-panel__block">
        <div
          class="players-panel__circle"
          :style="{ background: player.color }"
        >
          {{ player.id }}
        </div>
        <div class="players-panel__name">Игрок&nbsp;{{ index + 1 }}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="red"
          class="players-panel__delete"
          @click="deletePlayer(player)"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
          />
        </svg>
      </div>
      <div class="players-panel__block">
        {{ player.money }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          viewBox="0 0 24 24"
          fill="green"
          class="players-panel__append"
          @click="appendAmountMoney(player)"
        >
          <g><rect fill="none" height="24" width="24" /></g>
          <g>
            <path
              d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39 c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96 c0,2.27,2.25,2.91,3.35,3.31c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75 c0.63,2.19,2.28,2.78,3.02,2.96V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="red"
          class="players-panel__substract"
          @click="deleteAmountMoney(player)"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PlayersPanelComponent",
  computed: {
    ...mapState({
      players: (state) => state.players,
    }),
  },
  methods: {
    deletePlayer(playerDelete) {
      if (this.players.length === 2) {
        alert("Минимальное количество игроков: 2");
      } else {
        let playerToDelete = this.$store.state.players.findIndex(
          (player) => playerDelete.id === player.id
        );
        this.$store.state.players.splice(playerToDelete, 1);

        this.$store.state.lobbyMessageWarnings.push({
          info: `Игрок ${playerDelete.id} был удалён из игры`,
        });
      }
      this.$store.dispatch("getPlayers", this.players);
    },
    appendAmountMoney(player) {
      let trade = Math.floor(Math.random() * 500000);
      let playerMoneyTrade = (player.money += trade);
      this.$store.state.lobbyMessageWarnings.push({
        info: `Игроку ${player.id} поступила сумма в размере ${trade}$, теперь у него ${playerMoneyTrade}$`,
      });
    },
    deleteAmountMoney(player) {
      let trade = Math.floor(Math.random() * 500000);
      let playerMoneyTrade = (player.money -= trade);
      this.$store.state.lobbyMessageWarnings.push({
        info: `Игроку ${player.id} сделан вычет в размере ${trade}$, теперь у него ${playerMoneyTrade}$`,
      });
    },
  },
};
</script>

<style lang="scss">
.players-panel-container {
  margin-bottom: 50px;
}

.players-panel {
  & {
    padding: 10px;
    margin-bottom: 12px;
    border: 1px solid black;
    border-radius: 5px;
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__block {
    display: flex;
    align-items: center;
  }

  &__circle {
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 50%;
    margin-right: 10px;
  }

  &__delete {
    width: 20px;
    margin-left: 7px;
    cursor: pointer;
  }

  &__append {
    width: 20px;
    margin-left: 7px;
    cursor: pointer;
  }

  &__substract {
    width: 20px;
    margin-left: 7px;
    cursor: pointer;
  }

  &__add {
    & {
      margin-top: 10px;
      display: flex;
      justify-content: end;
    }

    &-icon {
      width: 35px;
      margin-left: 7px;
      cursor: pointer;
    }
  }

  &__name {
  }
}
</style>
