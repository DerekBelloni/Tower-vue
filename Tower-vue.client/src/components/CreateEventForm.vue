<template>
  <form class="d-flex flex-column">
    <label for="">Event Name</label>
    <input
      v-model="editable.name"
      type="text"
      placeholder="event name..."
      required
    />
    <label for="">Event Description</label>
    <input
      v-model="editable.description"
      type="text"
      placeholder="event description..."
      required
    />
    <label for="">Event Location</label>
    <input
      v-model="editable.location"
      type="text"
      placeholder="event location..."
      required
    />
    <label for="">Event Cover Image</label>
    <input
      v-model="editable.coverImg"
      type="text"
      placeholder="event cover image..."
      required
    />
    <label for="">Event Capacity</label>
    <input
      v-model="editable.capacity"
      type="number"
      placeholder="event capacity..."
      required
    />
    <label for="">Event Start Date</label>
    <input
      v-model="editable.startDate"
      type="date"
      placeholder="event start date..."
      required
    />
    <label for="">Event Type</label>
    <input v-model="editable.type" type="text" placeholder="event type..." />

    <button
      class="btn btn-primary m-5"
      title="submit form"
      @click="createEvent()"
    >
      Submit
    </button>
  </form>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { eventsService } from "../services/EventsService"
import { Modal } from "bootstrap"
import { AppState } from "../AppState"
import { useRoute, useRouter } from "vue-router"
import { router } from "../router"
export default {
  setup() {
    const router = useRouter()
    let editable = ref({})
    return {
      towerEvent: computed(() => AppState.towerEvents),
      editable,
      async createEvent() {
        try {
          let newEvent = await eventsService.createEvent(editable.value)
          router.push({
            name: 'EventDetails',
            params: { eventId: AppState.activeEvent.id }
          })
          Modal.getOrCreateInstance(
            document.getElementById("create-event-modal")
          ).hide()
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>