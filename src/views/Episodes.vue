<template>
  <div id="episodes" class="container py-5">
    <h2 class="mb-2">Episodios</h2>
    <div class="row">
      <div class="col-12 col-lg-5 mt-2" style="margin: auto">
        <p>Buscar: <input class="w-100" v-model="filterText" /></p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-5 mb-5" style="margin: auto">
        <label for="filter">Filtrar por año:</label>
        <select id="filter" class="form-control" v-model="filterText">
          <option v-if="year == ''" selected value="">Todos</option>
          <option v-else value="">Todos</option>
          <option value="2022">2022</option>
          <option v-if="year == 2021" selected value="2021">2021</option>
          <option v-else value="2021">2021</option>
          <option v-if="year == 2020" selected value="2020">2020</option>
          <option v-else value="2020">2020</option>
          <option v-if="year == 2019" selected value="2019">2019</option>
          <option v-else value="2019">2019</option>
          <option v-if="year == 2018" selected value="2018">2018</option>
          <option v-else value="2018">2018</option>
          <option v-if="year == 2017" selected value="2017">2017</option>
          <option v-else value="2017">2017</option>
        </select>
      </div>
    </div>
    <div class="row">
      <Episode
        v-for="episode in filteredEpisodes"
        v-bind:episode="episode"
        v-bind:key="episode.key"
      ></Episode>
    </div>
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
      year: "",
      filterText: "",
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
        "https://api.mixcloud.com/search/?limit=100&offset=0&q=campuslatino+:year&type=cloudcast";
      const url = URL.replace(":year", this.year);
      getEpisodes(url, this.episodes);
    },
  },
  computed: {
    filteredEpisodes() {
      let filter = new RegExp(this.filterText, "i");
      return this.episodes.filter((el) => el.name.match(filter));
    },
  },
};
</script>