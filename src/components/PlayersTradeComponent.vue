<template>
  <div class="players-trade">
    <div class="players-trade__title">Транзакции</div>
    <div class="players-trade__block">
      <select
        class="players-trade__block-name players-name"
        v-model="firstPlayer"
      >
        <option
          class="players-name__option"
          v-for="player in players"
          :key="player.id"
          selected
          :style="{ color: player.color }"
        >
          {{ player.name }}
        </option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        class="players-name__arrow-trade"
      >
        <g><rect fill="none" height="24" width="24" /></g>
        <g>
          <g>
            <polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12" />
            <polygon
              points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12"
            />
          </g>
        </g>
      </svg>
      <select
        class="players-trade__block-name players-name"
        v-model="lastPlayer"
      >
        <option
          class="players-name__option"
          v-for="player in players"
          :key="player.id"
          selected
          :style="{ color: player.color }"
        >
          {{ player.name }}
        </option>
      </select>
    </div>
    <div class="players-trade__block">
      $&nbsp;<input
        type="number"
        min="0"
        class="players-trade__block-input"
        placeholder="Введите сумму перевода"
        v-model="inputTrade"
      />
    </div>
    <div class="players-trade__block">
      <button
        class="players-trade__block-button"
        @click="playersTradeOperation(firstPlayer, lastPlayer)"
      >
        Перевести
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PlayersTradeComponent",
  data() {
    return {
      firstPlayer: "",
      lastPlayer: "",
      inputTrade: null,
    };
  },
  methods: {
    playersTradeOperation(firstPlayer, lastPlayer) {
      if (firstPlayer && lastPlayer) {
        let firstPlayerTrade = this.players.find(
          (player) => firstPlayer === player.name
        );
        let lastPlayerTrade = this.players.find(
          (player) => lastPlayer === player.name
        );

        if (firstPlayerTrade.money <= -5000000) {
          let playerToDelete = this.$store.state.players.findIndex(
            (player) => firstPlayerTrade.id === player.id
          );
          this.$store.state.players.splice(playerToDelete, 1);
          this.$store.state.lobbyMessageWarnings.push({
            info: `Игрок ${firstPlayerTrade.id} покинул игру из-за недостатка средств`,
          });
          alert("Игрок не может совершить перевод средств.");
          this.inputTrade = null;
        } else if (firstPlayerTrade.money <= 0) {
          firstPlayerTrade.money -= Number(this.inputTrade);
          lastPlayerTrade.money += Number(this.inputTrade);
          this.inputTrade = null;
        } else if (firstPlayerTrade === lastPlayerTrade) {
          alert(
            "Система: Транзакция не имеет смысла. Укажите другого пользователя."
          );
        } else if (firstPlayerTrade.money < this.inputTrade) {
          alert("Сумма транзакции не может быть больше суммы игрока.");
          this.inputTrade = null;
        } else {
          firstPlayerTrade.money -= Number(this.inputTrade);
          lastPlayerTrade.money += Number(this.inputTrade);
          this.$store.state.lobbyMessageWarnings.push({
            info: `Игрок ${firstPlayerTrade.id} перевел ${Number(
              this.inputTrade
            )}$ Игрок ${lastPlayerTrade.id}`,
          });
          this.inputTrade = null;
        }
      }
    },
  },
  computed: {
    ...mapState({
      players: (state) => state.players,
    }),
  },
};
</script>

<style lang="scss">
.players-trade {
  & {
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 6px;
    padding: 20px;
  }

  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &:last-child {
      justify-content: end;
    }
  }

  &__title {
    display: block;
    margin-bottom: 20px;
    font-size: 17px;
    color: green;
  }

  &__block-name {
  }

  &__block-input {
    border-radius: 6px;
    height: 23px;
    width: 100%;
  }

  &__block-button {
    padding: 4px 10px;
    font-size: 15px;
    line-height: 1.471;
    border-radius: 6px;
    color: white;
    background-color: #1abc9c;
    text-decoration: none;
    cursor: pointer;
  }
}
.players-name {
  & {
    width: 84px;
    border-radius: 7px;
    padding: 3px 0;
  }

  &__option {
  }

  &__arrow-trade {
    fill: green;
    width: 24px;
  }
}
</style>
