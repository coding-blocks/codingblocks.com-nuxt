<template>
  <div class="card mb-5 mb-lg-0 pt-2">
    <b-img 
      :src="course.logo" 
      width="148"
      height="148"
      class="mx-auto"
      alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title text-muted text-uppercase text-center">{{ course.name }}</h5>
      <h3 class="card-price text-center">₹{{ course.markedPrice }}</h3>
      <div class="text-center">
        <p>{{ course.tagline }}</p>
        <p>(10 Lectures)</p>
      </div>
      <a 
        href="#" 
        class="btn btn-block btn-primary text-uppercase">Register Now</a>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {},
  props: {
    course: {}
  }
})
export default class CourseCard extends Vue {}
</script>
