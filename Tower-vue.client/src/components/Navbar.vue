<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center"></div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      class="collapse navbar-collapse justify-content-between"
      id="navbarText"
    >
      <i class="mdi mdi-radio-tower tower-icon title-font selectable">
        <span><b>Tower</b></span>
      </i>
      <div>
        <button
          class="btn btn-primary-outline title-font"
          data-bs-toggle="modal"
          data-bs-target="#create-event-modal"
        >
          Create Event
        </button>
      </div>
      <Modal id="create-event-modal">
        <template #modal-title class="text-primary">Create an Event!</template>
        <template #modal-body><CreateEventForm /></template>
      </Modal>
      <Login />
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
/* a:hover {
  text-decoration: none;
} */
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.tower-icon {
  color: #64dfdf;
  font-size: 70px;
}

.title-font {
  color: #64dfdf;
  font-family: "Pacifico", cursive;
}
</style>
