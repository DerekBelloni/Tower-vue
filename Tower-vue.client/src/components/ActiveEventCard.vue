<template>
  <div class="row">
    <div
      class="
        col-6
        text-center
        justify-content-start
        event-title
        mt-2
        title-color
      "
    >
      <h2>{{ activeEvent.name }}</h2>
    </div>
    <div class="col-6 d-flex justify-content-end">
      <button
        title="attend event"
        class="btn btn-primary mt-2 text-dark"
        v-if="activeEvent.capacity > 0 && activeEvent.isCanceled == false"
      >
        <b>Attend Event</b>
      </button>
    </div>
    <div class="row p-3">
      <div class="col-4 d-flex align-items-center pb-3 event-title">
        <img class="img-fluid rounded" :src="activeEvent.coverImg" alt="" />
      </div>
      <div class="col-8 d-flex align-items-start text-start">
        <div class="row">
          <div class="col-12 p-1 text-light">
            <h4>
              {{ activeEvent.description }}
            </h4>
          </div>
          <div class="col-12 p-1 text-light">
            <h5>Location: {{ activeEvent.location }}</h5>
          </div>
          <div class="col-12 p-1 text-light">
            <h6>Tickets left: {{ activeEvent.capacity }}</h6>
          </div>
          <div class="col-12 p-1 text-light justify-content-between">
            <div>
              <h6 v-if="account.id == activeEvent.creatorId">
                Edit Event
                <i
                  class="mdi mdi-pencil selectable"
                  v-if="
                    activeEvent.capacity > 0 &&
                    activeEvent.isCanceled == false &&
                    account.id == activeEvent.creatorId
                  "
                ></i>
              </h6>
            </div>
            <div v-if="account.id == activeEvent.creatorId">
              <h6>
                Cancel Event
                <i class="mdi mdi-cancel selectable" @click="cancelEvent()"></i>
              </h6>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-12 d-flex justify-content-end align-items-baseline"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { eventsService } from "../services/EventsService"
export default {

  setup() {
    return {
      activeEvent: computed(() => AppState.activeEvent),
      account: computed(() => AppState.account),
      async cancelEvent() {
        await eventsService.cancelEvent(AppState.activeEvent.id)
      }

    }
  }
}
</script>


<style lang="scss" scoped>
.event-title {
  background-color: #1b263b;
}

.title-color {
  color: #64dfdf;
}
</style>