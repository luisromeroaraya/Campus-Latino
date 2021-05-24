<template>
  <router-link :to="'/player/' + episode.slug" class="text-decoration-none">
    <div class="card mb-3 col-12 col-lg-5" style="margin: auto">
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
              {{ episode.name }}
            </h5>
            <p class="card-text">
              <i class="bi bi-play"></i>Reproducciones: {{ episode.play_count
              }}<br />
              <i class="bi bi-clock"></i> Duración:
              {{ Math.floor(episode.audio_length / 60 / 60) }}h{{
                Math.floor((episode.audio_length / 60) % 60)
              }}m
            </p>
            <p class="card-text">
              <small class="text-muted"
                >Fecha de subida: {{ format_date(episode.updated_time) }}</small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import moment from "moment"; // Used to format date/time output

export default {
  name: "Episode",
  props: ["episode"],
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
  },
};
</script>