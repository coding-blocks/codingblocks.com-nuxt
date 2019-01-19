<template>
  <div class="section">
    <div class="container-fluid">
      <div class="row bg-dark p-5">
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
  props: {
    title: '',
    subtitle: ''
  }
})
export default class extends Vue {}
</script>
