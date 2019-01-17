<template>
  <div class="footer">
    <footer class="bg-dark pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <b-img 
              :src="Logo"
              fluid 
              alt="Logo" 
              class="logo"/></div>
          <div class="footer-description col-md-9 text-white mt-2">
            <p>
              Coding Blocks was founded in 2014 with a mission to create skilled Software Engineers for
              our country and the world. We are here to bridge the gap between the quality of skills
              demanded by industry and the quality of skills imparted by conventional institutes. At
              Coding Blocks, we strive to increase student interest by providing hands on practical
              training on every concept taught in the classroom.
            </p>
          </div>
        </div>
        <div class="row mt-4">
          <div class="widget col-md-4">
            <h6 
              itemprop="name" 
              class="title">
              <a 
                class="text-white"
                href="/about.html">
                About
                Us
              </a>
            </h6>
            <hr>
            <ul class="list-unstyled">
              <li 
                v-for="about in abouts" 
                :key="about.text">
                <a 
                  href="#" 
                  class="text-white">{{ about.text }}</a>
              </li>
            </ul>
          </div>
          <div class="widget col-md-4">
            <h6 
              itemprop="name" 
              class="title">
              <a 
                class="text-white"
                href="/courses/">Courses</a>
            </h6>
            <hr>
            <ul class="list-unstyled">
              <li 
                v-for="course in courses" 
                :key="course.id">
                <a 
                  href="#" 
                  class="text-white">{{ course.name }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h6 class="text-white">Twitter Feed
              <br>
            </h6>
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 text-left">
            <div>
              <span class="small text-white">© Copyright 2018 - Coding Blocks Pvt. Ltd.</span>
            </div>
            <div>
              <a 
                class="text-white"
                href="/privacypolicy.html" 
                target="_blank">Privacy Policy</a> ||
              <a 
                class="text-white"
                href="/tos.html" 
                target="_blank">Terms of Service</a>
            </div>
          </div>
          <div class="col-sm-6 text-right">
            <ul class="list-inline">
              <li 
                v-for="social in socials"
                :key="social.site" 
                class="list-inline-item">
                <a 
                  :href="social.url" 
                  target="_blank">
                  <fab 
                    :icon="social.icon_class" 
                    class="fa-2x text-muted"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <a 
              class="btn btn-outline-light btn-sm back-to-top" 
              href="#top">Top</a>
          </div>
        </div>
      </div>

      <div style="display:inline;">
        <img
          height="1"
          width="1"
          style="border-style:none;"
          alt
          src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/858471704/?guid=ON&amp;script=0"
        >
      </div>
    </footer>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import Logo from '@/assets/images/logo-footer.png'

@Component({
  components: {}
})
export default class Footer extends Vue {
  Logo = Logo

  get courses() {
    return this.$store.state.course.courses
  }

  abouts = [
    { text: 'Why Coding Blocks' },
    { text: 'Reviews' },
    { text: 'Our Team' },
    { text: 'Download Brochure' },
    { text: 'Request a Workshop' },
    { text: 'Wall of Fame' },
    { text: 'Newsletter' },
    { text: 'Events' },
    { text: 'Hackerblocks' }
  ]

  socials = [
    {
      site: 'Twitter',
      icon_class: ['fab', 'twitter'],
      url: 'http://twitter.com/codingblocksIN'
    },
    {
      site: 'Facebook',
      icon_class: ['fab', 'facebook'],
      url: 'http://facebook.com/codingblocksindia'
    },
    {
      site: 'LinkedIn',
      icon_class: ['fab', 'linkedin'],
      url: 'https://www.linkedin.com/company/coding-blocks'
    },
    {
      site: 'Youtube',
      icon_class: ['fab', 'youtube'],
      url: 'https://www.youtube.com/codingblocksindia'
    },
    {
      site: 'Github',
      icon_class: ['fab', 'github'],
      url: 'http://github.com/coding-blocks'
    }
  ]
}
</script>
<style>
</style>
