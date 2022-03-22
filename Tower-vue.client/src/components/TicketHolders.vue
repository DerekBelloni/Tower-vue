<template>
  <h2>Who's attending this event</h2>
  <div class="row">
    <div class="col-12">
      <img class="img" :src="tickets.picture" alt="" :title="tickets.name" />
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
export default {
  props: {
    tickets: {
      type: Object,
      required: true
    },
  },
  setup() {
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
img {
  max-width: 75px;
  border: #c9fbff solid 2px;
  border-radius: 50%;
}
</style>