<template>
  <div id="episodes" class="container pb-5" style="padding-top: 6rem">
    <h2>Episodios</h2>
    <Episode
      v-for="episode in episodes"
      v-bind:episode="episode"
      v-bind:key="episode.key"
    ></Episode>
    <a v-if="next.length > 1" href="episodes/2">Siguiente página</a>
  </div>
</template>

<script>
import Episode from "@/components/Episode.vue";
import getEpisodes from "@/api";

export default {
  name: "Episodes",
  data() {
    return {
      episodes: [],
      next: "",
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
        self.episodes = episodes.data;
        self.next = episodes.paging.next;
        console.log(episodes);
      });
    },
  },
};
</script>