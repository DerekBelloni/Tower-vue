<template>
  <h2>Who's attending this event</h2>
  <div class="row">
    <div class="col-2 d-flex flex-column" v-for="t in tickets" :key="t.id">
      <img class="img" :src="t.picture" alt="" :title="t.name" />
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  setup() {
    return {
      tickets: computed(() => AppState.tickets)
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  max-width: 75px;
  border: #c9fbff solid 2px;
  border-radius: 50%;
}
</style>