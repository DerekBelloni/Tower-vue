import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class EventsService {

  setActiveEvent(activeEvent) {
    AppState.activeEvent = activeEvent
    logger.log('Active Event', AppState.activeEvent)
  }
  async getEvents() {
    const res = await api.get('api/events')
    logger.log('getting events', res.data)
    AppState.towerEvents = res.data
  }

  async filterEvents(type) {
    AppState.towerEvents = AppState.towerEvents.filter(t => t.type == type)
  }

  async createEvent(body) {
    const res = await api.post('', body)
    logger.log('new event', res.data)
    AppState.towerEvents.unshift(res.data)
    AppState.activeEvent = res.data
  }
}

export const eventsService = new EventsService();