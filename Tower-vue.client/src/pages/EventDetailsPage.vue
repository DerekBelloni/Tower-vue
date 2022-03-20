<template>
  <div class="container mt-3 mb-5 card-border rounded">
    <ActiveEventCard />
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12 bg-primary rounded text-dark">
        <h2>Event Attendees Template</h2>
        <img
          class="img"
          src="https://media.istockphoto.com/photos/sea-otter-british-columbia-picture-id507171882?b=1&k=20&m=507171882&s=170667a&w=0&h=j6RDmP-Gz0M9xG1JYPy8QMlXjdPCzOjFV_vi0GjvCyU="
          alt=""
        />
        <img class="img" :src="account.image" alt="" />
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 bg-primary text-dark rounded-top">
        <h2>Event Comments Template</h2>
        <form @submit.prevent="createPost">
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Leave a Comment</label>
            <textarea
              name="body"
              class="form-control mb-3"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Create Post..."
            ></textarea>
          </div>
        </form>
      </div>
      <div class="col-12 d-flex justify-content-end bg-primary rounded-bottom">
        <button title="submit" class="btn btn-primary rounded-pill shadow m-2">
          Submit
        </button>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row justify-content-between">
        <div class="col-2 bg-primary rounded p-3">
          <img
            class="img"
            src="https://media.istockphoto.com/photos/sea-otter-british-columbia-picture-id507171882?b=1&k=20&m=507171882&s=170667a&w=0&h=j6RDmP-Gz0M9xG1JYPy8QMlXjdPCzOjFV_vi0GjvCyU="
            alt=""
          />
        </div>
        <div class="col-8">
          <h2>Chomps the Otter</h2>
          <h4>Where are the clams my guy?</h4>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  setup() {
    return {
      activeEvent: computed(() => AppState.activeEvent),
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
.card-border {
  border: #c9fbff solid 2px;
  background-color: #1b263b;
}
img {
  max-width: 75px;
  border: #c9fbff solid 2px;
  border-radius: 50%;
}
</style>