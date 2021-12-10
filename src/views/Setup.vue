<template>
  <div class="setup">
    <div class="setup-game">
      <h1 class="setup-game__title">Выберите количество игроков</h1>
      <div class="setup-game__settings players-setup">
        <div
          class="players-setup__player"
          :v-model="idForPlayers"
          v-for="(player, index) in players"
          :key="index"
        >
          <h2 class="players-setup__name">Игрок {{ index + 1 }}:</h2>
          <div
            class="players-setup__circle"
            :style="{ background: player.color }"
          ></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="red"
            class="players-setup__icon"
            @click="deletePlayer(player)"
            :class="{ disabled: players.length <= 2 }"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
        </div>
      </div>
      <div class="setup-game__start">
        <a to="/lobby" class="setup-start__button" @click="startGame">
          Начать игру
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#1abc9c"
          class="setup-start__icon"
          @click="addNewPlayer"
          :class="{ disabled: players.length === 6 }"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Setup",
  data() {
    return {
      isGameStart: false,
      idForPlayers: this.$store.state.idForPlayers,
    };
  },
  methods: {
    startGame() {
      this.isGameStart = true;
      this.$store.dispatch("startGame", this.isGameStart);
    },
    addNewPlayer() {
      if (this.players.length === 6) {
        alert("Максимальное количество игроков: 6");
      } else {
        const newPlayer = {
          id: this.idForPlayers,
          name: "Игрок " + this.idForPlayers,
          color:
            "#" +
            (Math.random().toString(16) + "000000")
              .substring(2, 8)
              .toUpperCase(),
          money: 15000000,
        };
        this.players.push(newPlayer);
        this.idForPlayers++;
      }
      this.$store.dispatch("getPlayers", this.players);
    },
    deletePlayer(playerDelete) {
      if (this.players.length === 2) {
        alert("Минимальное количество игроков: 2");
      } else {
        let playerToDelete = this.$store.state.players.findIndex(
          (player) => playerDelete.id === player.id
        );
        this.$store.state.players.splice(playerToDelete, 1);
      }
      this.$store.dispatch("getPlayers", this.players);
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
.disabled {
  opacity: 0.5;
  cursor: no-drop !important;
}
.setup {
  height: 100vh;
  width: 100%;
  background: url("../assets/background.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
}
.setup-game {
  & {
    width: 500px;
  }

  &__title {
  }

  &__settings {
  }

  &__start {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.players-setup {
  &__player {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    margin-bottom: 16px;
  }

  &__circle {
    margin-left: 10px;
    margin-right: 24px;
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 50%;
  }

  &__icon {
    cursor: pointer;
  }
}

.setup-start {
  &__button {
    padding: 10px 19px;
    font-size: 17px;
    line-height: 1.471;
    border-radius: 6px;
    color: white;
    background-color: #1abc9c;
    text-decoration: none;
    cursor: pointer;
  }

  &__icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-left: 10px;
  }
}
</style>
