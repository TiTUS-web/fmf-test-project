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
import { mapState } from "vuex";
export default {
  name: "LobbyMessageComponent",
  data() {
    return {
      lobbyMessageWarnings: this.$store.state.lobbyMessageWarnings,
    };
  },
  ...mapState({
    lobbyMessageWarnings: (state) => state.lobbyMessageWarnings,
  }),
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
    overflow-x: hidden;
  }

  &__box-alert {
    width: 240px;
    word-wrap: break-word;
    margin-bottom: 10px;
    line-height: 18px;
  }
}
</style>
