<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <h1>My Events</h1>
    <div v-for="m in myTickets" :key="m.id">
      <div class="container card-border m-2">
        <div class="row mt-2 selectable" @click="setActiveEvent">
          <img :src="m.coverImg" alt="" />
        </div>

        <div class="row">
          <div class="col-md-12 text-start p-2 card-text-color">
            <h1
              class="title-color"
              :style="{
                textDecoration: m.isCanceled ? 'line-through' : 'inherit',
              }"
            >
              {{ m.name }}
            </h1>
            <h3 class="text-start">{{ m.location }}</h3>
            <h3 class="text-start">
              {{ new Date(m.startDate).toDateString() }}
            </h3>
            <h3 class="text-start">Tickets Remaining: {{ m.capacity }}</h3>
            <i
              class="mdi mdi-delete-forever selectable"
              title="delete ticket"
              @click="deleteTicket(m.ticketId)"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { accountService } from "../services/AccountService"
import { ticketsService } from "../services/TicketsService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
export default {
  name: 'Account',
  setup() {
    onMounted(async () => {
      try {
        await accountService.getAccountTickets()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      account: computed(() => AppState.account),
      myEvents: computed(() => AppState.myEvents),
      myTickets: computed(() => AppState.myTickets),
      activeEvent: computed(() => AppState.activeEvent),
      async deleteTicket(ticketId) {
        try {
          // const increaseCapacity = AppState.myTickets.find(m => m.ticketId == ticketId)
          // increaseCapacity.capacity++
          await ticketsService.deleteTicket(ticketId)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
.card-border {
  border: #c9fbff solid 2px;
  background-color: #1b263b;
}
</style>
