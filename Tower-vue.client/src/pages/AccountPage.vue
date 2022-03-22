<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <div v-for="m in myEvents" :key="m.id">
      <p>{{ m.id }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account),
      myEvents: computed(() => AppState.myEvents),

    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
