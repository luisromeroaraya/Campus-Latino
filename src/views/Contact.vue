<template>
  <div id="contact" class="container py-5">
    <h2 class="mb-3">Contacto</h2>
    <form
      method="POST"
      action="https://submit-form.com/Fy3Hr5P9"
      data-botpoison-public-key="pk_6bc5391f-541a-456f-8ddc-02d475af848b"
      id="contact-form"
      style="max-width: 500px; margin: auto"
    >
      <!-- Name input -->
      <div class="form-outline mb-2">
        <input
          type="text"
          id="name"
          name="name"
          class="form-control"
          placeholder="Nombre"
        />
      </div>
      <!-- Email input -->
      <div class="form-outline mb-2">
        <input
          type="email"
          id="email"
          name="email"
          class="form-control"
          placeholder="Correo electrónico"
        />
      </div>
      <!-- Subject input -->
      <div class="form-outline mb-2">
        <input
          type="text"
          id="subject"
          name="subject"
          class="form-control"
          placeholder="Sujeto"
        />
      </div>
      <!-- Message input -->
      <div class="form-outline mb-2">
        <textarea
          class="form-control"
          id="message"
          name="message"
          placeholder="Déjanos tu mensaje..."
          rows="4"
        ></textarea>
      </div>
      <!-- Formspark custom redirect url -->
      <input
        type="hidden"
        name="_redirect"
        value="http://www.campuslatino.tk/"
      />
      <input type="hidden" name="_append" value="false" />
      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>