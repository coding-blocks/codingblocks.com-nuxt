<template>
  <div class="section bg-dark">
    <div class="container py-4">
      <div class="row">
        <div 
          v-for="feature in features" 
          :key="feature.id" 
          class="col-sm-3 text-center text-white">
          <fab
            :icon="['fas', feature.icon]"
            class="fa-3x text-muted"
          />
          <h3>{{ feature.title }}</h3>
          <p>
            {{ feature.description }}
          </p>
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
    features: '',
  },
})
export default class CourseFeatures extends Vue {}
</script>
