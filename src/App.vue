<template>
  <div id="app">
    <Header />
    <Welcome msg="Bienvenido a Campus Latino" />
    <Episodes />
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

export default {
  name: "App",
  components: {
    Welcome,
    Header,
    Footer,
    Episodes,
    About,
    Contact
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
