<template>
  <div class="row mt-2">
    <img class="img-fluid" :src="towerEvent.coverImg" alt="" />
  </div>
  <div class="row">
    <div class="col-md-12 text-start text-dark">
      <h1>{{ towerEvent.name }}</h1>
      <h3 class="text-start">{{ towerEvent.location }}</h3>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    towerEvent: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>