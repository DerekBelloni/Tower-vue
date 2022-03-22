<template>
  <div class="component">
    <form class="d-flex flex-column">
      <label for="">Event Name</label>
      <input
        type="text"
        placeholder="event name..."
        required
        v-model="editable.name"
      />
      <label for="">Event Description</label>
      <input
        type="text"
        placeholder="event description..."
        required
        v-model="editable.description"
      />

      <button class="btn btn-primary m-5" @click="editEvent(activeEvent.id)">
        Submit
      </button>
    </form>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { eventsService } from "../services/EventsService"
import { Modal } from "bootstrap"
export default {
  props: {
    activeEvent: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const editable = ref({})
    return {
      editable,
      activeEvent: computed(() => AppState.activeEvent),
      async editEvent(activeEventId) {
        try {
          await eventsService.editEvent(activeEventId, editable.value)
          Modal.getOrCreateInstance(
            document.getElementById("edit-event-modal")
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