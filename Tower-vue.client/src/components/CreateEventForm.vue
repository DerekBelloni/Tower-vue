<template>
  <form class="d-flex flex-column">
    <label for="">Event Name</label>
    <input v-model="editable.name" type="text" placeholder="event name..." />
    <label for="">Event Description</label>
    <input
      v-model="editable.description"
      type="text"
      placeholder="event description..."
    />
    <label for="">Event Location</label>
    <input
      v-model="editable.location"
      type="text"
      placeholder="event location..."
    />
    <label for="">Event Capacity</label>
    <input
      v-model="editable.capacity"
      type="number"
      placeholder="event capacity..."
    />
    <button class="btn btn-primary m-5" @click="createEvent()">Submit</button>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { eventsService } from "../services/EventsService"
export default {
  setup() {
    let editable = ref({})
    return {
      editable,
      async createEvent() {
        try {
          const newEvent = await eventsService.createEvent(editable.value)
          router.push({
            name: 'EventDetails',
            params: { eventId: newEvent.id }
          })
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