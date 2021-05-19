<template>
  <div id="app">
    <Header />
    <Welcome msg="Bienvenido a Campus Latino" />
    <div id="episodes" class="container p-5" style="padding-top: 10rem">
        <h2>Episodios</h2>
        <ul>
            <Episodes v-for="episode in episodes" v-bind:episode="episode" v-bind:key="episode.key"></Episodes>
        </ul>
    </div>
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Episodes from "./components/Episodes.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import getEpisodes from "./api";

export default {
  name: "App",
  data() {
    return {
      episodes: [],
    };
  },
  components: {
    Welcome,
    Header,
    Footer,
    Episodes,
    About,
    Contact,
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

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
