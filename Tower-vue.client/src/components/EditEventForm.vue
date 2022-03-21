<template>
  <div class="component">
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
      <label for="">Event Cover Image</label>
      <input
        v-model="editable.coverImg"
        type="text"
        placeholder="event cover image..."
      />
      <label for="">Event Capacity</label>
      <input
        v-model="editable.capacity"
        type="number"
        placeholder="event capacity..."
      />

      <button class="btn btn-primary m-5" @click="editEvent()">Submit</button>
    </form>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
export default {
  setup() {
    editable = ref({})
    return {
      editable
    }
  }
}
</script>


<style lang="scss" scoped>
</style>