<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12 bg-primary text-dark rounded-top">
        <h2>Event Comments Template</h2>
        <form>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Leave a Comment</label>
            <textarea
              v-model="editable.body"
              name="body"
              class="form-control mb-3"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Create Post..."
            ></textarea>
          </div>
        </form>
      </div>
      <div
        class="col-md-12 d-flex justify-content-end bg-primary rounded-bottom"
      >
        <button
          title="submit"
          class="btn btn-dark rounded-pill shadow m-2 text-light"
          @click.prevent="createComment()"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div
      class="row justify-content-between bg-primary rounded m-3"
      v-for="c in comments"
      :key="c.id"
    >
      <div class="col-md-2 bg-primary rounded p-3">
        <img class="img m-2w" :src="c.creator.picture" alt="" />
      </div>
      <div
        class="
          col-2
          bg-primary
          d-flex
          justify-content-around
          align-items-center
        "
      >
        <h6>{{ c.creator.name }}</h6>
      </div>
      <div
        class="
          col-md-6
          bg-primary
          d-flex
          justify-content-around
          align-items-center
          rounded
        "
      >
        <div
          class="
            container
            bg-dark
            text-light
            rounded
            d-flex
            align-items-center
            p-2
            comment-border
            justify-content-between
          "
        >
          <p>{{ c.body }}</p>
        </div>
        <i
          class="mdi mdi-delete-forever p-2 selectable"
          title="delete comment"
          @click="deleteComment(c.id)"
        ></i>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
import { commentsService } from "../services/CommentsService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { onMounted } from "@vue/runtime-core"
import { applyStyles } from "@popperjs/core"
export default {
  props: {
    activeEvent: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    let editable = ref({})
    onMounted(async () => {
      await commentsService.getComments(route.params.eventId)
    })
    return {
      editable,
      comments: computed(() => AppState.comments),
      account: computed(() => AppState.account),
      activeEvent: computed(() => AppState.activeEvent),
      async createComment() {
        try {
          editable.value.eventId = props.activeEvent.id
          await commentsService.createComment(editable.value, route.params.eventId)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },

      async deleteComment(commentId) {
        try {
          if (await Pop.confirm('Are You Sure?')) {
            await commentsService.deleteComment(commentId)
          }
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
.card-border {
  border: #c9fbff solid 2px;
  background-color: #1b263b;
}
.submit-button {
  color: #64dfdf;
}
.comment-border {
  border: #64dfdf solid 2px;
}
img {
  max-width: 75px;
  border: #c9fbff solid 2px;
  border-radius: 50%;
}
</style>