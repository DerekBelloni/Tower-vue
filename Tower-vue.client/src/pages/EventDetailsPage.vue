<template>
  <div class="container mt-3 card-border rounded">
    <ActiveEventCard :activeEvent="e" />
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  setup() {
    return {
      activeEvent: computed(() => AppState.activeEvent)
    }
  }
}
</script>


<style lang="scss" scoped>
.card-border {
  border: #c9fbff solid 2px;
  background-color: #1b263b;
}
</style>