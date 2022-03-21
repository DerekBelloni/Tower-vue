<template>
  <div class="container mt-3 mb-5 card-border rounded">
    <ActiveEventCard />
  </div>
  <EventCommentsCard />
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
export default {
  setup() {
    const route = useRoute()

    return {
      activeEvent: computed(() => AppState.activeEvent),
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
.card-border {
  border: #c9fbff solid 2px;
  background-color: #1b263b;
}
img {
  max-width: 75px;
  border: #c9fbff solid 2px;
  border-radius: 50%;
}
</style>