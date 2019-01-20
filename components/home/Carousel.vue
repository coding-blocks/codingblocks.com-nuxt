<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div 
        v-for="banner in banners" 
        :key="banner" 
        class="swiper-slide">
        <b-img 
          :src="banner"
          class="banner-image"
          fluid/>
      </div>
    </div>
    <div 
      slot="button-prev"
      class="swiper-button-prev swiper-button-white" />
    <div 
      slot="button-next"
      class="swiper-button-next swiper-button-white" />
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import Cover1 from '@/assets/images/cover/cover1.jpg'
import Cover2 from '@/assets/images/cover/cover2.jpg'
import Cover3 from '@/assets/images/cover/cover3.jpg'
import Cover4 from '@/assets/images/cover/cover4.jpg'
import Cover5 from '@/assets/images/cover/cover5.jpg'
import Cover6 from '@/assets/images/cover/cover6.jpg'

@Component({
  components: {}
})
export default class extends Vue {
  banners = [Cover1, Cover2, Cover3, Cover4, Cover5, Cover6]
  swiperOption = {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
}
</script>
<style>
.swiper-wrapper {
  height: 70vh;
  min-height: 600px;
}
.banner-image {
  width: 100%;
}
</style>
