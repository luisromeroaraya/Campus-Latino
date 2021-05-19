<template>
  <div id="welcome" class="p-5 vh-100">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <strong>La radio de la comunidad latinoamericana en Bruselas</strong>
    <br>
    <p>
      Mantente informado de nuestra programación semanal a través de nuestro
      <a
        href="https://www.facebook.com/CampusLatino"
        target="_blank"
        rel="noopener"
        >Facebook</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
