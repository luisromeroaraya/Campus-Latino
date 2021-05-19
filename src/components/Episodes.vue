<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          v-bind:src="episode.pictures.large"
          v-bind:alt="episode.name"
          class="img-fluid"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            <a v-bind:href="episode.url" target="_blank">{{ episode.name }}</a>
          </h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted"
              >Last updated: {{ episode.updated_time }}</small
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Episodes",
  props: ["episode"],
};
</script>