<template>
  <div class="col-sm-12 col-md-6 p-3">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <b-img 
              :src="imageSrc" 
              fluid 
              alt 
              class="rounded-circle"/>
            <h5 class="text-center my-2">{{ name }}</h5>
            <h6 class="text-center my-2">{{ course }}</h6>
            <div class="text-center">
              <fab 
                v-for="i in star_count"
                :icon="['fas', 'star']" 
                :key="i"
                class="text-primary" />
            </div>
          </div>
          <div class="col-sm-12 col-md-8">
            <b>Review:</b>
            <br>
            <p class="text-justify">
              {{ review }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  props: {
    imageSrc: '',
    name: '',
    course: '',
    review: '',
    star_count: 0,
  }
})
export default class extends Vue {}
</script>
