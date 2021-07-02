<template>
  <div id="home" class="container py-5">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br />
    <strong>La radio de la comunidad latinoamericana en Bruselas</strong>
    <br />
    <br />
    <p>
      Escucha nuestros podcasts anteriores
      <router-link to="/episodes">haciendo click aquí.</router-link>
    </p>
    <p>
      Mantente informado de nuestra programación semanal a través de nuestro
      <a
        href="https://www.facebook.com/CampusLatino"
        target="_blank"
        rel="noopener"
        >Facebook</a
      >.
    </p>
    <div class="container-fluid">
      <img
        class="img-fluid"
        src="https://scontent.fcrl1-1.fna.fbcdn.net/v/t1.6435-9/206691617_4166974093418542_6571232164508525384_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=-AWoEhHQ3qUAX_-t5io&_nc_ht=scontent.fcrl1-1.fna&oh=a0b253b3fe2f19ed387f4d02bafca864&oe=60E335CA"
        alt="Banner"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  text-align: center;
}
</style>
