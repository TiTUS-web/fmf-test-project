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
export default {
  name: "PlayerFigure",
  data() {
    return {
      players: [
        {
          id: 1,
          name: "Игрок 1",
          color:
            "#" +
            (Math.random().toString(16) + "000000")
              .substring(2, 8)
              .toUpperCase(),
          money: 15000000,
        },
        {
          id: 2,
          name: "Игрок 2",
          color:
            "#" +
            (Math.random().toString(16) + "000000")
              .substring(2, 8)
              .toUpperCase(),
          money: 15000000,
        },
        {
          id: 3,
          name: "Игрок 3",
          color:
            "#" +
            (Math.random().toString(16) + "000000")
              .substring(2, 8)
              .toUpperCase(),
          money: 15000000,
        },
        {
          id: 4,
          name: "Игрок 4",
          color:
            "#" +
            (Math.random().toString(16) + "000000")
              .substring(2, 8)
              .toUpperCase(),
          money: 15000000,
        },
        {
          id: 5,
          name: "Игрок 5",
          color:
            "#" +
            (Math.random().toString(16) + "000000")
              .substring(2, 8)
              .toUpperCase(),
          money: 15000000,
        },
        {
          id: 6,
          name: "Игрок 6",
          color:
            "#" +
            (Math.random().toString(16) + "000000")
              .substring(2, 8)
              .toUpperCase(),
          money: 15000000,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.player-figures {
  & {
    width: 55px;
    word-wrap: break-word;
    align-items: center;
    position: absolute;
    bottom: 32px;
    right: 26px;
  }

  .player-figure__item {
    display: inline-block;
    width: 18px;
    height: 18px;
    background: black;
    border-radius: 50%;

    &:not(:last-child) {
      margin-right: 7px;
      margin-bottom: 1px;
    }
  }
}
</style>
