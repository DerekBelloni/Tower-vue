import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class EventsService {

  async getEvents() {
    const res = await api.get('api/events')
    logger.log('getting events', res.data)
    AppState.towerEvents = res.data
  }

  filterEvents(type) {
    let filteredEvent = AppState.towerEvents.filter(t => t.type == type)
    AppState.towerEvents = filteredEvent
  }
}

export const eventsService = new EventsService();