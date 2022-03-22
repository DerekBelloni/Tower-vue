import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class TicketsService {
  async deleteTicket(ticketId) {
    logger.log('ticket id', ticketId)
    const res = await api.delete('api/tickets/' + ticketId)
    AppState.myTickets = AppState.myTickets.filter(m => m.ticketId != ticketId)

  }

  async getTickets(eventId) {
    const res = await api.get('api/events/' + eventId + '/tickets')
    logger.log('get tickets for this event', res.data)
    AppState.tickets = res.data
  }
}

export const ticketsService = new TicketsService();