<template>
  <header id="header">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img
            class="bi me-2"
            width="40"
            alt="Campus Latino logo"
            src="../assets/logo-transparent.png"
          />
          <span class="fs-4">Campus Latino 92.1 FM</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/"
                >Inicio</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#episodes">Episodios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">Sobre nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contacto</a>
            </li>
          </ul>
          <p id="player">
            <audio preload="metadata" controls="controls">
              Your browser does not support the <code>audio</code> element.
              <source
                src="https://www.radiocampus.be/stream/stream_hi.ogg"
                type="audio/ogg"
              />
              <source
                src="https://www.radiocampus.be/stream/stream_low.ogg"
                type="audio/ogg"
              />
              <source
                src="https://www.radiocampus.be/stream/stream.mp3"
                type="audio/mpeg"
              />
              <source
                src="https://www.radiocampus.be/stream/stream.aacplus"
                type="audio/mp4"
              />
            </audio>
          </p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>