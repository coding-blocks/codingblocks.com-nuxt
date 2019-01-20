<template>
  <div>
    <Navbar />
    <nuxt/>
    <Footer />
  </div>
</template>

<style>
</style>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Footer from '@/components/app/Footer'
import Navbar from '@/components/app/Navbar'

@Component({
  components: {
    Footer,
    Navbar
  }
})
export default class extends Vue {
  created() {
    this.$store.dispatch('course/getCourses')
  }
}
</script>
