<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-start banner-font">
        <h2 class="banner-font">The Best Seats In The House...</h2>
      </div>
    </div>
    <div class="row cover-img rounded">
      <div class="col-md-4 shadow rounded text-Start banner-size"></div>
    </div>
    <div class="row">
      <div class="col-12 text-end banner-font">
        <h2 class="banner-font">Anywhere in The World</h2>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div
        class="
          col-12
          d-flex
          bg-dark
          text-light
          justify-content-around
          align-items-center
          categories
          rounded
        "
      >
        <h4
          class="selectable category-border"
          title="all"
          @click="filterEvents('')"
        >
          All
        </h4>
        <h4
          class="selectable category-border"
          title="conventions"
          @click="filterEvents('convention')"
        >
          Conventions
        </h4>
        <h4
          class="selectable category-border"
          title="sports"
          @click="filterEvents('sport')"
        >
          Sports
        </h4>
        <h4
          class="selectable category-border"
          title="concerts"
          @click="filterEvents('concert')"
        >
          Concerts
        </h4>
        <h4
          class="selectable category-border"
          title="digital"
          @click="filterEvents('digital')"
        >
          Digital
        </h4>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row mt-3 mx-1 justify-content-between">
      <div
        class="col-md-4 card bg-dark rounded py-2 px-2 card-style card-border"
        v-for="t in towerEvents"
        :key="t.id"
      >
        <EventCard :towerEvent="t" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted, watchEffect } from "@vue/runtime-core"
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
          eventsService.filterEvents(type)

        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },

      // async setActiveEvent() {
      //   try {
      //     eventsService.setActiveEvent(AppState.towerEvents.id)
      //   } catch (error) {
      //     logger.error(error)
      //     Pop.toast(error.message, 'error')
      //   }
      // }
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
  border: solid black 1px;
}

.card-style {
  min-width: 20rem;
  border: solid #c9fbff 1px;
}

.category-border:hover {
  border-bottom: #64dfdf solid 3px;
}

.card-border {
  border: black solid 2px;
}

.card-border:hover {
  border: #c9fbff solid 2px;
}
.cover-img {
  background-image: url("https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60");
  background-size: cover;
  background-position: center;
}

.banner-font {
  color: #c9fbff;
  font-family: "Pacifico";
}

.banner-size {
  min-height: 20vh;
  min-width: 90vh;
}
</style>
