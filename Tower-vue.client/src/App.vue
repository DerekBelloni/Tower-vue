<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-dark">
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      <i class="mdi mdi-radio-tower tower-icon"></i>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState),
      towerEvent: computed(() => AppState.towerEvents)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.tower-icon {
  font-size: 64px;
  color: #64dfdf;
}
</style>
