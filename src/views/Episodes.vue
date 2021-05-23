<template>
  <div id="episodes" class="container py-5">
    <h2>Episodios</h2>
    <Episode
      v-for="episode in episodes"
      v-bind:episode="episode"
      v-bind:key="episode.key"
    ></Episode>
    <!-- <a
      class="mx-5"
      v-if="previous.length > 1"
      v-bind:href="'/episodes/' + (parseInt(this.page) - 1)"
      >Anterior</a
    >
    <a
      class="mx-5"
      v-if="next.length > 1"
      v-bind:href="'/episodes/' + (parseInt(this.page) + 1)"
      >Siguiente</a
    > -->
  </div>
</template>

<script>
import Episode from "@/components/Episode.vue";
import getEpisodes from "@/api";

export default {
  name: "Episodes",
  props: ["page"],
  data() {
    return {
      episodes: [],
      next: "",
      previous: "",
    };
  },
  components: {
    Episode,
  },
  mounted() {
    this.refreshEpisodes();
  },
  methods: {
    refreshEpisodes() {
      const URL =
        "https://api.mixcloud.com/search/?limit=100&offset=0&q=campus+latino&type=cloudcast";
      getEpisodes(URL, this.episodes);
    },
  },
};
</script>