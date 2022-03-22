import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class EventsService {

  async setActiveEvent(activeEventId) {
    logger.log('active event id', activeEventId)
    const res = await api.get('api/events/' + activeEventId)
    AppState.activeEvent = res.data
    logger.log('Active Event', AppState.activeEvent.id)
  }
  async getEvents() {
    const res = await api.get('api/events')
    logger.log('getting events', res.data)
    AppState.towerEvents = res.data
  }

  async filterEvents(type) {
    const res = await api.get('api/events/?type=' + type)
    logger.log(res.data)
    AppState.towerEvents = res.data


  }

  async editEvent(eventId, body) {
    const res = await api.put('api/events/' + eventId, body)
    logger.log(res.data)
    AppState.activeEvent = res.data
  }

  async attendEvent(ticketData) {
    logger.log(AppState.activeEvent.capacity)
    const res = await api.post('api/tickets', ticketData)
    logger.log('[new ticket]', res.data)
    AppState.myEvents.unshift(res.data)
    AppState.tickets.unshift(res.data)
    logger.log('[My new event]', res.data)
    logger.log('event capacity after purchase', AppState.activeEvent.capacity)
  }

  async createEvent(body) {
    const res = await api.post('api/events', body)
    logger.log('new event', res.data)
    AppState.activeEvent = res.data
    AppState.towerEvents.unshift(res.data)

  }

  async cancelEvent(id) {
    let eventToCancel = AppState.towerEvents.find(t => t.id == id)
    // eventToCancel.isCanceled = !eventToCancel.isCanceled
    const res = await api.delete('api/events/' + id, eventToCancel)
    logger.log('event is canceled', res.data)
    eventToCancel = res.data

  }
}

export const eventsService = new EventsService();