<template>
  <div class="lobby-message">
    <div class="lobby-message__box">
      <div
        class="lobby-message__box-alert"
        v-for="messageWarning in lobbyMessageWarnings"
        :key="messageWarning.info"
      >
        {{ messageWarning.info }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LobbyMessage",
  data() {
    return {
      lobbyMessageWarnings: [
        { info: "Ход игрока 1!" },
        { info: "Ход игрока 2!" },
        { info: "Ход игрока 3!" },
      ],
    };
  },
};
</script>

<style lang="scss">
.lobby-message {
  & {
    position: absolute;
    top: 130px;
    right: 131px;
  }

  &__box {
    padding: 10px;
    width: 247px;
    height: 375px;
    margin: 0px;
    border: 1px solid gray;
    font-size: 15px;
    background-color: #ffffff;
    overflow-y: scroll;
    text-align: left;
  }

  &__box-alert {
    width: 240px;
    word-wrap: break-word;
  }
}
</style>
