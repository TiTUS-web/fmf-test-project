import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";
// import * as Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [
  //   createPersistedState({
  //     storage: {
  //       getItem: (key) => Cookies.get(key),
  //       setItem: (key, value) =>
  //         Cookies.set(key, value, { expires: 3, secure: true }),
  //       removeItem: (key) => Cookies.remove(key),
  //     },
  //   }),
  // ],
  state: {
    isGameStart: false,
    idForPlayers: 3,
    lobbyMessageWarnings: [],
    players: [
      {
        id: 1,
        name: "Игрок 1",
        color:
          "#" +
          (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase(),
        money: 15000000,
      },
      {
        id: 2,
        name: "Игрок 2",
        color:
          "#" +
          (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase(),
        money: 15000000,
      },
    ],
  },
  mutations: {
    getPlayersSetup: (state, players) => {
      Vue.set(state, "players", players);
    },
    startGameSetup: (state, isGameStart) => {
      state.isGameStart = isGameStart;
    },
  },
  actions: {
    getPlayers: (context, players) => {
      context.commit("getPlayersSetup", players);
    },
    startGame: (context, isGameStart) => {
      context.commit("startGameSetup", isGameStart);
    },
  },
  modules: {},
});
