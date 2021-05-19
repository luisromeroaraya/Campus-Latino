<template>
  <div id="episodes" class="container pb-5" style="padding-top: 6rem">
    <h2>Episodios</h2>
    <Episode
      v-for="episode in episodes"
      v-bind:episode="episode"
      v-bind:key="episode.key"
    ></Episode>
  </div>
</template>

<script>
import Episode from "@/components/Episode.vue";
import getEpisodes from "@/api";

export default {
  name: "App",
  data() {
    return {
      episodes: [],
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
      const self = this;
      getEpisodes().then(function (episodes) {
        self.episodes = episodes;
        console.log(episodes);
      });
    },
  },
};
</script>