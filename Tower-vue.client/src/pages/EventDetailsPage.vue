<template>
  <div class="container mt-3 mb-5 card-border rounded">
    <ActiveEventCard />
  </div>
  <div class="container mt-3 mb-5 card-border rounded">
    <TicketHolders />
  </div>
  <div class="container mt-3 mb-5 card-border rounded">
    <EventCommentsCard :activeEvent="activeEvent" />
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
import { onMounted } from "@vue/runtime-core"
import { eventsService } from "../services/EventsService"
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      if (route.params.eventId) {
        await eventsService.setActiveEvent(route.params.eventId)
      }
    })
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