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
import Footer from '@/components/app/Footer'
import Navbar from '@/components/app/Navbar'

export default {
  components: {
    Footer,
    Navbar
  }
}
</script>
