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
    const res = await api.get('api/events')
    AppState.towerEvents = AppState.towerEvents.filter(t => t.type == type)


  }

  async createEvent(body) {
    const res = await api.post('api/events', body)
    logger.log('new event', res.data)
    AppState.towerEvents.unshift(res.data)
    // AppState.activeEvent = res.data
  }

  async cancelEvent(id) {
    let eventToCancel = AppState.towerEvents.find(t => t.id == id)
    logger.log('event to cancel is', eventToCancel.isCanceled)
    eventToCancel.isCanceled = !eventToCancel.isCanceled
    const res = await api.put('api/events/' + id, eventToCancel.isCanceled)
    logger.log('event is canceled', res.data)

  }
}

export const eventsService = new EventsService();