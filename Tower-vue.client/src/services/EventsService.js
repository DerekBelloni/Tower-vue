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
}

export const eventsService = new EventsService();