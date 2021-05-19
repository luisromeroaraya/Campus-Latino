<template>
  <div
    id="contact"
    class="container"
    style="padding-top: 10rem; width: 50rem"
  >
    <h2>Contacto</h2>
    <form
      id="contact-form"
      class="text-center"
      style="width: 100%; max-width: 30rem; margin: auto"
    >
      <!-- Name input -->
      <div class="form-outline mb-4">
        <input
          type="text"
          id="name"
          name="name"
          class="form-control"
          placeholder="Nombre"
        />
        <div class="form-notch">
          <div class="form-notch-leading" style="width: 9px"></div>
          <div class="form-notch-middle" style="width: 42.4px"></div>
          <div class="form-notch-trailing"></div>
        </div>
      </div>

      <!-- Email input -->
      <div class="form-outline mb-4">
        <input
          type="email"
          id="email"
          name="email"
          class="form-control"
          placeholder="Correo electrónico"
        />
        <div class="form-notch">
          <div class="form-notch-leading" style="width: 9px"></div>
          <div class="form-notch-middle" style="width: 88.8px"></div>
          <div class="form-notch-trailing"></div>
        </div>
      </div>

      <!-- Subject input -->
      <div class="form-outline mb-4">
        <input
          type="text"
          id="subject"
          name="subject"
          class="form-control"
          placeholder="Sujeto"
        />
        <div class="form-notch">
          <div class="form-notch-leading" style="width: 9px"></div>
          <div class="form-notch-middle" style="width: 50.4px"></div>
          <div class="form-notch-trailing"></div>
        </div>
      </div>

      <!-- Message input -->
      <div class="form-outline mb-4">
        <textarea
          class="form-control"
          id="message"
          name="message"
          placeholder="Déjanos tu mensaje..."
          rows="4"
        ></textarea>
        <div class="form-notch">
          <div class="form-notch-leading" style="width: 9px"></div>
          <div class="form-notch-middle" style="width: 60px"></div>
          <div class="form-notch-trailing"></div>
        </div>
      </div>

      <!-- Submit button -->
      <button class="btn btn-primary btn-block mb-4">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {},
};
</script>