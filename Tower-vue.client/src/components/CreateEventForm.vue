<template>
  <form class="d-flex flex-column">
    <label for="">Event Name</label>
    <input type="text" placeholder="event name..." />
    <label for="">Event Description</label>
    <input type="text" placeholder="event description..." />
    <label for="">Event Location</label>
    <input type="text" placeholder="event location..." />
    <label for="">Event Capacity</label>
    <input type="number" placeholder="event capacity..." />
    <button class="btn btn-primary m-5">Submit</button>
  </form>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>