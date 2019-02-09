<template>
  <div class="section">
    <div class="container-fluid">
      <div 
        :style="{ 'background-image': 'url(' + bannerimage + ')' }" 
        class="row hero-image p-5">
        <div class="col-6 text-center text-white">
          <h1 class="display-3">{{ title }}</h1>
          <p class="lead">{{ subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {},
  props: {
    bannerimage: '',
    title: '',
    subtitle: '',
  }
})
export default class CourseBanner extends Vue {}
</script>
<style>
/* The hero image */
.hero-image {
  /* Set a specific height */
  height: 50%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
