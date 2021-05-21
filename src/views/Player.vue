<template>
  <div id="play" class="container py-5">
    <h2>Reproductor</h2>

    <div class="card mb-3" style="max-width: 800px; margin: auto">
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
            <p class="card-text" align="left">
              <i class="bi bi-play"></i>Reproducciones:
              {{ this.data.play_count }}
            </p>
            <p class="card-text" align="left">
              {{ this.data.description }}
            </p>
            <p class="card-text" align="left">
              <small class="text-muted"
                >Fecha de subida: {{ this.data.updated_time }}</small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  },
};
</script>