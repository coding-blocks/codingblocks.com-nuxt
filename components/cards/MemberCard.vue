<template>
  <div class="col-sm-6 col-md-3">
    <b-img 
      :src="imageSrc" 
      fluid 
      alt 
      class="rounded-circle"/>
    <h5 class="text-center my-2">{{ name }}</h5>
    <h6 class="text-center my-2">{{ designation }}</h6>
    <p class="text-center my-2">
      {{ description }}
    </p>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  props: {
    imageSrc: '',
    name: '',
    designation: '',
    description: '',
  }
})
export default class extends Vue {}
</script>
