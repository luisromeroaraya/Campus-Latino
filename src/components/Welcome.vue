<template>
  <div id="welcome" class="container p-5">
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
    <img height="500px" src="https://scontent.fcrl1-1.fna.fbcdn.net/v/t1.6435-9/179483261_3987581138024506_8998535709353194794_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=OF7pSr4JTiAAX81D03i&_nc_ht=scontent.fcrl1-1.fna&oh=167ceff859d600f4654d83df0b7109b8&oe=60CC44C6" alt="Banner">
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
