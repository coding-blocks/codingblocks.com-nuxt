<template>
  <div class="section bg-light">
    <div class="container py-4">
      <div class="row">
        <div class="col text-center">
          <h1 class="display-5 text-uppercase text-primary">What Our Students Say</h1>
        </div>
      </div>
      <div class="row">
        <ReviewCard 
          v-for="review in reviews"
          :key="review.id"
          :image-src="review.imageSrc"
          :name="review.name"
          :course="review.course"
          :review="review.review"
          :star_count="review.star_count"/>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import ReviewCard from '@/components/cards/ReviewCard'

@Component({
  components: {
    ReviewCard
  },
  props: {
    reviews: {}
  }
})
export default class extends Vue {}
</script>
