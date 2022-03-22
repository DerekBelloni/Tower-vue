import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class CommentsService {

  async createComment(body) {
    const res = await api.post('api/comments', body)
    logger.log('active event comment', res.data)
    AppState.comments.unshift(res.data)
    logger.log(AppState.comments)
  }

  async getComments(eventId) {
    const res = await api.get('api/events/' + eventId + '/comments')
    logger.log('comments for events', res.data)
    AppState.comments = res.data
  }

  async deleteComment(commentId) {
    logger.log(commentId)
    const res = await api.delete('api/comments/' + commentId)
    logger.log(res.data)
    AppState.comments = AppState.comments.filter(c => c.id != commentId)
  }
}

export const commentsService = new CommentsService()