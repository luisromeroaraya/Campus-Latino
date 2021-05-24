<template>
  <div id="play" class="container py-5">
    <h2>Reproductor</h2>
    <div class="card my-2" style="max-width: 800px; margin: auto">
      <div class="row g-0">
        <div class="col">
          <div class="card-body">
            <h5 class="card-title">
              <iframe
                v-bind:src="
                  'https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com/radiocampusbruxelles/' +
                  this.data.slug +
                  '/&hide_cover=1'
                "
                style="border: 0; width: 100%; height: 120px"
                allowfullscreen
                scrolling="no"
                allow="encrypted-media"
              ></iframe>
            </h5>
            <p class="card-text">
              <i class="bi bi-play"></i>Reproducciones:
              {{ this.data.play_count }}
            </p>
            <p class="card-text">
              {{ this.data.description }}
            </p>
            <p class="card-text">
              <small class="text-muted"
                >Fecha de subida:
                {{ format_date(this.data.updated_time) }}</small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <p class="text-center">
      <router-link to="/episodes">Volver Atrás</router-link>
    </p>
  </div>
</template>

<script>
import moment from "moment"; // Used to format date/time output
import getData from "@/api/data";
//import getEmbed from "@/api/embed";

export default {
  name: "Player",
  props: ["slug"],
  data() {
    return {
      data: {},
      embed: {},
    };
  },
  mounted() {
    this.refreshData();
    //this.refreshEmbed();
  },
  methods: {
    refreshData() {
      const self = this;
      getData(this.slug).then(function (data) {
        self.data = data;
      });
    },
    // refreshEmbed() {
    //   const self = this;
    //   getEmbed(this.slug).then(function (embed) {
    //     self.embed = embed;
    //   });
    // },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
  },
};
</script>