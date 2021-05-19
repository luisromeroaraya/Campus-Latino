<template>
  <div id="play" class="container pb-5" style="padding-top: 6rem">
    <h2>Reproductor</h2>
    <iframe v-bind:src="'https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com/radiocampusbruxelles/' + slug + '/&hide_cover=1'" width="100%" height="120px" frameborder="0"></iframe>
  </div>
</template>

<script>

export default {
  name: "Player",
  props: ["slug"],
};
</script>