<template>
  <router-link
    :to="{ name: 'EventDetails', params: { towerEventId: towerEvent.id } }"
  >
    <div class="row mt-2 selectable" @click="setActiveEvent()">
      <img :src="towerEvent.coverImg" alt="" />
    </div>
  </router-link>
  <div class="row">
    <div class="col-md-12 text-start p-2 card-text-color">
      <h1 class="title-color">{{ towerEvent.name }}</h1>
      <h3 class="text-start">{{ towerEvent.location }}</h3>
      <h3 class="text-start">
        {{ Date(towerEvent.startDate).toLocaleString() }}
      </h3>
      <h3 class="text-start">Tickets Remaining: {{ towerEvent.capacity }}</h3>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { eventsService } from "../services/EventsService"
export default {
  props: {
    towerEvent: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      towerEvents: computed(() => AppState.towerEvents),
      setActiveEvent() {
        eventsService.setActiveEvent(props.towerEvent)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.card-text-color {
  color: #c9fbff;
}

.title-color {
  color: #64dfdf;
  text-decoration: underline;
}
</style>