<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-12 bg-light shadow rounded text-center">
        <h1 class="text-dark">Banner Img</h1>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div
        class="
          col-12
          d-flex
          bg-primary
          justify-content-around
          align-items-center
          categories
          rounded
        "
      >
        <h4 class="selectable" title="all" @click="filterEvents('')">All</h4>
        <h4
          class="selectable"
          title="conventions"
          @click="filterEvents('conventions')"
        >
          Conventions
        </h4>
        <h4 class="selectable" title="sports" @click="filterEvents('sports')">
          Sports
        </h4>
        <h4
          class="selectable"
          title="concerts"
          @click="filterEvents('concerts')"
        >
          Concerts
        </h4>
        <h4 class="selectable" title="digital" @click="filterEvents('digital')">
          Digital
        </h4>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-3 justify-content-between">
      <div
        class="col-md-3 card bg-light rounded m-1 py-2"
        v-for="t in towerEvents"
        :key="t.id"
      >
        <EventCard :towerEvent="t" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { eventsService } from "../services/EventsService"
import { AppState } from "../AppState"
export default {
  setup() {
    onMounted(async () => {
      try {
        await eventsService.getEvents()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      towerEvents: computed(() => AppState.towerEvents),
      async filterEvents(type) {
        try {
          await eventsService.filterEvents(type)
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
<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.banner-img {
  width: 100%;
  max-height: 20vh;
}

.categories {
  min-height: 10vh;
}

.event-card {
  min-width: 200px;
}
</style>
